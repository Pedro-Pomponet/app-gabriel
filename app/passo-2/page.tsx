'use client';

import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { SendIcon } from '../components/Icons';
import { Message } from '../types';
import { sendMessage } from '../services/chat';
import { motion, AnimatePresence } from 'framer-motion';

export default function Passo2Page() {
  const router = useRouter();
  const [showChat, setShowChat] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0, y: 20 }
  };

  const formVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 30 }
    }
  };

  const handleStartChat = () => {
    setShowChat(true);
    // Adiciona a mensagem exemplo automaticamente
    handleSubmit("quanto eu gastei nos últimos dias?");
  };

  const handleSubmit = async (text: string) => {
    if (!text.trim() || isLoading) return;

    setIsLoading(true);
    setMessages(prev => [...prev, {
      id: prev.length + 1,
      text,
      isUser: true,
      timestamp: new Date().toLocaleTimeString()
    }]);

    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      const response = await sendMessage(text);
      
      setMessages(prev => [...prev, {
        id: prev.length + 1,
        text: response.message,
        isUser: false,
        timestamp: new Date().toLocaleTimeString()
      }]);
    } catch (error) {
      console.error('Erro:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleContinue = () => {
    router.push('/passo-3'); // Aqui vão os passos 3, 4 e 5 juntos
  };

  const handleSuggestion = (text: string) => {
    handleSubmit(text);
  };

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.matches('[data-suggestion]')) {
        const suggestion = target.getAttribute('data-suggestion');
        if (suggestion) {
          handleSubmit(suggestion);
        }
      }
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  // Adicionar ao window para o onclick funcionar
  if (typeof window !== 'undefined') {
    (window as any).handleSuggestion = handleSuggestion;
    (window as any).handleContinue = handleContinue;
  }

  const LoadingDots = () => (
    <motion.div 
      className="flex justify-start"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className="bg-gray-100 rounded-2xl p-4">
        <div className="flex items-center space-x-2">
          <motion.div
            className="w-2 h-2 bg-gray-400 rounded-full"
            animate={{
              y: ["0%", "-50%", "0%"]
            }}
            transition={{
              duration: 0.6,
              repeat: Infinity,
              ease: "easeInOut",
              times: [0, 0.5, 1]
            }}
          />
          <motion.div
            className="w-2 h-2 bg-gray-400 rounded-full"
            animate={{
              y: ["0%", "-50%", "0%"]
            }}
            transition={{
              duration: 0.6,
              repeat: Infinity,
              ease: "easeInOut",
              times: [0, 0.5, 1],
              delay: 0.15
            }}
          />
          <motion.div
            className="w-2 h-2 bg-gray-400 rounded-full"
            animate={{
              y: ["0%", "-50%", "0%"]
            }}
            transition={{
              duration: 0.6,
              repeat: Infinity,
              ease: "easeInOut",
              times: [0, 0.5, 1],
              delay: 0.3
            }}
          />
        </div>
      </div>
    </motion.div>
  );

  if (!showChat) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        <motion.div
          className="max-w-3xl mx-auto p-4 pt-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div 
            className="bg-white rounded-2xl shadow-lg p-8"
            variants={formVariants}
          >
            <div className="flex items-baseline gap-2 mb-6">
              <span className="text-4xl text-orange-400 font-bold">2.</span>
              <div className="space-y-2">
                <p className="text-xl">
                  Você pode perguntar <span className="text-green-600">TUDO SOBRE SUAS FINANÇAS</span>.
                </p>
                <p className="text-gray-600">
                  Exemplo: Digamos que você quer ver quanto gastou nos últimos dias:
                </p>
              </div>
            </div>

            <button
              onClick={handleStartChat}
              className="w-full bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700 
                       transition-all duration-200 flex items-center justify-center gap-2"
            >
              <span>quanto eu gastei nos últimos dias?</span>
              <SendIcon size={20} />
            </button>
          </motion.div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <motion.div
        className="max-w-4xl mx-auto p-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="p-6 border-b border-gray-100">
            <div className="flex items-baseline gap-2">
              <span className="text-4xl text-orange-400 font-bold">2.</span>
              <p className="text-xl">
                Você pode perguntar <span className="text-green-600">TUDO SOBRE SUAS FINANÇAS</span>.
              </p>
            </div>
          </div>

          <div className="h-[600px] flex flex-col">
            <div className="flex-1 overflow-y-auto p-4 space-y-6">
              <AnimatePresence mode="wait">
                {messages.map((msg) => (
                  <motion.div
                    key={msg.id}
                    className={`flex ${msg.isUser ? 'justify-end' : 'justify-start'}`}
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className={`chat-bubble ${msg.isUser ? 'user' : 'bot'}`}>
                      <div 
                        className="whitespace-pre-line"
                        dangerouslySetInnerHTML={{ __html: msg.text }}
                      />
                      <div className={`text-xs mt-2 ${msg.isUser ? 'text-green-100' : 'text-gray-500'}`}>
                        {msg.timestamp}
                      </div>
                    </div>
                  </motion.div>
                ))}
                {isLoading && <LoadingDots />}
              </AnimatePresence>
              <div ref={messagesEndRef} />
            </div>

            <form onSubmit={(e) => { e.preventDefault(); handleSubmit(inputValue); }} 
                  className="p-4 bg-white border-t border-gray-100">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
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
      </motion.div>
    </div>
  );
} 