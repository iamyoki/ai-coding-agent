import { createMCPClient } from "@ai-sdk/mcp";
import { StdioClientTransport } from "@modelcontextprotocol/sdk/client/stdio.js";

export const mcpClient = await createMCPClient({
  transport: new StdioClientTransport({
    command: "uvx",
    args: ["mcp-server-git"],
  }),
});
