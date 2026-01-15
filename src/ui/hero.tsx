import { Box } from "ink";
import BigText from "ink-big-text";
import Gradient from "ink-gradient";

export function Hero() {
  return (
    <Box alignSelf="center">
      <Gradient name="morning">
        <BigText font="tiny" text={"AI CODING AGENT"} />
      </Gradient>
    </Box>
  );
}
