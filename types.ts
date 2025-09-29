export type User = 'Alex' | 'Ben';

export const THEME_COLORS = {
    fuchsia: 'Fuchsia',
    cyan: 'Cyan',
    emerald: 'Emerald',
    orange: 'Orange',
    rose: 'Rose',
} as const;

export type ThemeColor = keyof typeof THEME_COLORS;

export interface Suggestion {
  mood: string;
  acknowledgement: string;
  encouragement: string;
  reflection_question?: string;
}

export interface Message {
  id: string;
  text: string;
  timestamp: string;
  sender: User;
  suggestion?: Suggestion | string;
  suggestionLoading?: boolean;
  audio?: string;
}

export interface QueuedMessage {
  id: number;
  text: string;
  timestamp: string;
}

export interface Task {
  id: string;
  text: string;
  completed: boolean;
}

export interface Theme {
  appBg: string;
  chatWindowBg: string;
  header: {
    headerBg: string;
    headerText: string;
    titleText: string;
  };
  message: {
    sentBg: string;
    sentText: string;
    receivedBg: string;
    receivedText: string;
    timestampText: string;
  };
  messageInput: {
    inputContainerBg: string;
    inputBg: string;
    inputText: string;
    inputPlaceholder: string;
    inputRing: string;
    sendButtonBg: string;
    sendButtonHoverBg: string;
  };
  drawer: {
    drawerBg: string;
    drawerText: string;
    drawerHeaderBg: string;
    inputBg: string;
    buttonColor: string;
    accentColor: string;
  };
  switcher: {
    containerBg: string;
    activeBg: string;
    activeText: string;
    inactiveText: string;
    inactiveHoverBg: string;
  };
}
