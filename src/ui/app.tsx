import { defaultTheme, extendTheme, ThemeProvider } from "@inkjs/ui";
import { Box, useInput } from "ink";
import { useSyncExternalStore } from "react";
import { useSnapshot } from "valtio";
import { Hero } from "./hero.tsx";
import { Messages } from "./messages.tsx";
import { uiStore } from "./ui.store.ts";
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
  const snap = useSnapshot(uiStore);
  useInput(() => {});

  return (
    <ThemeProvider theme={customTheme}>
      <Box flexDirection="column" minHeight={rows - 1} gap={1}>
        <Hero />
        <Messages />
        {!snap.approval && (
          <>
            <Usage />
            <UserInput />
          </>
        )}
      </Box>
    </ThemeProvider>
  );
}
