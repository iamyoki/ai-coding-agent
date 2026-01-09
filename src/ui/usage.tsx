import { ProgressBar } from "@inkjs/ui";
import { Box, Spacer, Text } from "ink";
import Gradient from "ink-gradient";

export function Usage() {
  return (
    <Box>
      <Gradient name="morning">
        <Text>1. press 'ctrl+c' to quit | 2. input '/?' to get help</Text>
      </Gradient>
      <Spacer />
      <Box>
        <Text>Total Used Tokens: 777 | Context Window: 56% </Text>
        <ProgressBar value={56} />
      </Box>
    </Box>
  );
}
