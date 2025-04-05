'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useState, useEffect, useRef } from 'react';

export default function DemoPage() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const [showMessages, setShowMessages] = useState(false);
  const [showTyping, setShowTyping] = useState(false);
  const [showContinue, setShowContinue] = useState(false);
  const [showStep2Messages, setShowStep2Messages] = useState(false);
  const [showStep2Typing, setShowStep2Typing] = useState(false);
  const [showStep2Continue, setShowStep2Continue] = useState(false);
  const [showStep2LastTyping, setShowStep2LastTyping] = useState(false);
  const [showStep2LastMessage, setShowStep2LastMessage] = useState(false);
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const [showStep3, setShowStep3] = useState(false);
  const [showStep3Chat, setShowStep3Chat] = useState(false);
  const [showStep4, setShowStep4] = useState(false);
  const [showStep4Chat, setShowStep4Chat] = useState(false);
  const [showStep5, setShowStep5] = useState(false);
  const [showStep5Chat, setShowStep5Chat] = useState(false);
  const [showFinalContinue, setShowFinalContinue] = useState(false);
  const [showStep6, setShowStep6] = useState(false);
  const [showStep6Chat, setShowStep6Chat] = useState(false);
  const [showStep7, setShowStep7] = useState(false);
  const [showStep7Chat, setShowStep7Chat] = useState(false);
  const [showFinalContinue2, setShowFinalContinue2] = useState(false);
  const [showInitialButton, setShowInitialButton] = useState(true);
  const [showInitialMessage, setShowInitialMessage] = useState(false);
  const [showStep8, setShowStep8] = useState(false);
  const [showStep8Content, setShowStep8Content] = useState(false);

  const handleSend = () => {
    setShowMessages(true);
    setShowTyping(true);
    
    setTimeout(() => {
      setShowTyping(false);
    }, 2500);

    setTimeout(() => {
      setShowContinue(true);
    }, 6000);
  };

  const handleNextStep = () => {
    setCurrentStep(2);
    setShowMessages(false);
    setShowTyping(false);
    setShowContinue(false);
  };

  const handleStep2Send = () => {
    setShowStep2Messages(true);
    setShowStep2Typing(true);
    
    setTimeout(() => {
      setShowStep2Typing(false);
    }, 2500);

    setTimeout(() => {
      setShowStep2Continue(true);
    }, 14000);
  };

  const handleLastMessageClick = () => {
    setShowStep2LastTyping(true);
    
    setTimeout(() => {
      setShowStep2LastTyping(false);
      setShowStep2LastMessage(true);
    }, 2500);

    setTimeout(() => {
      setShowStep2Continue(true);
    }, 4000);
  };

  // Função de auto-scroll
  useEffect(() => {
    if (showStep2Messages && !showStep2Typing) {
      const timer = setInterval(() => {
        if (chatContainerRef.current) {
          chatContainerRef.current.scrollTo({
            top: chatContainerRef.current.scrollHeight,
            behavior: 'smooth'
          });
        }
      }, 2800); // Mesmo timing das animações

      return () => clearInterval(timer);
    }
  }, [showStep2Messages, showStep2Typing]);

  const expenses = [
    { category: 'Alimentação', value: 103, percentage: 16, color: '#06b6d4' },
    { category: 'Transporte', value: 87, percentage: 14, color: '#3b82f6' },
    { category: 'Lazer', value: 67, percentage: 11, color: '#a855f7' },
    { category: 'Contas Fixas', value: 229, percentage: 36, color: '#fb923c' },
    { category: 'Jantar fora', value: 146, percentage: 23, color: '#facc15' }
  ];

  const PieChart = () => {
    let startAngle = 0;
    const radius = 60;
    const centerX = 70;
    const centerY = 70;

    return (
      <svg width="140" height="140" className="transform -rotate-90">
        {expenses.map((expense, index) => {
          const angle = (expense.percentage / 100) * 360;
          const endAngle = startAngle + angle;
          
          // Calcular pontos do arco
          const x1 = centerX + radius * Math.cos((startAngle * Math.PI) / 180);
          const y1 = centerY + radius * Math.sin((startAngle * Math.PI) / 180);
          const x2 = centerX + radius * Math.cos((endAngle * Math.PI) / 180);
          const y2 = centerY + radius * Math.sin((endAngle * Math.PI) / 180);

          // Criar path para a fatia
          const path = [
            'M', centerX, centerY,
            'L', x1, y1,
            'A', radius, radius, 0, angle > 180 ? 1 : 0, 1, x2, y2,
            'Z'
          ].join(' ');

          startAngle += angle;

          return (
            <path
              key={index}
              d={path}
              fill={expense.color}
              className="transition-all duration-500"
            >
              <title>{`${expense.category}: ${expense.percentage}%`}</title>
            </path>
          );
        })}
      </svg>
    );
  };

  // Função para controlar a sequência de animações
  const handleStep3Start = () => {
    setCurrentStep(3);
    
    // Passo 3
    setShowStep3(true);
    setTimeout(() => setShowStep3Chat(true), 1000);

    // Passo 4 começa 1s após o passo 3 terminar
    setTimeout(() => {
      setShowStep4(true);
      setTimeout(() => setShowStep4Chat(true), 1000);
    }, 4000); // 3000 (duração do passo 3) + 1000 (delay)

    // Passo 5 começa 1s após o passo 4 terminar
    setTimeout(() => {
      setShowStep5(true);
      setTimeout(() => setShowStep5Chat(true), 1000);
    }, 8000); // 4000 + 3000 (duração do passo 4) + 1000 (delay)

    // Botão continuar aparece 1s após o passo 5 terminar
    setTimeout(() => {
      setShowFinalContinue(true);
    }, 12000); // 8000 + 3000 (duração do passo 5) + 1000 (delay)
  };

  // Função para controlar a sequência dos passos 6 e 7
  const handleStep6Start = () => {
    setCurrentStep(6);
    
    // Passo 6
    setTimeout(() => {
      setShowStep6(true);
      setTimeout(() => setShowStep6Chat(true), 1000);
    }, 500);

    // Passo 7 começa 1s após o passo 6 terminar
    setTimeout(() => {
      setShowStep7(true);
      setTimeout(() => setShowStep7Chat(true), 1000);
    }, 4500); // 3000 (duração do passo 6) + 1000 (delay) + 500 (delay inicial)

    // Passo 8 começa 1s após o passo 7 terminar
    setTimeout(() => {
      setShowStep8(true);
      setTimeout(() => setShowStep8Content(true), 1000);
    }, 8500); // 4500 + 3000 (duração do passo 7) + 1000 (delay)

    // Botão continuar final aparece 1s após o passo 8 terminar
    setTimeout(() => {
      setShowFinalContinue2(true);
    }, 12500); // 8500 + 3000 (duração do passo 8) + 1000 (delay)
  };

  // Função para lidar com o clique no botão
  const handleInitialButtonClick = () => {
    setShowInitialButton(false);
    setShowInitialMessage(true);
    handleStep2Send(); // Continua com o fluxo normal
  };

  return (
    <div className="min-h-screen bg-[#f0f2f5]">
      <motion.div
        className="max-w-3xl mx-auto py-8 sm:py-12 px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-center space-y-3 mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-[#128c7e]">
            Como Funciona?
          </h1>
          <p className="text-md sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Um assistente financeiro <span className="text-[#128c7e] font-medium">no seu WhatsApp</span>,
            disponível 24h para ser seu <span className="text-[#128c7e] font-medium">controle financeiro interativo</span>.
          </p>
        </div>

        <AnimatePresence mode="wait">
          {currentStep === 1 ? (
            <motion.div
              key="step1"
              className="bg-white rounded-xl shadow-md p-6 max-w-2xl mx-auto"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
            >
              <div className="flex items-start gap-4 mb-8">
                <div className="bg-[#25d366] rounded-full p-2 h-10 w-10 flex items-center justify-center text-white font-bold">
                  1
                </div>
                <div className="flex-1">
                  <p className="text-gray-700 text-lg mb-2">
                    Digite o que comprou e quanto custou, por exemplo:
                  </p>
                  <p className="text-[#128c7e] font-medium text-lg mb-3">
                    "camisa 110"
                  </p>
                  <p className="text-gray-500 text-sm bg-gray-50 rounded-lg p-3">
                    Registre um gasto (real ou falso) para testar.
                    Não se preocupe com vírgulas, nem com por "R$", escreva do seu jeito.
                  </p>
                </div>
              </div>

              <div className="chat-container bg-white rounded-xl p-4 space-y-4">
                <AnimatePresence>
                  {!showMessages && (
                    <motion.div 
                      className="flex gap-2 max-w-md mx-auto"
                      exit={{ opacity: 0, y: -20 }}
                    >
                      <input
                        type="text"
                        value="ifood 44"
                        readOnly
                        className="flex-1 px-4 py-2 text-gray-700 text-sm focus:outline-none rounded-full bg-white border border-gray-300"
                      />
                      <button
                        onClick={handleSend}
                        className="bg-[#25d366] hover:bg-[#128c7e] text-white rounded-full w-10 h-10 flex items-center justify-center transition-all"
                      >
                        ➡️
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>

                <AnimatePresence>
                  {showMessages && (
                    <div ref={chatContainerRef} className="bg-[#efeae2] rounded-xl p-4 space-y-4 max-h-[600px] overflow-y-auto">
                      <AnimatePresence>
                        <motion.div 
                          className="space-y-3"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                        >
                          <motion.div 
                            className="flex justify-end"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                          >
                            <div className="bg-[#dcf8c6] text-gray-800 px-4 py-2 rounded-lg max-w-[80%] shadow-sm relative message-tail-right">
                              <p>ifood44</p>
                              <p className="text-[11px] text-gray-500 text-right mt-1">11:35</p>
                            </div>
                          </motion.div>

                          {showTyping && (
                            <motion.div 
                              className="flex items-center gap-1 px-4 py-2 bg-gray-100 rounded-full w-16 ml-2"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                            >
                              <span className="animate-bounce">.</span>
                              <span className="animate-bounce delay-100">.</span>
                              <span className="animate-bounce delay-200">.</span>
                            </motion.div>
                          )}

                          {!showTyping && (
                            <>
                              <motion.div 
                                className="bg-white text-gray-800 px-4 py-3 rounded-lg max-w-[80%] shadow-sm relative message-tail-left"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 2.8 }}
                              >
                                <p className="font-medium mb-1">📝 Gasto adicionado</p>
                                <p>🍔 IFOOD (Delivery)</p>
                                <p className="font-medium">R$ 44,00</p>
                                <p className="text-gray-500 text-sm">04/04/2025</p>
                                <p className="text-[11px] text-gray-500 mt-2">11:35</p>
                              </motion.div>

                              <motion.div 
                                className="bg-white text-gray-800 px-4 py-3 rounded-lg max-w-[80%] shadow-sm relative message-tail-left"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 3.5 }}
                              >
                                <p>⚠️ Lembrete: Você está quase chegando no seu limite definido de R$ 66 por mês com Delivery.</p>
                                <p className="text-[11px] text-gray-500 mt-2">11:35</p>
                              </motion.div>
                            </>
                          )}

                          {showContinue && (
                            <motion.div
                              className="mt-8 flex justify-center"
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                            >
                              <button
                                onClick={handleNextStep}
                                className="bg-[#25d366] hover:bg-[#128c7e] text-white font-medium 
                                         px-8 py-3 rounded-full text-base transition-all duration-200
                                         shadow-sm hover:shadow-md"
                              >
                                Continuar
                              </button>
                            </motion.div>
                          )}
                        </motion.div>
                      </AnimatePresence>
                    </div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ) : (
            <>
              {currentStep === 2 && (
                <motion.div
                  key="step2"
                  className="bg-white rounded-xl shadow-md p-6 max-w-2xl mx-auto"
                >
                  <div className="flex items-start gap-4 mb-8">
                    <div className="bg-[#25d366] rounded-full p-2 h-10 w-10 flex items-center justify-center text-white font-bold">
                      2
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-700 text-lg mb-2">
                        Você pode perguntar TUDO <br/>
                        SOBRE SUAS FINANÇAS.
                      </p>
                      <p className="text-gray-600 mb-3">
                        Exemplo: Digamos que você quer ver quanto gastou nos últimos dias:
                      </p>
                    </div>
                  </div>

                  <div className="chat-container bg-white rounded-xl p-4 space-y-4">
                    {showInitialButton ? (
                      <motion.button
                        onClick={handleInitialButtonClick}
                        className="bg-[#1b4638] text-white px-4 py-3 rounded-full text-base transition-all duration-200
                                  hover:bg-[#1b4638]/90 flex items-center gap-2"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                      >
                        <svg 
                          xmlns="http://www.w3.org/2000/svg" 
                          viewBox="0 0 20 20" 
                          fill="currentColor" 
                          className="w-5 h-5"
                        >
                          <path d="M3.105 2.288a.75.75 0 00-.826.95l1.414 4.925A1.5 1.5 0 005.135 9.25h6.115a.75.75 0 010 1.5H5.135a1.5 1.5 0 00-1.442 1.087l-1.414 4.925a.75.75 0 00.826.95 60.519 60.519 0 0015.779-8.91.75.75 0 000-1.184A60.517 60.517 0 003.105 2.288z" />
                        </svg>
                        quanto eu gastei nos últimos dias?
                      </motion.button>
                    ) : showInitialMessage && (
                      <motion.div 
                        className="flex justify-end"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                      >
                        <div className="bg-[#dcf8c6] text-gray-800 px-4 py-3 rounded-lg shadow-sm relative message-tail-right">
                          <p>quanto eu gastei nos últimos dias?</p>
                          <p className="text-[11px] text-gray-500 text-right mt-1">12:06</p>
                        </div>
                      </motion.div>
                    )}

                    {showStep2Messages && (
                      <div className="bg-[#efeae2] rounded-xl p-4 space-y-4">
                        <AnimatePresence>
                          <motion.div 
                            className="space-y-3"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                          >
                            {showStep2Typing && (
                              <motion.div 
                                className="flex items-center gap-1 px-4 py-2 bg-gray-100 rounded-full w-16 ml-2"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                              >
                                <span className="animate-bounce">.</span>
                                <span className="animate-bounce delay-100">.</span>
                                <span className="animate-bounce delay-200">.</span>
                              </motion.div>
                            )}

                            {!showStep2Typing && (
                              <>
                                <motion.div 
                                  className="bg-white text-gray-800 px-4 py-3 rounded-lg max-w-[80%] shadow-sm relative message-tail-left"
                                  initial={{ opacity: 0, x: -20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: 2.8 }}
                                >
                                  <p className="font-medium mb-2">📊 Seus gastos nos últimos 7 dias:</p>
                                  <div className="space-y-2">
                                    <div className="flex justify-between items-center">
                                      <span>Segunda</span>
                                      <span className="font-medium text-[#128c7e]">R$ 120,00</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                      <span>Terça</span>
                                      <span className="font-medium text-[#128c7e]">R$ 180,00</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                      <span>Quarta</span>
                                      <span className="font-medium text-[#128c7e]">R$ 90,00</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                      <span>Quinta</span>
                                      <span className="font-medium text-[#128c7e]">R$ 240,00</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                      <span>Sexta</span>
                                      <span className="font-medium text-[#128c7e]">R$ 135,00</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                      <span>Sábado</span>
                                      <span className="font-medium text-[#128c7e]">R$ 45,00</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                      <span>Domingo</span>
                                      <span className="font-medium text-[#128c7e]">R$ 32,00</span>
                                    </div>
                                    <div className="border-t pt-2 mt-2">
                                      <div className="flex justify-between items-center font-bold">
                                        <span>Total</span>
                                        <span className="text-[#128c7e]">R$ 842,00</span>
                                      </div>
                                    </div>
                                  </div>
                                  <p className="text-[11px] text-gray-500 mt-2">11:35</p>
                                </motion.div>

                                {/* Legenda do primeiro gráfico */}
                                <motion.div 
                                  className="bg-white text-gray-800 px-4 py-3 rounded-lg max-w-[80%] shadow-sm relative message-tail-left"
                                  initial={{ opacity: 0, x: -20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: 4.6 }} // 2.8 + 1.8
                                >
                                  <p>Aqui está o resumo dos seus gastos diários 📅</p>
                                  <p className="text-[11px] text-gray-500 mt-2">11:35</p>
                                </motion.div>

                                <motion.div 
                                  className="bg-white text-gray-800 px-4 py-3 rounded-lg max-w-[80%] shadow-sm relative message-tail-left"
                                  initial={{ opacity: 0, x: -20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: 5.6 }}
                                >
                                  <p className="font-medium mb-3">📈 Gráfico dos últimos 7 dias</p>
                                  <div className="h-[200px] flex items-end gap-2">
                                    {[40, 60, 30, 80, 45, 15, 10].map((height, index) => (
                                      <div key={index} className="flex-1 flex flex-col items-center gap-1">
                                        <div 
                                          className="w-full bg-[#25d366] rounded-t-sm transition-all duration-500"
                                          style={{ height: `${height}%` }}
                                        />
                                        <span className="text-xs text-gray-500">
                                          {['S', 'T', 'Q', 'Q', 'S', 'S', 'D'][index]}
                                        </span>
                                      </div>
                                    ))}
                                  </div>
                                  <p className="text-[11px] text-gray-500 mt-2">12:06</p>
                                </motion.div>

                                {/* Legenda do gráfico de barras */}
                                <motion.div 
                                  className="bg-white text-gray-800 px-4 py-3 rounded-lg max-w-[80%] shadow-sm relative message-tail-left"
                                  initial={{ opacity: 0, x: -20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: 7.4 }} // 5.6 + 1.8
                                >
                                  <p>Visualize a distribuição dos seus gastos ao longo da semana 📊</p>
                                  <p className="text-[11px] text-gray-500 mt-2">11:35</p>
                                </motion.div>

                                <motion.div 
                                  className="bg-white text-gray-800 px-4 py-3 rounded-lg max-w-[80%] shadow-sm relative message-tail-left"
                                  initial={{ opacity: 0, x: -20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: 8.4 }}
                                >
                                  <p className="font-medium mb-3">🎯 Divisão de gastos</p>
                                  <p className="text-sm text-gray-500 mb-3">29/03 a 04/04</p>
                                  
                                  <div className="flex gap-8 items-start">
                                    <PieChart />
                                    <div className="flex-1 space-y-2">
                                      {expenses.map((expense, index) => (
                                        <div key={index} className="flex items-center gap-2">
                                          <div 
                                            className="w-3 h-3 rounded-sm" 
                                            style={{ backgroundColor: expense.color }}
                                          />
                                          <span className="text-sm">{expense.category}</span>
                                          <span className="ml-auto text-sm text-[#128c7e]">
                                            {expense.value} ({expense.percentage}%)
                                          </span>
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                  
                                  <p className="text-[11px] text-gray-500 mt-3">12:06</p>
                                </motion.div>

                                {/* Legenda do gráfico de pizza */}
                                <motion.div 
                                  className="bg-white text-gray-800 px-4 py-3 rounded-lg max-w-[80%] shadow-sm relative message-tail-left"
                                  initial={{ opacity: 0, x: -20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: 10.2 }} // 8.4 + 1.8
                                >
                                  <p>Veja como seus gastos estão distribuídos por categoria 🎯</p>
                                  <p className="text-[11px] text-gray-500 mt-2">11:35</p>
                                </motion.div>

                                <motion.div 
                                  className="bg-white text-gray-800 px-4 py-3 rounded-lg max-w-[80%] shadow-sm relative message-tail-left"
                                  initial={{ opacity: 0, x: -20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: 11.2 }}
                                >
                                  <p>📈 Seus gastos aumentaram 20% em relação à semana anterior.</p>
                                  <p className="text-[11px] text-gray-500 mt-2">12:06</p>
                                </motion.div>

                                <motion.div 
                                  className="text-center py-6"
                                  initial={{ opacity: 0 }}
                                  animate={{ opacity: 1 }}
                                  transition={{ delay: 12 }}
                                >
                                  <p className="text-gray-700">
                                    Você <span className="text-orange-500 font-medium">nunca mais</span> vai se fazer a pergunta{' '}
                                    <span className="font-medium">"onde que eu gastei tanto esse mês"</span>,{' '}
                                    sem ter a resposta.
                                  </p>
                                </motion.div>

                                {/* Botão/Mensagem "O que eu gastei a mais essa semana" */}
                                <motion.div 
                                  className="flex justify-end"
                                  initial={{ opacity: 0, x: 20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: 14 }}
                                >
                                  {!showStep2LastTyping && !showStep2LastMessage ? (
                                    <button
                                      onClick={handleLastMessageClick}
                                      className="bg-[#1b4638] text-white px-4 py-3 rounded-full text-base transition-all duration-200
                                                hover:bg-[#1b4638]/90 flex items-center gap-2"
                                    >
                                      <svg 
                                        xmlns="http://www.w3.org/2000/svg" 
                                        viewBox="0 0 20 20" 
                                        fill="currentColor" 
                                        className="w-5 h-5"
                                      >
                                        <path d="M3.105 2.288a.75.75 0 00-.826.95l1.414 4.925A1.5 1.5 0 005.135 9.25h6.115a.75.75 0 010 1.5H5.135a1.5 1.5 0 00-1.442 1.087l-1.414 4.925a.75.75 0 00.826.95 60.519 60.519 0 0015.779-8.91.75.75 0 000-1.184A60.517 60.517 0 003.105 2.288z" />
                                      </svg>
                                      O que eu gastei a mais essa semana?
                                    </button>
                                  ) : (
                                    <div className="bg-[#dcf8c6] text-gray-800 px-4 py-3 rounded-lg max-w-[80%] shadow-sm relative message-tail-right">
                                      <p>O que eu gastei a mais essa semana?</p>
                                      <p className="text-[11px] text-gray-500 text-right mt-1">12:06</p>
                                    </div>
                                  )}
                                </motion.div>

                                {showStep2LastTyping && (
                                  <motion.div 
                                    className="flex items-center gap-1 px-4 py-2 bg-gray-100 rounded-full w-16 ml-2"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                  >
                                    <span className="animate-bounce">.</span>
                                    <span className="animate-bounce delay-100">.</span>
                                    <span className="animate-bounce delay-200">.</span>
                                  </motion.div>
                                )}

                                {showStep2LastMessage && (
                                  <>
                                    <motion.div 
                                      className="bg-white text-gray-800 px-4 py-3 rounded-lg max-w-[80%] shadow-sm relative message-tail-left"
                                      initial={{ opacity: 0, x: -20 }}
                                      animate={{ opacity: 1, x: 0 }}
                                    >
                                      <p>Os gastos aumentaram nesta semana em comparação com a semana passada, totalizando R$100 a mais.</p>
                                      <p>O principal motivo foi a compra de gás de cozinha, realizada na segunda-feira (20/01), no valor de R$100, o que não ocorreu na semana anterior.</p>
                                      <p className="text-[11px] text-gray-500 mt-2">12:42</p>
                                    </motion.div>

                                    <motion.div 
                                      className="bg-white text-gray-800 px-4 py-3 rounded-lg max-w-[80%] shadow-sm relative message-tail-left"
                                      initial={{ opacity: 0, x: -20 }}
                                      animate={{ opacity: 1, x: 0 }}
                                      transition={{ delay: 0.5 }}
                                    >
                                      <p>Você <span className="text-orange-500">nunca mais</span> vai se fazer a pergunta <span className="font-medium">"onde que eu gastei tanto esse mês"</span>, sem ter a resposta.</p>
                                      <p className="text-[11px] text-gray-500 mt-2">12:42</p>
                                    </motion.div>

                                    {showStep2Continue && (
                                      <motion.div
                                        className="mt-8 flex justify-center"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                      >
                                        <button
                                          onClick={handleStep3Start}
                                          className="bg-[#25d366] hover:bg-[#128c7e] text-white font-medium 
                                                   px-8 py-3 rounded-full text-base transition-all duration-200
                                                   shadow-sm hover:shadow-md"
                                        >
                                          Continuar
                                        </button>
                                      </motion.div>
                                    )}
                                  </>
                                )}
                              </>
                            )}
                          </motion.div>
                        </AnimatePresence>
                      </div>
                    )}
                  </div>
                </motion.div>
              )}

              {currentStep === 3 && (
                <div className="space-y-8">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: showStep3 ? 1 : 0, y: showStep3 ? 0 : 20 }}
                    className="bg-white rounded-xl shadow-md p-6 max-w-2xl mx-auto"
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div className="bg-[#25d366] rounded-full p-2 h-10 w-10 flex items-center justify-center text-white font-bold">
                        3
                      </div>
                      <div className="flex-1">
                        <p className="text-gray-700 text-lg">
                          Defina lembretes para pagar contas e não esqueça de nada{' '}
                          <span className="text-gray-500">(para uma conta única ou frequente)</span>.
                        </p>
                      </div>
                    </div>

                    {showStep3Chat && (
                      <div className="bg-[#efeae2] rounded-xl p-4 space-y-4">
                        <motion.div 
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          className="flex justify-end"
                        >
                          <div className="bg-[#dcf8c6] text-gray-800 px-4 py-3 rounded-lg shadow-sm relative message-tail-right">
                            <p>Boleto do carro todo dia 12, R$ 2400</p>
                            <p className="text-[11px] text-gray-500 text-right mt-1">02:34</p>
                          </div>
                        </motion.div>

                        <motion.div 
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 1 }}
                          className="bg-white text-gray-800 px-4 py-3 rounded-lg shadow-sm relative message-tail-left"
                        >
                          <p className="font-medium">Lembrete adicionado ⏰</p>
                          <p>📝 Boleto do carro</p>
                          <p>Data: 12</p>
                          <p>Frequência: Mensal</p>
                          <p className="text-[11px] text-gray-500 mt-2">02:58</p>
                        </motion.div>
                      </div>
                    )}
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: showStep4 ? 1 : 0, y: showStep4 ? 0 : 20 }}
                    className="bg-white rounded-xl shadow-md p-6 max-w-2xl mx-auto"
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div className="bg-[#25d366] rounded-full p-2 h-10 w-10 flex items-center justify-center text-white font-bold">
                        4
                      </div>
                      <div className="flex-1">
                        <p className="text-gray-700 text-lg">
                          E seja lembrado com antecedência.
                        </p>
                      </div>
                    </div>

                    {showStep4Chat && (
                      <div className="bg-[#efeae2] rounded-xl p-4 space-y-4">
                        <motion.div 
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          className="bg-white text-gray-800 px-4 py-3 rounded-lg shadow-sm relative message-tail-left"
                        >
                          <p>⏰ Lembrete: Boleto Carro</p>
                          <p className="text-[11px] text-gray-500 mt-2">02:08</p>
                        </motion.div>

                        <motion.div 
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.5 }}
                          className="flex justify-end"
                        >
                          <div className="bg-[#dcf8c6] text-gray-800 px-4 py-3 rounded-lg shadow-sm relative message-tail-right">
                            <p>paguei já ✅</p>
                            <p className="text-[11px] text-gray-500 text-right mt-1">02:04</p>
                          </div>
                        </motion.div>

                        <motion.div 
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 1 }}
                          className="bg-white text-gray-800 px-4 py-3 rounded-lg shadow-sm relative message-tail-left"
                        >
                          <p>Te lembro de novo mês que vem ✌️</p>
                          <p className="text-[11px] text-gray-500 mt-2">02:04</p>
                        </motion.div>
                      </div>
                    )}
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: showStep5 ? 1 : 0, y: showStep5 ? 0 : 20 }}
                    className="bg-white rounded-xl shadow-md p-6 max-w-2xl mx-auto"
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div className="bg-[#25d366] rounded-full p-2 h-10 w-10 flex items-center justify-center text-white font-bold">
                        5
                      </div>
                      <div className="flex-1">
                        <p className="text-gray-700 text-lg">
                          Defina limites de gastos por categoria. <span className="font-medium">Controle quanto quer gastar.</span>
                        </p>
                      </div>
                    </div>

                    {showStep5Chat && (
                      <div className="bg-[#efeae2] rounded-xl p-4 space-y-4">
                        <motion.div 
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          className="flex justify-end"
                        >
                          <div className="bg-[#dcf8c6] text-gray-800 px-4 py-3 rounded-lg shadow-sm relative message-tail-right">
                            <p>como estão meus limites de gastos?</p>
                            <p className="text-[11px] text-gray-500 text-right mt-1">02:12</p>
                          </div>
                        </motion.div>

                        <motion.div 
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 1 }}
                          className="bg-white text-gray-800 px-4 py-3 rounded-lg shadow-sm relative message-tail-left space-y-4"
                        >
                          <div className="space-y-3">
                            <div className="space-y-1">
                              <div className="flex justify-between text-sm">
                                <span>Lazer</span>
                                <span>60%</span>
                              </div>
                              <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                                <div className="h-full bg-[#25d366] rounded-full" style={{ width: '60%' }} />
                              </div>
                            </div>

                            <div className="space-y-1">
                              <div className="flex justify-between text-sm">
                                <span>Delivery</span>
                                <span>84%</span>
                              </div>
                              <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                                <div className="h-full bg-orange-400 rounded-full" style={{ width: '84%' }} />
                              </div>
                            </div>
                          </div>

                          <p className="text-[11px] text-gray-500">02:12</p>
                        </motion.div>

                        <motion.div 
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 2 }}
                          className="bg-white text-gray-800 px-4 py-3 rounded-lg shadow-sm relative message-tail-left"
                        >
                          <p>Segue relatório dos seus limites de gastos 📊</p>
                          <p className="text-[11px] text-gray-500 mt-2">02:12</p>
                        </motion.div>
                      </div>
                    )}
                  </motion.div>

                  {showFinalContinue && (
                    <motion.div
                      className="mt-8 flex justify-center"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      <button
                        onClick={handleStep6Start}
                        className="bg-[#25d366] hover:bg-[#128c7e] text-white font-medium 
                                 px-8 py-3 rounded-full text-base transition-all duration-200
                                 shadow-sm hover:shadow-md"
                      >
                        Continuar
                      </button>
                    </motion.div>
                  )}
                </div>
              )}

              {currentStep === 6 && (
                <div className="space-y-8">
                  {/* Passo 6 */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: showStep6 ? 1 : 0, y: showStep6 ? 0 : 20 }}
                    className="bg-white rounded-xl shadow-md p-6 max-w-2xl mx-auto"
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div className="bg-[#25d366] rounded-full p-2 h-10 w-10 flex items-center justify-center text-white font-bold">
                        6
                      </div>
                      <div className="flex-1">
                        <p className="text-gray-700 text-lg">
                          Planejamento de Metas
                        </p>
                        <p className="text-gray-600">
                          Defina uma meta e te levamos até lá.
                          <span className="font-medium text-[#128c7e]"> Ele planeja, calcula e avisa o que você precisa fazer.</span>
                        </p>
                      </div>
                    </div>

                    {showStep6Chat && (
                      <div className="bg-[#efeae2] rounded-xl p-4 space-y-4">
                        <motion.div 
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          className="flex justify-end"
                        >
                          <div className="bg-[#dcf8c6] text-gray-800 px-4 py-3 rounded-lg shadow-sm relative message-tail-right">
                            <p>Cria uma meta para viagem em setembro pro Chile, preciso de 10 mil</p>
                            <p className="text-[11px] text-gray-500 text-right mt-1">19:05</p>
                          </div>
                        </motion.div>

                        <motion.div 
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.5 }}
                          className="flex justify-end"
                        >
                          <div className="bg-[#dcf8c6] text-gray-800 px-4 py-3 rounded-lg shadow-sm relative message-tail-right">
                            <p>Ja guardei 2k hj</p>
                            <p className="text-[11px] text-gray-500 text-right mt-1">19:05</p>
                          </div>
                        </motion.div>

                        <motion.div 
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 1 }}
                          className="bg-white text-gray-800 px-4 py-3 rounded-lg shadow-sm relative message-tail-left"
                        >
                          <p>Criei a meta e já registrei o valor que você guardou hoje.</p>
                          <p className="text-[11px] text-gray-500 mt-2">19:05</p>
                        </motion.div>

                        <motion.div 
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 1.5 }}
                          className="bg-white text-gray-800 px-4 py-3 rounded-lg shadow-sm relative message-tail-left"
                        >
                          <div className="space-y-4">
                            <div className="flex items-center gap-2">
                              <span className="text-[#128c7e]">🎯</span>
                              <span className="font-medium">Nova Meta</span>
                            </div>
                            
                            <div className="relative w-48 h-48 mx-auto">
                              <div className="w-full h-full rounded-full bg-gray-100">
                                <div 
                                  className="absolute inset-0 flex items-center justify-center"
                                  style={{ 
                                    background: `conic-gradient(#25d366 ${20}%, #f3f4f6 0)`,
                                    borderRadius: '100%'
                                  }}
                                >
                                  <div className="w-36 h-36 bg-white rounded-full flex items-center justify-center">
                                    <div className="text-center">
                                      <div className="text-3xl font-bold">20%</div>
                                      <div className="text-sm text-gray-500">Da meta</div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="text-center space-y-2">
                              <p className="font-medium">Viagem Chile Setembro</p>
                              <p className="text-sm">
                                R$ 2.000,00 <span className="text-gray-500">de R$ 10.000,00</span>
                              </p>
                            </div>
                          </div>
                          <p className="text-[11px] text-gray-500 mt-2">19:05</p>
                        </motion.div>
                      </div>
                    )}
                  </motion.div>

                  {/* Passo 7 */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: showStep7 ? 1 : 0, y: showStep7 ? 0 : 20 }}
                    className="bg-white rounded-xl shadow-md p-6 max-w-2xl mx-auto"
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div className="bg-[#25d366] rounded-full p-2 h-10 w-10 flex items-center justify-center text-white font-bold">
                        7
                      </div>
                      <div className="flex-1">
                        <p className="text-gray-700 text-lg">
                          Alerta de Promoções
                        </p>
                        <p className="text-gray-600">
                          Economize também nas compras,
                          <span className="text-[#128c7e]"> nossa IA te envia as melhores promoções que ela encontra.</span>
                        </p>
                      </div>
                    </div>

                    {showStep7Chat && (
                      <div className="bg-[#efeae2] rounded-xl p-4 space-y-4">
                        <motion.div 
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          className="bg-white text-gray-800 px-4 py-3 rounded-lg shadow-sm relative message-tail-left"
                        >
                          <p>🎁 Você demonstrou interesse em um Iphone 16 alguns dias atrás. Encontrei uma promoção:</p>
                          <p className="text-[11px] text-gray-500 mt-2">19:05</p>
                        </motion.div>

                        <motion.div 
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.5 }}
                          className="bg-white text-gray-800 px-4 py-3 rounded-lg shadow-sm relative message-tail-left"
                        >
                          <p>✨ Apple IPhone 16 (128 GB) – Ultramarino</p>
                          <p className="mt-2">por R$ 5.599 no pix 🔥🔥</p>
                          <p>💳 ou 10x de R$ 625,55</p>
                          <p>💰 Use o cupom: APPLE400</p>
                          <p>🔗 Compre aqui:</p>
                          <p className="text-[11px] text-gray-500 mt-2">19:05</p>
                        </motion.div>
                      </div>
                    )}
                  </motion.div>

                  {/* Passo 8 */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: showStep8 ? 1 : 0, y: showStep8 ? 0 : 20 }}
                    className="bg-white rounded-xl shadow-md p-6 max-w-2xl mx-auto"
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div className="bg-[#25d366] rounded-full p-2 h-10 w-10 flex items-center justify-center text-white font-bold">
                        8
                      </div>
                      <div className="flex-1">
                        <p className="text-gray-700 text-xl font-medium mb-2">
                          E Mais Recursos:
                        </p>
                        <p className="text-gray-600">
                          Além do que já mostramos <span className="text-[#128c7e] font-medium">também contamos com:</span>
                        </p>
                      </div>
                    </div>

                    {showStep8Content && (
                      <div className="space-y-6 mt-8">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div className="bg-[#dcf8c6]/20 p-4 rounded-xl">
                            <div className="flex items-center gap-2 mb-2">
                              <span>✓</span>
                              <h3 className="font-medium">Categorias Automáticas</h3>
                            </div>
                            <p className="text-gray-600">
                              Você não precisa <span className="text-[#128c7e]">criar nada</span>. A IA{' '}
                              <span className="font-medium">identifica e organiza</span> todos os seus gastos sozinha.
                            </p>
                          </div>

                          <div className="bg-[#dcf8c6]/20 p-4 rounded-xl">
                            <div className="flex items-center gap-2 mb-2">
                              <span>✓</span>
                              <h3 className="font-medium">Sugestões Inteligentes</h3>
                            </div>
                            <p className="text-gray-600">
                              Acompanhe dicas como: <span className="font-medium">"Você está gastando mais em lazer este mês. Fique de olho."</span>
                            </p>
                          </div>

                          <div className="bg-[#dcf8c6]/20 p-4 rounded-xl">
                            <div className="flex items-center gap-2 mb-2">
                              <span>✓</span>
                              <h3 className="font-medium">Análise De Compras</h3>
                            </div>
                            <p className="text-gray-600">
                              Diga o que quer comprar e a IA analisa seu perfil e te diz: <span className="font-medium">parcelar, esperar ou pagar à vista.</span>
                            </p>
                          </div>

                          <div className="bg-[#dcf8c6]/20 p-4 rounded-xl">
                            <div className="flex items-center gap-2 mb-2">
                              <span>✓</span>
                              <h3 className="font-medium">Pare De Só Economizar</h3>
                            </div>
                            <p className="text-gray-600">
                              Participe dos nossos desafios com recompensas <span className="font-medium">onde você pode ganhar até R$ 3.000 / mês.</span>
                            </p>
                          </div>
                        </div>

                        <div className="text-center space-y-4 mt-8">
                          <p className="text-gray-700">
                            e outros recursos...
                          </p>
                          <p className="text-gray-600">
                            Nosso <span className="text-[#128c7e] font-medium">diferencial</span> é justamente não ser SÓ uma ferramenta que você vai usar <span className="text-[#128c7e] font-medium">uma vez</span> e esquecer.
                          </p>
                          <p className="text-gray-600">
                            Não só registrar gastos, mas sim <span className="font-medium text-[#128c7e]">te dar o PASSO A PASSO para você realizar seus objetivos.</span>
                          </p>
                        </div>
                      </div>
                    )}
                  </motion.div>

                  {showFinalContinue2 && (
                    <motion.div
                      className="mt-8 flex justify-center"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      <button
                        onClick={() => router.push('/pricing')}
                        className="bg-[#25d366] hover:bg-[#128c7e] text-white font-medium 
                                 px-8 py-3 rounded-full text-base transition-all duration-200
                                 shadow-sm hover:shadow-md"
                      >
                        Começar Agora
                      </button>
                    </motion.div>
                  )}
                </div>
              )}
            </>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
} 