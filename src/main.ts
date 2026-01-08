import { createInterface } from "node:readline/promises";
import type { ModelMessage } from "ai";
import { agent } from "./agent.ts";

const history: ModelMessage[] = [];

const rl = createInterface(process.stdin, process.stdout);

while (true) {
  const ask = await rl.question("Ask: ");
  if (!ask.trim()) break;

  const userMessage: ModelMessage = { role: "user", content: ask };

  const { text, response } = await agent.generate({
    messages: [...history, userMessage],
  });

  console.log(text);
  history.push(userMessage);
  history.push(...response.messages);
}

rl.close();
