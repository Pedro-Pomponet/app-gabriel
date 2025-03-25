'use client';

import { useState } from 'react';
import { Send } from 'lucide-react';

type Message = {
  id: number;
  text: string;
  isUser: boolean;
  timestamp: string;
};

export default function DemonstracaoPage() {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: 'Olá! Eu sou seu assistente financeiro. Como posso te ajudar hoje?',
      isUser: false,
      timestamp: '15:37',
    },
  ]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: message,
      isUser: true,
      timestamp: '15:37',
    };

    setMessages(prev => [...prev, userMessage]);
    setMessage('');
  };

  return (
    <div className="min-h-screen bg-white p-4">
      <div className="max-w-3xl mx-auto">
        <div className="bg-gray-100 rounded-lg h-[500px] flex flex-col">
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg) => (
              <div key={msg.id}>
                <div className={`flex ${msg.isUser ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] rounded-lg p-3 ${
                    msg.isUser ? 'bg-green-800 text-white' : 'bg-black text-white'
                  }`}>
                    <div className="whitespace-pre-line">{msg.text}</div>
                    <div className={`text-xs mt-1 ${msg.isUser ? 'text-green-100' : 'text-gray-400'}`}>
                      {msg.timestamp}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="p-4 bg-white border-t">
            <div className="flex gap-2">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Digite sua mensagem..."
                className="flex-1 px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <button
                type="submit"
                className="bg-green-500 text-white p-3 rounded-full hover:bg-green-600"
              >
                <Send size={20} />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
} 