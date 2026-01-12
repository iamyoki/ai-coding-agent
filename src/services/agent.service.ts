import type { ModelMessage } from "ai";
import { agent } from "../agent.ts";
import { uiStore } from "../ui/ui.store.ts";

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

  async requestTool({
    toolName,
    arsg,
    reason,
  }: {
    toolName: string;
    arsg?: string;
    reason?: string;
  }): Promise<boolean> {
    try {
      return await new Promise<boolean>((res) => {
        uiStore.approval = { toolName, arsg, reason, resolve: res };
      });
    } finally {
      uiStore.approval = undefined;
    }
  }
}

export const agentService = new AgentService();
