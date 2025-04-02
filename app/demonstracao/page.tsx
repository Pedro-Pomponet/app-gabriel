'use client';

import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { SendIcon } from '../components/Icons';
import { Message } from '../types';
import { sendMessage } from '../services/chat';

export default function DemonstracaoPage() {
  const router = useRouter();
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showContinueButton, setShowContinueButton] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSubmit = async (text: string) => {
    if (!text.trim() || isLoading) return;

    setMessages(prev => [...prev, {
      id: prev.length + 1,
      text,
      isUser: true,
      timestamp: new Date().toLocaleTimeString()
    }]);
    setMessage('');
    setIsLoading(true);

    try {
      const response = await sendMessage(text);
      setMessages(prev => [...prev, {
        id: prev.length + 1,
        text: response.message,
        isUser: false,
        timestamp: new Date().toLocaleTimeString(),
        showContinueButton: response.showContinueButton
      }]);
      setShowContinueButton(response.showContinueButton || false);
    } catch (error) {
      console.error('Erro ao enviar mensagem:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto p-4">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="h-[600px] flex flex-col">
            <div className="flex-1 overflow-y-auto p-4 space-y-6">
              {messages.map((msg) => (
                <div key={msg.id} className={`flex ${msg.isUser ? 'justify-end' : 'justify-start'}`}>
                  <div className={`chat-bubble ${msg.isUser ? 'user' : 'bot'}`}>
                    <div className="whitespace-pre-line">{msg.text}</div>
                    <div className={`text-xs mt-2 ${msg.isUser ? 'text-green-100' : 'text-gray-500'}`}>
                      {msg.timestamp}
                    </div>
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            <form onSubmit={(e) => { e.preventDefault(); handleSubmit(message); }} 
                  className="p-4 bg-white border-t border-gray-100">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Digite sua mensagem..."
                  className="flex-1 px-4 py-2 rounded-full border"
                  disabled={isLoading}
                />
                <button
                  type="submit"
                  className="p-2 rounded-full bg-green-600 text-white"
                  disabled={isLoading}
                >
                  <SendIcon size={24} />
                </button>
              </div>
            </form>
          </div>
        </div>

        {showContinueButton && (
          <div className="mt-8 text-center">
            <button
              onClick={() => router.push('/proximo-passo')}
              className="bg-orange-400 hover:bg-orange-500 text-white font-semibold 
                       px-12 py-4 rounded-full text-xl transition-colors duration-200"
            >
              Continuar
            </button>
          </div>
        )}
      </div>
    </div>
  );
} 