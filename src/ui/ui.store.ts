import type { UIMessage } from "ai";
import { proxy } from "valtio";

type UIStore = {
  messages: UIMessage[];
  isThinking: boolean;
  totalUsedTokens: number;
  maxContextWindowTokens: number;
};

export const uiStore = proxy<UIStore>({
  messages: [],
  isThinking: false,
  totalUsedTokens: 0,
  maxContextWindowTokens: 16000,
});
