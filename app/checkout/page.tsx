'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { WhatsAppIcon } from '../components/WhatsAppIcon';

export default function Checkout() {
  const [timer, setTimer] = useState({ hours: 0, minutes: 14, seconds: 52 });
  const router = useRouter();

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        clearInterval(interval);
        return prev;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatNumber = (num: number) => num.toString().padStart(2, '0');

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Timer Banner */}
      <div className="bg-cyan-50 py-2 px-4 flex items-center justify-center gap-2 text-cyan-600">
        <span>👁️ Fique de olho, a oferta termina em:</span>
        <div className="flex items-center gap-1">
          <span className="font-mono">{formatNumber(timer.hours)}</span>
          <span>:</span>
          <span className="font-mono">{formatNumber(timer.minutes)}</span>
          <span>:</span>
          <span className="font-mono">{formatNumber(timer.seconds)}</span>
        </div>
        <div className="flex text-xs ml-2">
          <div className="text-center px-1">
            <div>HORAS</div>
          </div>
          <div className="text-center px-1">
            <div>MIN</div>
          </div>
          <div className="text-center px-1">
            <div>SEG</div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto p-4">
        {/* Header */}
        <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-6 text-white text-center mb-8">
          <div className="w-16 h-16 mx-auto mb-4">
            <WhatsAppIcon />
          </div>
          <h1 className="text-2xl font-bold mb-2">
            Seu novo assistente financeiro no whatsapp!
          </h1>
          <div className="flex justify-center gap-4 text-sm">
            <span>✓ Esqueça planilhas</span>
            <span>✓ Controle os seus gastos</span>
            <span>✓ Nunca mais esqueça um pagamento</span>
          </div>
        </div>

        {/* Form */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="space-y-8">
            {/* Identificação */}
            <div>
              <h2 className="flex items-center gap-2 text-xl font-semibold mb-6">
                <span className="text-gray-800">👤</span>
                Identificação
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-600 mb-2">Nome completo</label>
                  <input
                    type="text"
                    placeholder="Seu nome completo"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-gray-600 mb-2">E-mail</label>
                  <input
                    type="email"
                    placeholder="Seu e-mail"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-gray-600 mb-2">CPF/CNPJ</label>
                  <input
                    type="text"
                    placeholder="Digite seu CPF/CNPJ"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-gray-600 mb-2">Celular</label>
                  <div className="flex">
                    <select className="px-3 py-3 rounded-l-lg border border-r-0 border-gray-300 bg-gray-50">
                      <option value="+55">🇧🇷 +55</option>
                    </select>
                    <input
                      type="tel"
                      placeholder="(00) 00000-0000"
                      className="flex-1 px-4 py-3 rounded-r-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Pagamento */}
            <div>
              <h2 className="flex items-center gap-2 text-xl font-semibold mb-6">
                <span className="text-gray-800">💳</span>
                Pagamento
                <span className="text-sm font-normal text-gray-500 ml-2">
                  Cartão de crédito
                </span>
              </h2>
              <div className="space-y-6">
                <div>
                  <label className="block text-gray-600 mb-2">Nome do titular</label>
                  <input
                    type="text"
                    placeholder="Digite o nome do titular"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-gray-600 mb-2">Número do cartão</label>
                  <input
                    type="text"
                    placeholder="Digite o número do seu cartão"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-600 mb-2">Validade</label>
                    <input
                      type="text"
                      placeholder="MM/AA"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-600 mb-2">CVV</label>
                    <input
                      type="text"
                      placeholder="000"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="mt-8">
            <button
              onClick={() => router.push('/sucesso')}
              className="w-full bg-orange-400 hover:bg-orange-500 text-white font-semibold 
                       py-4 rounded-full text-xl transition-colors duration-200 
                       shadow-lg hover:shadow-xl"
            >
              Começar Agora
            </button>
            <p className="text-center text-gray-500 text-sm mt-4">
              Pagamento 100% seguro via stripe 🔒
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 