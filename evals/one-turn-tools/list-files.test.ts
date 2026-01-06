import assert from "node:assert";
import { describe, it } from "node:test";
import { stepCountIs, ToolLoopAgent } from "ai";
import { ollamaQwen3_4b_instruct_q4_KM } from "../../src/models.ts";
import { tools } from "../../src/tools/index.ts";
import { listFilesToolInputSchema } from "../../src/tools/list-files.tool.ts";

const agent = new ToolLoopAgent({
  model: ollamaQwen3_4b_instruct_q4_KM,
  stopWhen: stepCountIs(1),
  tools,
});

describe("List files tool", () => {
  it("should call", async () => {
    // 3A
    // Arrange
    const prompt = "What files do I have in this project?";

    // Act
    const { toolCalls } = await agent.generate({ prompt });

    // Assert
    assert.doesNotThrow(() =>
      listFilesToolInputSchema.parse(toolCalls[0]?.input),
    );
    assert.ok(toolCalls.length > 0);
    assert.ok(toolCalls[0]?.toolName.includes("list_files"));
  });
});
