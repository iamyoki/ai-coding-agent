import { render } from "ink";
import { createElement } from "react";
import { App } from "./ui/app.tsx";

// const history: ModelMessage[] = [];

// const rl = createInterface(process.stdin, process.stdout);

// while (true) {
//   const ask = await rl.question("Ask: ");
//   if (!ask.trim()) break;

//   const userMessage: ModelMessage = { role: "user", content: ask };

//   const { text, response } = await agent.generate({
//     messages: [...history, userMessage],
//   });

//   console.log(text);
//   // Add the user message to the history array
//   history.push(userMessage);
//   history.push(...response.messages);
// }

// rl.close();

render(createElement(App));
