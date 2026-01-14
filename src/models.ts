import { createOpenAICompatible } from "@ai-sdk/openai-compatible";
import type { LanguageModel } from "ai";
import { ollama } from "ollama-ai-provider-v2";

export const ollamaQwen3_4b_instruct_q4_KM: LanguageModel = ollama(
  "qwen3:4b-instruct-2507-q4_K_M",
);

const zhipuProvider = createOpenAICompatible({
  name: "zhipu",
  baseURL: "https://open.bigmodel.cn/api/coding/paas/v4",
  apiKey: process.env.ZHIPU_APIKEY as string,
});

export const zhipuGLMModel: LanguageModel = zhipuProvider("glm-4.7");
