import {
  defaultTheme,
  extendTheme,
  ProgressBar,
  ThemeProvider,
} from "@inkjs/ui";
import { Box } from "ink";
import { useSyncExternalStore } from "react";
import { Hero } from "./hero.tsx";
import { Messages } from "./messages.tsx";
import { Usage } from "./usage.tsx";
import { UserInput } from "./user-input.tsx";

const store = {
  subscribe: (callback: () => void) => {
    process.stdout.on("resize", callback);
    return () => process.stdout.off("resize", callback);
  },
  getRows: (): number => process.stdout.rows,
};

const customTheme = extendTheme(defaultTheme, {
  components: {
    ProgressBar: {
      styles: {
        container: () => ({ flexGrow: 1, minWidth: 15 }),
        completed: () => ({ color: "redBright" }),
      },
    },
  },
});

export function App() {
  const rows = useSyncExternalStore(store.subscribe, store.getRows);

  return (
    <ThemeProvider theme={customTheme}>
      <Box flexDirection="column" height={rows - 1}>
        <Hero />
        <Messages />
        <Usage />
        <UserInput />
      </Box>
    </ThemeProvider>
  );
}
