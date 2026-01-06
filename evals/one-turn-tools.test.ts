import assert from "node:assert";
import { describe, it } from "node:test";
import { generateText } from "ai";
import { ollamaQwen3_4b_instruct_q4_KM } from "../src/models.ts";
import { getSystemDateTimeTool } from "../src/tools/get-system-date-time.tool.ts";

describe("One turn tools evals", () => {
  it("should call get-system-date-time tool", async () => {
    // 3A
    // Arrange
    const prompt = "When is now?";

    // Act
    const { toolCalls } = await generateText({
      model: ollamaQwen3_4b_instruct_q4_KM,
      prompt,
      tools: { get_system_date_time: getSystemDateTimeTool },
    });

    // Assert
    assert.ok(toolCalls.length > 0);
  });
});
