import dedent from "dedent";
import { Text } from "ink";
import { marked } from "marked";
import { markedTerminal } from "marked-terminal";

// biome-ignore lint/suspicious/noExplicitAny: <expected>
marked.use(markedTerminal() as any);

export function Markdown({
  children,
  isStreaming,
}: {
  children: string;
  isStreaming: boolean;
}) {
  const text = marked.parse(dedent(children));
  return <Text dimColor={isStreaming}>{text}</Text>;
}
