import { agent } from "./agent.ts";

const res = await agent.generate({
  prompt: "总结 package.json 然后写入README.md",
});
console.log(res.text);
