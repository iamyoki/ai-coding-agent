import assert from "node:assert";
import { describe, it } from "node:test";
import { stepCountIs, ToolLoopAgent } from "ai";
import { ollamaQwen3_4b_instruct_q4_KM } from "../../src/models.ts";
import { tools } from "../../src/tools/index.ts";

const agent = new ToolLoopAgent({
  model: ollamaQwen3_4b_instruct_q4_KM,
  stopWhen: stepCountIs(1),
  tools,
});

describe("Get system date time tool", () => {
  it("should call", async () => {
    // 3A
    // Arrange
    const prompt = "When is now?";

    // Act
    const { toolCalls } = await agent.generate({ prompt });

    // Assert
    assert.ok(toolCalls.length > 0);
  });
});
