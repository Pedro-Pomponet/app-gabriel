'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { ArrowIcon } from '../components/ArrowIcon';

// Helper para formatar data e hora
const getCurrentDateTime = () => {
  const now = new Date();
  
  // Formata a hora como HH:mm
  const time = now.toLocaleTimeString('pt-BR', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false
  });

  // Formata a data como DD/MM/YYYY
  const date = now.toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  });

  // Retorna um objeto com data e hora formatados
  return { time, date };
};

// Helper para período da semana
const getWeekPeriod = () => {
  const now = new Date();
  const start = new Date(now);
  start.setDate(now.getDate() - 6); // 7 dias atrás

  return {
    start: start.toLocaleDateString('pt-BR', { 
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    }),
    end: now.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    })
  };
};

// Adicionar uma função de scroll
const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

export default function DemoPage() {
  const [showChat, setShowChat] = useState(false);
  const [showTyping, setShowTyping] = useState(false);
  const [showResponse, setShowResponse] = useState(false);
  const [showSalaryButton, setShowSalaryButton] = useState(false);
  const [showSalaryChat, setShowSalaryChat] = useState(false);
  const [showContinueButton, setShowContinueButton] = useState(false);
  const [showSalaryTyping, setShowSalaryTyping] = useState(false);
  const [showSalaryResponse, setShowSalaryResponse] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [showStep2Chat, setShowStep2Chat] = useState(false);
  const [showStep2Typing, setShowStep2Typing] = useState(false);
  const [showStep2Response, setShowStep2Response] = useState(false);
  const [showStep2Continue, setShowStep2Continue] = useState(false);
  const [showStep3Chat, setShowStep3Chat] = useState(false);
  const [showStep3Typing, setShowStep3Typing] = useState(false);
  const [showStep3Response, setShowStep3Response] = useState(false);
  const [showStep3Continue, setShowStep3Continue] = useState(false);
  const [showStep4Chat, setShowStep4Chat] = useState(false);
  const [showTransactions, setShowTransactions] = useState(false);
  const [showReports, setShowReports] = useState(false);
  const [showStep5, setShowStep5] = useState(false);
  const [showStep6, setShowStep6] = useState(false);

  // Guarda o timestamp quando cada mensagem é enviada
  const [firstMessageTime, setFirstMessageTime] = useState('');
  const [secondMessageTime, setSecondMessageTime] = useState('');
  const [thirdMessageTime, setThirdMessageTime] = useState('');
  const [weekPeriod, setWeekPeriod] = useState({ start: '', end: '' });
  const [currentDate, setCurrentDate] = useState('');

  const handleStartChat = () => {
    const { time, date } = getCurrentDateTime();
    setFirstMessageTime(time);
    setCurrentDate(date);
    setShowChat(true);
    setShowTyping(true);
    
    setTimeout(() => {
      setShowTyping(false);
      setShowResponse(true);
    }, 2000);

    setTimeout(() => {
      setShowSalaryButton(true);
    }, 3000);
  };

  const handleSalaryClick = () => {
    const { time, date } = getCurrentDateTime();
    setSecondMessageTime(time);
    setCurrentDate(date);
    setShowSalaryButton(false);
    setShowSalaryChat(true);
    setShowSalaryTyping(true);
    
    setTimeout(() => {
      setShowSalaryTyping(false);
      setShowSalaryResponse(true);
    }, 2000);

    setTimeout(() => {
      setShowContinueButton(true);
    }, 3000);
  };

  const handleContinueClick = () => {
    setCurrentStep(2);
  };

  const handleStep2Click = () => {
    const { time, date } = getCurrentDateTime();
    setSecondMessageTime(time);
    setCurrentDate(date);
    setShowStep2Chat(true);
    setShowStep2Typing(true);
    
    setTimeout(() => {
      setShowStep2Typing(false);
      setShowStep2Response(true);
    }, 2000);

    setTimeout(() => {
      setShowStep2Continue(true);
    }, 3000);
  };

  const handleStep1Continue = () => {
    setCurrentStep(2);
    scrollToTop();
  };

  const handleStep2Continue = () => {
    setCurrentStep(3);
    scrollToTop();
  };

  const handleStep3Click = () => {
    const { time, date } = getCurrentDateTime();
    const period = getWeekPeriod();
    setThirdMessageTime(time);
    setCurrentDate(date);
    setWeekPeriod(period);
    setShowStep3Chat(true);
    setShowStep3Typing(true);
    
    setTimeout(() => {
      setShowStep3Typing(false);
      setShowStep3Response(true);
    }, 2000);

    setTimeout(() => {
      setShowStep3Continue(true);
    }, 3000);
  };

  const handleStep3Continue = () => {
    setCurrentStep(4);
    scrollToTop();
  };

  const handleStep4Click = () => {
    setShowStep4Chat(true);
  };

  const handleTransactionsClick = () => {
    setShowTransactions(true);
  };

  const handleReportsClick = () => {
    setShowReports(true);
  };

  return (
    <div className="min-h-screen bg-[#e5e7eb] flex justify-center items-start">
      <div className="w-full max-w-2xl md:py-8 md:px-4">
        <div className="w-full max-w-[430px] mx-auto pt-6">
          <AnimatePresence mode="wait">
            {(() => {
              switch (currentStep) {
                case 1:
                  return (
                    <motion.div 
                      className="bg-white/95 rounded-2xl shadow-md p-4 h-auto md:min-h-0"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                    >
                      <div className="flex items-start gap-3 mb-4">
                        <div className="bg-[#25d366] w-8 h-8 rounded-full flex items-center justify-center text-white font-medium">
                          1
                        </div>
                        <div>
                          <h2 className="text-lg font-medium mb-1">Adicione Despesas ou Receitas</h2>
                          <p className="text-gray-600 text-sm">
                            "mercado 80" ou "uber 25"
                          </p>
                        </div>
                      </div>

                      <div className="mb-6">
                        <p className="text-gray-600 text-sm">
                          🛒 Cadastre um gasto (real ou fictício) para testar. Não precisa usar vírgulas nem colocar "R$". Pode escrever do seu jeito.
                        </p>
                      </div>

                      <AnimatePresence mode="wait">
                        {!showChat ? (
                          <div className="flex justify-end">
                            <motion.button
                              onClick={handleStartChat}
                              className="bg-[#075e54] text-white px-4 py-2 rounded-full flex items-center gap-2"
                              exit={{ opacity: 0, y: 10 }}
                            >
                              <ArrowIcon />
                              farmácia 37
                            </motion.button>
                          </div>
                        ) : (
                          <motion.div 
                            className="bg-[#efeae2] rounded-lg p-3 space-y-3"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                          >
                            <motion.div 
                              className="flex justify-end"
                              initial={{ opacity: 0, x: 20 }}
                              animate={{ opacity: 1, x: 0 }}
                            >
                              <div className="bg-[#dcf8c6] text-gray-800 px-2 py-[6px] rounded-lg max-w-[92%] shadow-sm">
                                <p className="text-[14.5px] leading-[19px]">farmácia 37</p>
                                <p className="text-[11px] text-gray-500 text-right mt-[1px]">{firstMessageTime}</p>
                              </div>
                            </motion.div>

                            {showTyping && (
                              <motion.div 
                                className="flex items-center gap-2 text-gray-500 text-[12px] ml-2"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                              >
                                digitando...
                              </motion.div>
                            )}

                            {showResponse && (
                              <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="flex"
                              >
                                <div className="bg-white text-gray-800 px-2 py-[6px] rounded-lg max-w-[92%] shadow-sm">
                                  <p className="text-[14.5px] leading-[19px] font-normal mb-2">
                                    A transação foi registrada com sucesso. Aqui estão os detalhes:
                                  </p>
                                  <p className="text-[14.5px] leading-[19px]">💳 Transação:</p>
                                  <ul className="list-disc pl-4 space-y-[1px] text-[14.5px] leading-[19px]">
                                    <li>Tipo: Despesa</li>
                                    <li>Descrição: farmácia</li>
                                    <li>Categoria: Saúde</li>
                                    <li>Valor: 37 reais</li>
                                    <li>Data: {currentDate}</li>
                                  </ul>
                                  <p className="mt-2 text-[14.5px] leading-[19px]">
                                    Se alguma informação estiver errada, é só dizer que corrigimos!
                                  </p>
                                  <p className="text-[11px] text-gray-500 mt-[1px]">{firstMessageTime}</p>
                                </div>
                              </motion.div>
                            )}

                            {showSalaryButton && (
                              <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                className="flex justify-end"
                              >
                                <button
                                  onClick={handleSalaryClick}
                                  className="bg-[#075e54] text-white px-4 py-2 rounded-full flex items-center gap-2"
                                >
                                  <ArrowIcon />
                                  recebi 3 mil de salário
                                </button>
                              </motion.div>
                            )}

                            {showSalaryChat && (
                              <>
                                <motion.div 
                                  className="flex justify-end"
                                  initial={{ opacity: 0, x: 20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                >
                                  <div className="bg-[#dcf8c6] text-gray-800 px-2 py-[6px] rounded-lg max-w-[92%] shadow-sm">
                                    <p className="text-[14.5px] leading-[19px]">recebi 3 mil de salário</p>
                                    <p className="text-[11px] text-gray-500 text-right mt-[1px]">{secondMessageTime}</p>
                                  </div>
                                </motion.div>

                                {showSalaryTyping && (
                                  <motion.div 
                                    className="flex items-center gap-2 text-gray-500 text-[12px] ml-2"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                  >
                                    digitando...
                                  </motion.div>
                                )}

                                {showSalaryResponse && (
                                  <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    className="flex"
                                  >
                                    <div className="bg-white text-gray-800 px-2 py-[6px] rounded-lg max-w-[92%] shadow-sm">
                                      <p className="text-[14.5px] leading-[19px] font-normal mb-2">
                                        A transação foi registrada com sucesso. Aqui estão os detalhes:
                                      </p>
                                      <p className="text-[14.5px] leading-[19px]">💳 Transação:</p>
                                      <ul className="list-disc pl-4 space-y-[1px] text-[14.5px] leading-[19px]">
                                        <li>Tipo: Receita</li>
                                        <li>Descrição: salário</li>
                                        <li>Categoria: Salário</li>
                                        <li>Valor: 3000 reais</li>
                                        <li>Data: {currentDate}</li>
                                      </ul>
                                      <p className="mt-2 text-[14.5px] leading-[19px]">
                                        Se alguma informação estiver errada, é só dizer que corrigimos!
                                      </p>
                                      <p className="text-[11px] text-gray-500 mt-[1px]">{secondMessageTime}</p>
                                    </div>
                                  </motion.div>
                                )}

                                {showContinueButton && (
                                  <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="flex justify-center mt-4"
                                  >
                                    <button
                                      onClick={handleContinueClick}
                                      className="bg-[#25d366] text-white px-6 py-2 rounded-full"
                                    >
                                      Continuar
                                    </button>
                                  </motion.div>
                                )}
                              </>
                            )}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                case 2:
                  return (
                    <motion.div 
                      className="bg-white/95 rounded-2xl shadow-md p-4 h-auto md:min-h-0"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                    >
                      <div className="flex items-start gap-3 mb-4">
                        <div className="bg-[#25d366] w-8 h-8 rounded-full flex items-center justify-center text-white font-medium">
                          2
                        </div>
                        <div>
                          <h2 className="text-lg font-medium mb-1">Mandou alguma informação errada?</h2>
                          <p className="text-gray-600 text-sm">
                            Corrija facilmente. Basta escrever de forma natural.
                          </p>
                        </div>
                      </div>

                      <div className="mb-6">
                        <p className="text-gray-600 text-sm">
                          Exemplo:
                        </p>
                      </div>

                      <AnimatePresence mode="wait">
                        {!showStep2Chat ? (
                          <div className="flex justify-end">
                            <motion.button
                              onClick={handleStep2Click}
                              className="bg-[#075e54] text-white px-4 py-2 rounded-full flex items-center gap-2"
                              exit={{ opacity: 0, y: 10 }}
                            >
                              <ArrowIcon />
                              Eita, a farmácia na vdd foi 52
                            </motion.button>
                          </div>
                        ) : (
                          <motion.div 
                            className="bg-[#efeae2] rounded-lg p-3 space-y-3"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                          >
                            <motion.div 
                              className="flex justify-end"
                              initial={{ opacity: 0, x: 20 }}
                              animate={{ opacity: 1, x: 0 }}
                            >
                              <div className="bg-[#dcf8c6] text-gray-800 px-2 py-[6px] rounded-lg max-w-[92%] shadow-sm">
                                <p className="text-[14.5px] leading-[19px]">Eita, a farmácia na vdd foi 52</p>
                                <p className="text-[11px] text-gray-500 text-right mt-[1px]">{secondMessageTime}</p>
                              </div>
                            </motion.div>

                            {showStep2Typing && (
                              <motion.div 
                                className="flex items-center gap-2 text-gray-500 text-[12px] ml-2"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                              >
                                digitando...
                              </motion.div>
                            )}

                            {showStep2Response && (
                              <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="flex"
                              >
                                <div className="bg-white text-gray-800 px-2 py-[6px] rounded-lg max-w-[92%] shadow-sm">
                                  <p className="text-[14.5px] leading-[19px] font-normal mb-2">
                                    A correção foi realizada com sucesso. Aqui estão os detalhes atualizados da transação:
                                  </p>
                                  <p className="text-[14.5px] leading-[19px]">💳 Transação:</p>
                                  <ul className="list-disc pl-4 space-y-[1px] text-[14.5px] leading-[19px]">
                                    <li>Tipo: Despesa</li>
                                    <li>Descrição: farmácia</li>
                                    <li>Categoria: Saúde</li>
                                    <li>Valor: 52 reais</li>
                                    <li>Data: {currentDate}</li>
                                  </ul>
                                  <p className="mt-2 text-[14.5px] leading-[19px]">
                                    Se alguma informação estiver errada, é só dizer que corrigimos!
                                  </p>
                                  <p className="text-[11px] text-gray-500 mt-[1px]">{secondMessageTime}</p>
                                </div>
                              </motion.div>
                            )}

                            {showStep2Continue && (
                              <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="flex justify-center mt-4"
                              >
                                <button
                                  onClick={handleStep2Continue}
                                  className="bg-[#25d366] text-white px-6 py-2 rounded-full"
                                >
                                  Continuar
                                </button>
                              </motion.div>
                            )}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                case 3:
                  return (
                    <motion.div 
                      className="bg-white/95 rounded-2xl shadow-md p-4 h-auto md:min-h-0"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                    >
                      <div className="flex items-start gap-3 mb-4">
                        <div className="bg-[#25d366] w-8 h-8 rounded-full flex items-center justify-center text-white font-medium">
                          3
                        </div>
                        <div>
                          <h2 className="text-lg font-medium mb-1">Veja quanto gastou nos últimos dias</h2>
                          <p className="text-gray-600 text-sm">
                            Quer saber quanto já gastou essa semana?<br />
                            É só perguntar, por exemplo:
                          </p>
                        </div>
                      </div>

                      <AnimatePresence mode="wait">
                        {!showStep3Chat ? (
                          <div className="flex justify-end">
                            <motion.button
                              onClick={handleStep3Click}
                              className="bg-[#075e54] text-white px-4 py-2 rounded-full flex items-center gap-2"
                              exit={{ opacity: 0, y: 10 }}
                            >
                              <ArrowIcon />
                              quanto eu gastei nos últimos dias?
                            </motion.button>
                          </div>
                        ) : (
                          <motion.div 
                            className="bg-[#efeae2] rounded-lg p-3 space-y-3"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                          >
                            <motion.div 
                              className="flex justify-end"
                              initial={{ opacity: 0, x: 20 }}
                              animate={{ opacity: 1, x: 0 }}
                            >
                              <div className="bg-[#dcf8c6] text-gray-800 px-2 py-[6px] rounded-lg max-w-[92%] shadow-sm">
                                <p className="text-[14.5px] leading-[19px]">quanto eu gastei nos últimos dias?</p>
                                <p className="text-[11px] text-gray-500 text-right mt-[1px]">{thirdMessageTime}</p>
                              </div>
                            </motion.div>

                            {showStep3Typing && (
                              <motion.div 
                                className="flex items-center gap-2 text-gray-500 text-[12px] ml-2"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                              >
                                digitando...
                              </motion.div>
                            )}

                            {showStep3Response && (
                              <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="flex"
                              >
                                <div className="bg-white text-gray-800 px-2 py-[6px] rounded-lg max-w-[92%] shadow-sm">
                                  <p className="text-[14.5px] leading-[19px] font-normal mb-3">📊 Relatório Financeiro Semanal</p>
                                  
                                  <p className="text-sm mb-2">Período: {weekPeriod.start} a {weekPeriod.end}</p>
                                  
                                  <div className="space-y-1 mb-3">
                                    <p>Receitas: R$ 2.350,00</p>
                                    <p>Despesas: R$ 876,50</p>
                                    <p>Saldo: R$ 1.473,50</p>
                                  </div>
                                  
                                  <p className="font-medium mb-2">Principais categorias de gastos:</p>
                                  <p>🍽️ Alimentação: R$ 425,00 (48%)</p>
                                  <p>🚗 Transporte: R$ 215,50 (25%)</p>
                                  <p>💊 Saúde: R$ 236,00 (27%)</p>
                                  
                                  <p className="mt-3">💡 Análise: Você está mantendo um bom controle dos gastos! Sua maior despesa é com alimentação, seguida por saúde e transporte.</p>
                                  
                                  <p className="text-[11px] text-gray-500 mt-[1px]">{thirdMessageTime}</p>
                                </div>
                              </motion.div>
                            )}

                            {showStep3Continue && (
                              <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="flex justify-center mt-4"
                              >
                                <button
                                  onClick={handleStep3Continue}
                                  className="bg-[#25d366] text-white px-6 py-2 rounded-full"
                                >
                                  Continuar
                                </button>
                              </motion.div>
                            )}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                case 4:
                  return (
                    <>
                      {/* Passo 4 - Dashboard */}
                      <motion.div 
                        className="bg-white/95 rounded-2xl shadow-md p-4 h-auto md:min-h-0 mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                      >
                        <div className="flex items-start gap-3 mb-4">
                          <div className="bg-[#25d366] w-8 h-8 rounded-full flex items-center justify-center text-white font-medium">
                            4
                          </div>
                          <div>
                            <h2 className="text-lg font-medium mb-1">Dashboard Principal</h2>
                            <p className="text-gray-600 text-sm">
                              Tenha uma visão geral das suas finanças em um só lugar.<br />
                              Veja seus gastos, receitas e saldo atual.
                            </p>
                          </div>
                        </div>

                        <div className="rounded-lg overflow-hidden mb-3">
                          <video 
                            autoPlay 
                            loop 
                            muted 
                            playsInline
                            className="w-full h-auto"
                          >
                            <source src="/videos/Dashboard.mp4" type="video/mp4" />
                            Seu navegador não suporta vídeos.
                          </video>
                        </div>

                        <div className="bg-white text-gray-800 px-2 py-[6px] rounded-lg shadow-sm mb-4">
                          <p className="text-[14.5px] leading-[19px] text-gray-600">
                            Veja todas as suas transações, edite valores, filtre por categorias e visualize gráficos com seus hábitos financeiros.
                          </p>
                        </div>

                        {!showStep5 && (
                          <motion.div className="flex justify-center mt-4">
                            <button
                              onClick={() => setShowStep5(true)}
                              className="bg-[#25d366] text-white px-6 py-2 rounded-full"
                            >
                              Ver Transações
                            </button>
                          </motion.div>
                        )}
                      </motion.div>

                      {/* Passo 5 - Transações */}
                      {showStep5 && (
                        <motion.div 
                          className="bg-white/95 rounded-2xl shadow-md p-4 h-auto md:min-h-0 mb-4"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                        >
                          <div className="flex items-start gap-3 mb-4">
                            <div className="bg-[#25d366] w-8 h-8 rounded-full flex items-center justify-center text-white font-medium">
                              5
                            </div>
                            <div>
                              <h2 className="text-lg font-medium mb-1">Detalhamento de Transações</h2>
                              <p className="text-gray-600 text-sm">
                                Explore todas suas transações com detalhes.<br />
                                Filtre, edite e organize seus gastos facilmente.
                              </p>
                            </div>
                          </div>

                          <div className="rounded-lg overflow-hidden mb-3">
                            <video 
                              autoPlay 
                              loop 
                              muted 
                              playsInline
                              className="w-full h-auto"
                            >
                              <source src="/videos/Transacao.mp4" type="video/mp4" />
                              Seu navegador não suporta vídeos.
                            </video>
                          </div>

                          <div className="bg-white text-gray-800 px-2 py-[6px] rounded-lg shadow-sm mb-4">
                            <p className="text-[14.5px] leading-[19px] text-gray-600">
                              Visualize cada transação, aplique filtros por data ou categoria, e faça edições quando necessário.
                            </p>
                          </div>

                          {!showStep6 && (
                            <motion.div className="flex justify-center mt-4">
                              <button
                                onClick={() => setShowStep6(true)}
                                className="bg-[#25d366] text-white px-6 py-2 rounded-full"
                              >
                                Ver Relatórios
                              </button>
                            </motion.div>
                          )}
                        </motion.div>
                      )}

                      {/* Passo 6 - Relatórios */}
                      {showStep6 && (
                        <motion.div 
                          className="bg-white/95 rounded-2xl shadow-md p-4 h-auto md:min-h-0"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                        >
                          <div className="flex items-start gap-3 mb-4">
                            <div className="bg-[#25d366] w-8 h-8 rounded-full flex items-center justify-center text-white font-medium">
                              6
                            </div>
                            <div>
                              <h2 className="text-lg font-medium mb-1">Relatórios Detalhados</h2>
                              <p className="text-gray-600 text-sm">
                                Veja todos os detalhes das suas transações.<br />
                                Filtre, edite e organize seus gastos facilmente.
                              </p>
                            </div>
                          </div>

                          <div className="rounded-lg overflow-hidden mb-3">
                            <video 
                              autoPlay 
                              loop 
                              muted 
                              playsInline
                              className="w-full h-auto"
                            >
                              <source src="/videos/Relatorios.mp4" type="video/mp4" />
                              Seu navegador não suporta vídeos.
                            </video>
                          </div>

                          <div className="bg-white text-gray-800 px-2 py-[6px] rounded-lg shadow-sm mb-4">
                            <p className="text-[14.5px] leading-[19px] text-gray-600">
                              Veja todos os detalhes das suas transações, edite valores, filtre por categorias e visualize gráficos com seus hábitos financeiros.
                            </p>
                          </div>

                          <motion.div className="flex justify-center mt-4">
                            <button
                              onClick={() => window.location.href = 'https://economizai-delta.vercel.app/pagamento'}
                              className="bg-[#25d366] text-white px-6 py-3 rounded-lg w-full font-medium text-lg"
                            >
                              Quero começar agora
                            </button>
                          </motion.div>
                        </motion.div>
                      )}
                    </>
                  );
                default:
                  return null;
              }
            })()}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
