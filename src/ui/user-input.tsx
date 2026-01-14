import { TextInput } from "@inkjs/ui";
import {
  convertToModelMessages,
  createIdGenerator,
  readUIMessageStream,
  type UIMessage,
} from "ai";
import { Box } from "ink";
import { useReducer } from "react";
import { agentService } from "../services/agent.service.ts";
import { uiStore } from "./ui.store.ts";

export function UserInput() {
  const [key, forceUpdate] = useReducer((p) => p + 1, 0);

  async function handleSubmit(value: string) {
    forceUpdate();
    try {
      uiStore.isThinking = true;

      const userMessage: UIMessage = {
        id: crypto.randomUUID(),
        role: "user",
        parts: [{ type: "text", text: value }],
      };

      uiStore.messages.push(userMessage);

      const result = await agentService.generateStream(
        await convertToModelMessages(uiStore.messages),
      );

      const uiMessageStream = readUIMessageStream({
        stream: result.toUIMessageStream({
          generateMessageId: createIdGenerator({ prefix: "agent", size: 16 }),
        }),
      });

      for await (const uiMessage of uiMessageStream) {
        const index = uiStore.messages.findIndex((m) => m.id === uiMessage.id);
        if (index > -1) {
          uiStore.messages[index] = uiMessage;
        } else {
          uiStore.messages.push(uiMessage);
        }
      }

      const { totalTokens } = await result.totalUsage;
      uiStore.totalUsedTokens = totalTokens ?? 0;
    } finally {
      uiStore.isThinking = false;
    }

    // await result.totalUsage
  }

  return (
    <Box
      borderStyle={"round"}
      borderColor={"redBright"}
      paddingX={2}
      paddingY={1}
    >
      <TextInput
        key={key}
        placeholder="Ask AI to do something..."
        onSubmit={handleSubmit}
      />
    </Box>
  );
}
