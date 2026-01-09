import { Badge, Spinner } from "@inkjs/ui";
import { Box, Text } from "ink";

function UserMessage({ children }: { children: string }) {
  return (
    <Box justifyContent="flex-end">
      <Box borderStyle={"round"} borderDimColor gap={2} paddingX={1}>
        <Text dimColor>{children}</Text>
        <Badge color={"redBright"}>ME</Badge>
      </Box>
    </Box>
  );
}

function AIMessage({ children }: { children: string }) {
  return (
    <Box gap={2} paddingX={1} width={"80%"}>
      <Badge color={"blueBright"}>AI</Badge>
      <Text>{children}</Text>
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
  return (
    <Box flexDirection="column" flexGrow={1} gap={2}>
      <UserMessage>When is now?</UserMessage>
      <AIMessage>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga sit
        molestias tempore id quis quas, aliquid et, rem blanditiis ullam ipsam
        mollitia quos nam accusantium voluptatum tempora magnam. Temporibus,
        beatae.
      </AIMessage>
      <Thinking />
    </Box>
  );
}
