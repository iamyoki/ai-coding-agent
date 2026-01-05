import { generateText } from "ai";
import { ollama } from "ollama-ai-provider-v2";

const res = await generateText({
  model: ollama("qwen3:4b-instruct-2507-q4_K_M"),
  prompt: "hello",
});

console.log(res);
console.log(res.text);
