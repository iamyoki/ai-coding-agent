import { ProgressBar } from "@inkjs/ui";
import { Box, Spacer, Text } from "ink";
import Gradient from "ink-gradient";
import { useSnapshot } from "valtio";
import { uiStore } from "./ui.store.ts";

export function Usage() {
  const snap = useSnapshot(uiStore);

  const percentage =
    Math.round(
      (snap.totalUsedTokens / snap.maxContextWindowTokens) * 100 * 1000,
    ) / 1000;

  return (
    <Box>
      <Gradient name="morning">
        <Text>1. press 'ctrl+c' to quit | 2. input '/?' to get help</Text>
      </Gradient>
      <Spacer />
      <Box>
        <Text>
          Total Used Tokens: {snap.totalUsedTokens} | Context Window:{" "}
          {percentage}%{" "}
        </Text>
        <ProgressBar value={56} />
      </Box>
    </Box>
  );
}
