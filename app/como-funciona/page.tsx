'use client';

import { useState } from 'react';
import Link from 'next/link';
import { SendIcon } from '../components/Icons';

export default function ComoFuncionaPage() {
  const [inputValue, setInputValue] = useState('');
  const [showDemo, setShowDemo] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim()) {
      setShowDemo(true);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-3xl mx-auto pt-8 pb-16">
        {/* Título */}
        <h1 className="text-3xl font-bold text-green-700 text-center mb-8">
          Como Funciona?
        </h1>

        {/* Explicação Principal */}
        <div className="text-center mb-12">
          <p className="text-xl mb-4">
            <span className="text-green-700 font-semibold">Um assistente financeiro no seu WhatsApp</span>,
            <br />
            <span className="text-gray-600">disponível 24h para ser seu </span>
            <span className="text-green-700 font-semibold">controle financeiro interativo</span>.
          </p>
        </div>

        {/* Badge Demonstração */}
        <div className="flex justify-center mb-12">
          <span className="bg-orange-400 text-white px-6 py-2 rounded-full text-lg">
            Demonstração
          </span>
        </div>

        {/* Passo 1 */}
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-4xl text-orange-400 font-bold">1.</span>
            <p className="text-xl">
              Digite o que <span className="text-green-700">comprou</span> e quanto{' '}
              <span className="text-green-700">custou</span>, por exemplo:{' '}
              <span className="font-semibold">"camisa 110"</span>.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6">
            <p className="text-gray-600 mb-4">
              Registre um gasto (real ou falso) para testar.
            </p>
            <p className="text-gray-500 text-sm italic mb-6">
              Não se preocupe com vírgulas, nem com "R$", escreva do seu jeito.
            </p>

            {!showDemo ? (
              <form onSubmit={handleSubmit} className="flex gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Exemplo: ifood 44"
                  className="flex-1 px-4 py-3 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <button
                  type="submit"
                  className="bg-green-600 text-white p-4 rounded-full hover:bg-green-700 transition-colors"
                >
                  <SendIcon size={20} />
                </button>
              </form>
            ) : (
              <div className="text-center">
                <Link
                  href={`/demonstracao?initialMessage=${encodeURIComponent(inputValue)}`}
                  className="inline-block bg-orange-400 hover:bg-orange-500 text-white font-semibold 
                           px-8 py-3 rounded-full text-lg transition-colors duration-200 
                           shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  Continuar para o Chat
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* Informação Adicional */}
        <div className="text-center text-gray-500 text-sm">
          <p>Este é apenas um exemplo de como o assistente funciona.</p>
          <p>No WhatsApp você poderá registrar qualquer tipo de despesa.</p>
        </div>
      </div>
    </div>
  );
} 