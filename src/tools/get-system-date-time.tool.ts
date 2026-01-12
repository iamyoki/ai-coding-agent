import { tool } from "ai";
import z from "zod";
import { agentService } from "../services/agent.service.ts";

export const getSystemDateTimeToolSchema = z.object();

export const getSystemDateTimeTool = tool({
  description:
    "Return the system current date time. Useful to provide the current time to user.",
  inputSchema: getSystemDateTimeToolSchema,
  async execute() {
    const approved = await agentService.requestTool({
      toolName: "getSystemDateTime",
    });
    if (approved) {
      return new Date().toLocaleString();
    } else {
      return `Error: User rejected this tool call`;
    }
  },
});
