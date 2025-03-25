export type Message = {
  id: number;
  text: string;
  isUser: boolean;
  timestamp: string;
};

export type ChatResponse = {
  message: string;
  suggestions?: string[];
}; 