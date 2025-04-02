'use client';

import { useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { SendIcon } from '../components/Icons';
import { Alert } from '../components/Alert';
import { Message } from '../types';
import { sendMessage } from '../services/chat';
import { motion, AnimatePresence } from 'framer-motion';

export default function Passo1Page() {
  const router = useRouter();
  const [inputValue, setInputValue] = useState('');
  const [showChat, setShowChat] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [alert, setAlert] = useState<{
    message: string;
    type: 'error' | 'warning' | 'success';
  } | null>(null);

  const handleInitialSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!inputValue.trim()) {
      setAlert({
        message: 'Por favor, digite um gasto para continuar.',
        type: 'error'
      });
      return;
    }

    const expenseMatch = inputValue.match(/([a-zA-Z\s]+)\s*(\d+)/);
    if (!expenseMatch) {
      setAlert({
        message: 'Digite o item e o valor, por exemplo: "camisa 110"',
        type: 'warning'
      });
      return;
    }

    setIsLoading(true);
    setShowChat(true);

    // Primeiro, mostra a mensagem do usuário
    setMessages([{
      id: 1,
      text: inputValue,
      isUser: true,
      timestamp: new Date().toLocaleTimeString()
    }]);

    try {
      // Aguarda um pouco para mostrar o loading
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Busca a resposta real
      const response = await sendMessage(inputValue);
      
      // Adiciona a resposta
      setMessages(prev => [...prev, {
        id: 2,
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
    },
    exit: { 
      opacity: 0, 
      y: -50,
      transition: { duration: 0.2 }
    }
  };

  const chatVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { type: "spring", stiffness: 300, damping: 30 }
    }
  };

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

  if (showChat) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        <AnimatePresence mode="wait">
          <motion.div
            key="chat"
            className="max-w-4xl mx-auto p-4"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <motion.div 
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
              variants={chatVariants}
            >
              <div className="p-6 border-b border-gray-100">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl text-orange-400 font-bold">1.</span>
                  <p className="text-xl">
                    Acompanhe seus <span className="text-green-600">gastos</span> em tempo real.
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
              </div>
            </motion.div>

            <motion.div 
              className="mt-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <button
                onClick={() => router.push('/passo-2')}
                className="bg-orange-400 hover:bg-orange-500 text-white font-semibold 
                         px-12 py-4 rounded-full text-xl transition-all duration-200
                         shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Continuar
              </button>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <AnimatePresence mode="wait">
        {!showChat ? (
          <motion.div
            key="input-form"
            className="max-w-3xl mx-auto p-4 pt-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {alert && (
              <Alert
                message={alert.message}
                type={alert.type}
                onClose={() => setAlert(null)}
              />
            )}
            
            <motion.div 
              className="bg-white rounded-2xl shadow-lg p-8"
              variants={formVariants}
            >
              <div className="flex items-center gap-4 mb-6">
                <span className="text-4xl text-orange-400 font-bold">1.</span>
                <p className="text-xl">
                  Digite o que <span className="text-green-600">comprou</span> e quanto{' '}
                  <span className="text-green-600">custou</span>, por exemplo:{' '}
                  <span className="font-semibold">"camisa 110"</span>.
                </p>
              </div>

              <p className="text-gray-600 mb-4">
                Registre um gasto (real ou falso) para testar.
              </p>
              <p className="text-gray-500 text-sm italic mb-6">
                Não se preocupe com vírgulas, nem com "R$", escreva do seu jeito.
              </p>

              <form onSubmit={handleInitialSubmit} className="flex gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Exemplo: ifood 44"
                  className="flex-1 px-4 py-3 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500"
                  disabled={isLoading}
                />
                <button
                  type="submit"
                  className="bg-green-600 text-white p-4 rounded-full hover:bg-green-700 transition-colors"
                  disabled={isLoading}
                >
                  <SendIcon size={20} />
                </button>
              </form>
            </motion.div>
          </motion.div>
        ) : (
          <motion.div
            key="chat"
            className="max-w-4xl mx-auto p-4"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <motion.div 
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
              variants={chatVariants}
            >
              <div className="p-6 border-b border-gray-100">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl text-orange-400 font-bold">1.</span>
                  <p className="text-xl">
                    Acompanhe seus <span className="text-green-600">gastos</span> em tempo real.
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
              </div>
            </motion.div>

            <motion.div 
              className="mt-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <button
                onClick={() => router.push('/passo-2')}
                className="bg-orange-400 hover:bg-orange-500 text-white font-semibold 
                         px-12 py-4 rounded-full text-xl transition-all duration-200
                         shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Continuar
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
} 