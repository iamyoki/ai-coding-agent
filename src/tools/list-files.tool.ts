import { tool } from "ai";
import { globby } from "globby";
import z from "zod";

export const listFilesToolInputSchema = z.object({
  directory: z
    .string()
    .describe("The directory path to list contents of. Support glob pattern."),
  reason: z.string().describe("Brief explanation for the usage"),
});

export const listFilesTool = tool({
  description:
    "List all files and directories in the specified directory path. Use this to access user's project working directory and files.",
  inputSchema: listFilesToolInputSchema,
  async execute({ directory }) {
    try {
      const paths = await globby(directory, { gitignore: true });
      return paths.join("\n");
    } catch {
      return `Error: directory not found`;
    }
  },
});
