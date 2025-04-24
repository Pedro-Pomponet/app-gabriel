'use client';

import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

declare global {
  interface Window {
    fbq: any;
  }
}

export default function Home() {
  const router = useRouter();

  return (
    <main className="min-h-screen bg-gray-50 relative pt-[120px]">
      {/* Logo em posição absoluta */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2">
        <motion.img 
          src="/economiza-ai-logo.png" 
          alt="Economiza Aí Logo" 
          className="w-[150px] sm:w-[180px] md:w-[220px] h-auto"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        />
      </div>

      <div className="max-w-4xl mx-auto px-4 space-y-6">
        {/* Título principal */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center">
          Que tal finalmente organizar sua vida financeira?
        </h1>

        {/* Título e Subtítulo */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-medium mb-4 px-2 text-gray-700">
            Controle suas finanças direto pelo{' '}
            <span className="text-[#25d366] font-bold">WhatsApp</span>!
          </h2>
          <p className="text-gray-600 text-base sm:text-lg px-2 max-w-2xl mx-auto">
            Simplifique suas contas, economize dinheiro e prospere sem precisar abrir planilhas.
          </p>
        </div>

        {/* Grid de Cards */}
        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {/* Card 1 */}
          <div className="bg-white rounded-xl p-4 sm:p-6 shadow-sm">
            <div className="flex items-start -mt-1">
              <span className="text-xl sm:text-2xl flex-shrink-0 -mt-1 mr-1">🤔</span>
              <div className="-mt-1">
                <h3 className="font-bold text-base sm:text-lg leading-[1] mb-1">"Cadê meu dinheiro?"</h3>
                <p className="text-gray-600 text-sm sm:text-base">
                  Você fala o mês inteiro e no fim... cadê o salário? Descubra exatamente pra onde seu dinheiro tá indo.
                </p>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-xl p-4 sm:p-6 shadow-sm">
            <div className="flex items-start">
              <span className="text-xl sm:text-2xl flex-shrink-0 mr-1">📊</span>
              <div>
                <h3 className="font-bold text-base sm:text-lg leading-none mb-1">"Chega de planilhas complicadas"</h3>
                <p className="text-gray-600 text-sm sm:text-base">
                  Planilhas, apps, mil abas abertas... ninguém merece. Aqui, você resolve tudo com uma mensagem no WhatsApp.
                </p>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-xl p-4 sm:p-6 shadow-sm">
            <div className="flex items-start">
              <span className="text-xl sm:text-2xl flex-shrink-0 mr-1">💸</span>
              <div>
                <h3 className="font-bold text-base sm:text-lg leading-none mb-1">"Afogado nas dívidas"</h3>
                <p className="text-gray-600 text-sm sm:text-base">
                  Não sabe quem tá devendo, quanto falta ou como sair dessa? A gente te ajuda a organizar as parcelas e montar um plano.
                </p>
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-white rounded-xl p-4 sm:p-6 shadow-sm">
            <div className="flex items-start">
              <span className="text-xl sm:text-2xl flex-shrink-0 mr-1">✏️</span>
              <div>
                <h3 className="font-bold text-base sm:text-lg leading-none mb-1">"Errei na anotação?"</h3>
                <p className="text-gray-600 text-sm sm:text-base">
                  Mandou um valor errado ou esqueceu de anotar? É só mandar uma mensagem e o bot corrige pra você.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Botões de Ação */}
        <div className="flex flex-col items-center gap-3 sm:gap-4">
          <button
            onClick={() => {
              window.fbq('track', 'ViewContent', {
                content_name: 'Demo',
                content_type: 'product_demo',
              });
              router.push('/demo');
            }}
            className="bg-[#25d366] hover:bg-[#1ea557] text-white text-xl sm:text-2xl font-medium px-8 sm:px-10 py-4 sm:py-5 rounded-full w-full sm:w-auto min-w-[320px] transition-colors shadow-lg"
          >
            Ver Demonstração
          </button>

          <button
            onClick={() => {
              window.fbq('track', 'InitiateCheckout', {
                value: 14.90,
                currency: 'BRL',
              });
              window.location.href = 'https://economizai-delta.vercel.app/pagamento';
            }}
            className="bg-[#25d366] hover:bg-[#1ea557] text-white text-base sm:text-lg font-medium px-6 py-3 rounded-full w-fit transition-colors shadow-md"
          >
            Assinar por 14,90/mês
          </button>
        </div>
      </div>
    </main>
  );
}
