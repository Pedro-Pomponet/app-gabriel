export type Message = {
  id: number;
  text: string;
  isUser: boolean;
  timestamp: string;
  showContinueButton?: boolean;
};

export type ChatResponse = {
  message: string;
  suggestions?: string[];
  showContinueButton?: boolean;
}; 