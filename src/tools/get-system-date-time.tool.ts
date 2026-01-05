import { tool } from "ai";
import z from "zod";

export const getSystemDateTimeToolSchema = z.object();

export const getSystemDateTimeTool = tool({
  description:
    "Return the system current date time. Useful to provide the current time to user.",
  inputSchema: getSystemDateTimeToolSchema,
  async execute() {
    return new Date().toLocaleString();
  },
});
