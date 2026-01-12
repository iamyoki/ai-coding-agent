import type { UIMessage } from "ai";
import { proxy } from "valtio";

type UIStore = {
  messages: UIMessage[];
  isThinking: boolean;
  totalUsedTokens: number;
  maxContextWindowTokens: number;
  approval?:
    | {
        toolName: string;
        arsg?: string | undefined;
        reason?: string | undefined;
        resolve: (approved: boolean) => void;
      }
    | undefined;
};

export const uiStore = proxy<UIStore>({
  messages: [],
  isThinking: false,
  totalUsedTokens: 0,
  maxContextWindowTokens: 16000,
});
