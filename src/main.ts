import { agent } from "./agent.ts";

const { text } = await agent.generate({ prompt: "when is now?" });
console.log(text);
