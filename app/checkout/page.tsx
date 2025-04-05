'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';

export default function CheckoutPage() {
  const [selectedPayment, setSelectedPayment] = useState<'credit' | 'pix'>('credit');
  const [showCupomInput, setShowCupomInput] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#128c7e]/5 to-gray-50 py-12">
      <motion.div 
        className="max-w-xl mx-auto px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-[#25d366] to-[#128c7e] text-white p-8 rounded-t-3xl relative overflow-hidden shadow-lg">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-white/10 p-2 rounded-full">
              <Image
                src="/icons/economiza-ai-logo.png"
                alt="Economiza Aí"
                width={64}
                height={64}
                className="rounded-lg"
              />
            </div>
            <h1 className="text-2xl font-bold">
              Economiza Aí
            </h1>
          </div>
          <div className="absolute right-0 top-0 w-32 h-32 bg-white/10 rounded-bl-[100%]" />
          <div className="absolute -right-4 -bottom-4 w-24 h-24">
            <Image
              src="/icons/whatsapp-icon.png"
              alt="WhatsApp Icon"
              width={96}
              height={96}
              className="opacity-25"
            />
          </div>
          <h1 className="text-3xl font-bold mb-4 relative">
            Seu novo assistente financeiro no WhatsApp!
          </h1>
          <div className="space-y-2 text-base relative">
            <p className="flex items-center gap-2">
              <span className="bg-white/20 p-1 rounded">✓</span>
              Esqueça planilhas
            </p>
            <p className="flex items-center gap-2">
              <span className="bg-white/20 p-1 rounded">✓</span>
              Controle os seus gastos
            </p>
            <p className="flex items-center gap-2">
              <span className="bg-white/20 p-1 rounded">✓</span>
              Nunca mais esqueça um pagamento
            </p>
          </div>
        </div>

        {/* Form Container */}
        <div className="bg-white rounded-b-3xl shadow-xl p-8">
          {/* Progress Steps */}
          <div className="flex items-center justify-between mb-12 relative">
            <div className="absolute left-0 right-0 top-1/2 h-0.5 bg-gray-200 -translate-y-1/2" />
            <div className="relative z-10 flex items-center justify-center w-8 h-8 bg-[#128c7e] text-white rounded-full text-sm">
              1
            </div>
            <div className="relative z-10 flex items-center justify-center w-8 h-8 bg-gray-200 text-gray-500 rounded-full text-sm">
              2
            </div>
            <div className="relative z-10 flex items-center justify-center w-8 h-8 bg-gray-200 text-gray-500 rounded-full text-sm">
              3
            </div>
          </div>

          {/* Identificação */}
          <div className="mb-12">
            <h2 className="flex items-center gap-3 text-xl font-semibold mb-6 text-gray-800">
              <span className="flex items-center justify-center w-8 h-8 bg-[#128c7e]/10 text-[#128c7e] rounded-lg">
                👤
              </span>
              Identificação
            </h2>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="col-span-2">
                <label className="block text-gray-700 font-medium mb-2">Nome completo</label>
                <input 
                  type="text"
                  placeholder="Seu nome completo"
                  className="w-full px-4 py-3 border-2 rounded-xl focus:ring-2 focus:ring-[#128c7e] focus:border-transparent transition-all"
                />
              </div>
              
              <div className="col-span-2">
                <label className="block text-gray-700 font-medium mb-2">E-mail</label>
                <input 
                  type="email"
                  placeholder="Seu melhor e-mail"
                  className="w-full px-4 py-3 border-2 rounded-xl focus:ring-2 focus:ring-[#128c7e] focus:border-transparent transition-all"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">CPF/CNPJ</label>
                <input 
                  type="text"
                  placeholder="000.000.000-00"
                  className="w-full px-4 py-3 border-2 rounded-xl focus:ring-2 focus:ring-[#128c7e] focus:border-transparent transition-all"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">Celular</label>
                <div className="flex">
                  <select className="px-3 py-3 border-2 rounded-l-xl bg-gray-50 border-r-0">
                    <option>🇧🇷 +55</option>
                  </select>
                  <input 
                    type="tel"
                    placeholder="(00) 00000-0000"
                    className="w-full px-4 py-3 border-2 rounded-r-xl focus:ring-2 focus:ring-[#128c7e] focus:border-transparent transition-all"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Pagamento */}
          <div className="mb-12">
            <h2 className="flex items-center gap-3 text-xl font-semibold mb-6 text-gray-800">
              <span className="flex items-center justify-center w-8 h-8 bg-[#128c7e]/10 text-[#128c7e] rounded-lg">
                💳
              </span>
              Pagamento
            </h2>

            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <button
                  onClick={() => setSelectedPayment('credit')}
                  className={`p-6 border-2 rounded-2xl transition-all ${
                    selectedPayment === 'credit' 
                      ? 'border-[#128c7e] bg-[#128c7e]/5' 
                      : 'hover:border-gray-300'
                  }`}
                >
                  <div className="flex flex-col items-center gap-3">
                    <svg className="w-10 h-10 text-[#128c7e]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                    </svg>
                    <span className="font-medium">Cartão de Crédito</span>
                  </div>
                </button>
                <button
                  onClick={() => setSelectedPayment('pix')}
                  className={`p-6 border-2 rounded-2xl transition-all ${
                    selectedPayment === 'pix' 
                      ? 'border-[#128c7e] bg-[#128c7e]/5' 
                      : 'hover:border-gray-300'
                  }`}
                >
                  <div className="flex flex-col items-center gap-3">
                    <Image
                      src="/icons/pix-icon.png"
                      alt="Pix"
                      width={40}
                      height={40}
                    />
                    <span className="font-medium">PIX</span>
                  </div>
                </button>
              </div>

              {selectedPayment === 'credit' && (
                <motion.div 
                  className="space-y-6"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <div>
                    <label className="block text-gray-700 mb-1">Nome do titular</label>
                    <input 
                      type="text"
                      placeholder="Digite o nome do titular"
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#128c7e] focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 mb-1">Número do cartão</label>
                    <input 
                      type="text"
                      placeholder="Digite o número do seu cartão"
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#128c7e] focus:border-transparent"
                    />
                  </div>

                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <label className="block text-gray-700 mb-1">Vencimento</label>
                      <input 
                        type="text"
                        placeholder="MM/AA"
                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#128c7e] focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 mb-1">CVV</label>
                      <input 
                        type="text"
                        placeholder="000"
                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#128c7e] focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 mb-1">Parcelamento</label>
                      <select className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#128c7e] focus:border-transparent bg-white">
                        <option>12x de 5,84*</option>
                      </select>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          </div>

          {/* Resumo da Compra */}
          <div className="mb-12">
            <h2 className="flex items-center gap-3 text-xl font-semibold mb-6 text-gray-800">
              <span className="flex items-center justify-center w-8 h-8 bg-[#128c7e]/10 text-[#128c7e] rounded-lg">
                🛍️
              </span>
              Sua Compra
              <span className="ml-auto text-base font-normal">1 item • R$ 57,00</span>
            </h2>

            <div className="bg-gray-50 rounded-2xl p-6">
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 bg-white rounded-xl p-2 shadow-sm">
                  <Image
                    src="/icons/economiza-ai-logo.png"
                    alt="Economiza Aí"
                    width={64}
                    height={64}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-semibold text-lg">Assinatura Anual - Economiza Aí</h3>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-gray-500 line-through">R$ 114,00</span>
                        <span className="text-[#128c7e] font-medium">R$ 57,00/ano</span>
                        <span className="bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full font-medium">
                          Recomendado
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Cupom */}
          <div className="mb-12">
            {!showCupomInput ? (
              <button 
                onClick={() => setShowCupomInput(true)}
                className="text-[#128c7e] hover:text-[#0e6b5e] font-medium flex items-center gap-2"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                </svg>
                Possui cupom de desconto?
              </button>
            ) : (
              <motion.div 
                className="flex gap-3"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <input
                  type="text"
                  placeholder="Digite seu cupom"
                  className="flex-1 px-4 py-3 border-2 rounded-xl focus:ring-2 focus:ring-[#128c7e] focus:border-transparent transition-all"
                />
                <button className="bg-[#128c7e] text-white px-6 py-3 rounded-xl hover:bg-[#0e6b5e] transition-colors">
                  Aplicar
                </button>
              </motion.div>
            )}
          </div>

          {/* Botão de Ação */}
          <button className="w-full bg-[#128c7e] hover:bg-[#0e6b5e] text-white font-bold py-4 rounded-xl text-lg transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
            Assine agora
          </button>

          {/* Footer */}
          <div className="mt-8 text-center text-sm text-gray-500">
            <p>
              Ao clicar em "Assine agora", você concorda com os{' '}
              <a href="#" className="text-[#128c7e] hover:underline font-medium">Termos da Compra</a>
              {' '}e está ciente da{' '}
              <a href="#" className="text-[#128c7e] hover:underline font-medium">Política de Privacidade</a>.
            </p>
            <div className="flex items-center justify-between mt-6 pt-6 border-t">
              <div className="text-xs">KVN Tecnologia Kirvano © 2025 - Todos os direitos reservados</div>
              <div className="flex items-center gap-2 text-xs text-green-600 font-medium">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                Compra 100% segura
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
} 