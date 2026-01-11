import type { ModelMessage } from "ai";
import { agent } from "../agent.ts";

class AgentService {
  private abortController?: AbortController;

  async generateStream(messages: ModelMessage[]) {
    this.abortController = new AbortController();
    const result = await agent.stream({
      messages,
      abortSignal: this.abortController.signal,
    });
    return result;
  }

  abort(reason: string) {
    this.abortController?.abort(reason);
  }
}

export const agentService = new AgentService();
