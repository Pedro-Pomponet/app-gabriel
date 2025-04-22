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

  const handleStep2Continue = () => {
    setCurrentStep(3);
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
                                    <p>Receitas: R$ 1.000,00</p>
                                    <p>Despesas: R$ 35,00</p>
                                    <p>Saldo: R$ 965,00</p>
                                  </div>
                                  
                                  <p className="font-medium mb-2">Principais categorias de gastos:</p>
                                  <p>🍽️ Alimentação: R$ 35,00 (100%)</p>
                                  
                                  <p className="mt-3">💡 Análise: Sua semana foi excelente do ponto de vista financeiro! Você manteve os gastos bem abaixo da sua receita.</p>
                                  
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
                    <motion.div 
                      className="bg-white/95 rounded-2xl shadow-md p-4 h-auto md:min-h-0"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                    >
                      <div className="flex items-start gap-3 mb-4">
                        <div className="bg-[#25d366] w-8 h-8 rounded-full flex items-center justify-center text-white font-medium">
                          4
                        </div>
                        <div>
                          <h2 className="text-lg font-medium mb-1">Acesso ao dashboard</h2>
                          <p className="text-gray-600 text-sm">
                            Quer saber pra onde seu dinheiro tá indo?<br />
                            Acesse agora seu painel com tudo detalhado.
                          </p>
                        </div>
                      </div>

                      <AnimatePresence mode="wait">
                        {!showStep4Chat ? (
                          <div className="flex justify-end">
                            <motion.button
                              onClick={handleStep4Click}
                              className="bg-[#075e54] text-white px-4 py-2 rounded-full flex items-center gap-2"
                              exit={{ opacity: 0, y: 10 }}
                            >
                              <ArrowIcon />
                              Abrir meu Dashboard
                            </motion.button>
                          </div>
                        ) : (
                          <motion.div 
                            className="bg-[#efeae2] rounded-lg p-3 space-y-3"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                          >
                            <motion.div
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              className="flex flex-col items-end"
                            >
                              <div className="rounded-lg overflow-hidden mb-3">
                                <video 
                                  autoPlay 
                                  loop 
                                  muted 
                                  playsInline
                                  className="w-full"
                                >
                                  <source src="/videos/Dashboard.mp4" type="video/mp4" />
                                </video>
                              </div>
                              
                              <div className="bg-white text-gray-800 px-2 py-[6px] rounded-lg shadow-sm mb-4">
                                <p className="text-[14.5px] leading-[19px] text-gray-600">
                                  Veja todas as suas transações, edite valores, filtre por categorias e visualize gráficos com seus hábitos financeiros.
                                </p>
                              </div>

                              {/* Botão Ver detalhamento de transações */}
                              <motion.button
                                onClick={handleTransactionsClick}
                                className="bg-[#00a884] text-white px-4 py-2 rounded-lg w-fit mb-3"
                              >
                                Ver detalhamento de transações
                              </motion.button>

                              {/* Vídeo de Transações */}
                              {showTransactions && (
                                <motion.div
                                  initial={{ opacity: 0, height: 0 }}
                                  animate={{ opacity: 1, height: 'auto' }}
                                  className="flex flex-col items-end w-full mb-4"
                                >
                                  <div className="rounded-lg overflow-hidden mb-3">
                                    <video 
                                      autoPlay 
                                      loop 
                                      muted 
                                      playsInline
                                      className="w-full"
                                    >
                                      <source src="/videos/Transacao.mp4" type="video/mp4" />
                                    </video>
                                  </div>

                                  {/* Botão Relatórios */}
                                  <motion.button
                                    onClick={handleReportsClick}
                                    className="bg-[#00a884] text-white px-4 py-2 rounded-lg w-fit"
                                  >
                                    Ver relatórios detalhados
                                  </motion.button>

                                  {/* Vídeo de Relatórios */}
                                  {showReports && (
                                    <motion.div
                                      initial={{ opacity: 0, height: 0 }}
                                      animate={{ opacity: 1, height: 'auto' }}
                                      className="mt-4"
                                    >
                                      <div className="rounded-lg overflow-hidden mb-4">
                                        <video 
                                          autoPlay 
                                          loop 
                                          muted 
                                          playsInline
                                          className="w-full"
                                        >
                                          <source src="/videos/Relatorios.mp4" type="video/mp4" />
                                        </video>
                                      </div>

                                      {/* Botão Quero Começar */}
                                      <motion.button
                                        onClick={() => window.location.href = 'https://economizai-delta.vercel.app/pagamento'}
                                        className="bg-[#25d366] text-white px-6 py-3 rounded-lg w-full font-medium text-lg"
                                      >
                                        Quero começar agora
                                      </motion.button>
                                    </motion.div>
                                  )}
                                </motion.div>
                              )}
                            </motion.div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
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
