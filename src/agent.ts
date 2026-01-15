import { stepCountIs, ToolLoopAgent } from "ai";
import { ollamaQwen3_4b_instruct_q4_KM } from "./models.ts";
import { tools } from "./tools/index.ts";

export const agent = new ToolLoopAgent({
  // model: zhipuGLMModel,
  model: ollamaQwen3_4b_instruct_q4_KM,
  stopWhen: stepCountIs(10),
  temperature: 0.1, // 0 - 1
  tools,
});
