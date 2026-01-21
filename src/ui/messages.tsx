import { Badge, Spinner } from "@inkjs/ui";
import type { UIMessage } from "ai";
import { Box, Text } from "ink";
import { useSnapshot } from "valtio";
import { Approval } from "./approval.tsx";
import { Markdown } from "./markdown.tsx";
import { uiStore } from "./ui.store.ts";

function UserMessage({ message }: { message: UIMessage }) {
  return (
    <Box justifyContent="flex-end">
      <Box borderStyle={"round"} borderDimColor gap={2} paddingX={1}>
        <Text dimColor>
          {message.parts
            .filter((p) => p.type === "text")
            .map((p) => p.text)
            .join("")}
        </Text>
        <Badge color={"redBright"}>ME</Badge>
      </Box>
    </Box>
  );
}

function AIMessage({ message }: { message: UIMessage }) {
  return (
    <Box gap={2} paddingX={1} width={"80%"}>
      <Badge color={"blueBright"}>AI</Badge>
      <Box flexDirection="column" gap={1}>
        {message.parts
          .map((p, index) => {
            if (p.type === "text" && p.text.trim()) {
              const isStreaming = p.state === "streaming";
              return (
                <Markdown key={index.toString()} isStreaming={isStreaming}>
                  {p.text}
                </Markdown>
              );
            }

            if ("toolCallId" in p)
              return (
                <Text key={index.toString()}>
                  <Text backgroundColor={"yellowBright"}>
                    {p.type}({JSON.stringify(p.input ?? "{}")})
                  </Text>
                  <Text color={"yellowBright"} dimColor>
                    {" => "}
                  </Text>
                  <Text color={"yellowBright"} dimColor>
                    {typeof p.output === "string"
                      ? p.output
                      : JSON.stringify(p.output)}
                  </Text>
                </Text>
              );
            return null;
          })
          .filter(Boolean)}

        {/* {message.parts
          .filter((p) => p.type === "text")
          .map((p) => p.text)
          .join("")} */}
      </Box>
    </Box>
  );
}

function Thinking() {
  return (
    <Box gap={2}>
      <Spinner label="Thinking..." type="point" />
    </Box>
  );
}

export function Messages() {
  const snap = useSnapshot(uiStore);
  const messages = snap.messages as unknown as UIMessage[];

  return (
    <Box flexDirection="column" flexGrow={1} gap={2}>
      {messages.map((message) =>
        message.role === "user" ? (
          <UserMessage key={message.id} message={message} />
        ) : message.role === "assistant" ? (
          <AIMessage key={message.id} message={message} />
        ) : null,
      )}

      {snap.isThinking && !snap.approval && <Thinking />}
      {snap.approval && <Approval />}
    </Box>
  );
}
