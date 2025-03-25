import { ChatResponse } from '../types';

export async function sendMessage(message: string): Promise<ChatResponse> {
  // Simula uma resposta do assistente
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  return {
    message: `Entendi sua mensagem: "${message}". Como posso ajudar com suas finanças?`,
    suggestions: [
      "Como economizar nas compras?",
      "Como organizar minhas dívidas?",
      "Como fazer um orçamento mensal?"
    ]
  };
} 