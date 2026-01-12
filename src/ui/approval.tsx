import { styleText } from "node:util";
import { Alert, ConfirmInput } from "@inkjs/ui";
import { Box, Text } from "ink";
import { useSnapshot } from "valtio";
import { uiStore } from "./ui.store.ts";

export function Approval() {
  const snap = useSnapshot(uiStore);
  const approval = snap.approval;

  if (!approval) return null;

  return (
    <Box flexDirection="column" gap={1}>
      <Alert
        variant={"warning"}
        title={styleText("bgYellowBright", ` ${approval.toolName} `)}
      >
        Do you approve this tool call?
      </Alert>
      <Text color={"yellowBright"}>
        <ConfirmInput
          submitOnEnter
          onConfirm={() => approval.resolve(true)}
          onCancel={() => approval.resolve(false)}
        />{" "}
        (Press "y" for approve, "n" for reject)
      </Text>
    </Box>
  );
}
