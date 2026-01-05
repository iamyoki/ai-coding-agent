import { stepCountIs, ToolLoopAgent } from "ai";
import { ollamaQwen3_4b_instruct_q4_KM } from "./models.ts";
import { tools } from "./tools/index.ts";

export const agent = new ToolLoopAgent({
  model: ollamaQwen3_4b_instruct_q4_KM,
  stopWhen: stepCountIs(5),
  tools,
});
