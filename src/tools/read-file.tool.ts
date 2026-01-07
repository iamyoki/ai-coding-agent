import { readFile } from "node:fs/promises";
import { tool } from "ai";
import z from "zod";

export const readFileToolInputSchema = z.object({
  path: z.string().describe("The path to the file to read"),
  reason: z.string().describe("Brief explanation for the usage"),
});

export const readFileTool = tool({
  description:
    "Access and read the contents of a file at the specified path. Use this to examine file contents.",
  inputSchema: readFileToolInputSchema,
  async execute({ path }) {
    try {
      return await readFile(path, "utf8");
    } catch {
      return `Error: File not found`;
    }
  },
});
