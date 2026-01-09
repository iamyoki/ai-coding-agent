import { TextInput } from "@inkjs/ui";
import { Box, Text } from "ink";

export function UserInput() {
  return (
    <Box
      borderStyle={"round"}
      borderColor={"redBright"}
      paddingX={2}
      paddingY={1}
    >
      <TextInput placeholder="Ask AI to do something..." />
    </Box>
  );
}
