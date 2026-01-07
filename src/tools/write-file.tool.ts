import { writeFile } from "node:fs/promises";
import { tool } from "ai";
import z from "zod";

export const writeFileToolInputSchema = z.object({
  path: z.string().describe("The path to the file to read"),
  content: z.string().describe("The content to write to the file"),
  reason: z.string().describe("Brief explanation for the usage"),
});

export const writeFileTool = tool({
  description:
    "Write content to a file at the specified path. Creates the file if it doesn't exist.",
  inputSchema: writeFileToolInputSchema,
  async execute({ path, content }) {
    try {
      await writeFile(path, content, "utf8");
      return `Succefully write file: ${path}`;
    } catch (error) {
      const err = error as Error;
      return `Error: writing file ${err.message}`;
    }
  },
});
