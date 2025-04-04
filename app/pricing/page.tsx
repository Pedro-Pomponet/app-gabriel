'use client';

import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Image from 'next/image';

export default function PricingPage() {
  const router = useRouter();
  const [timeLeft, setTimeLeft] = useState('13:43');

  return (
    <div className="bg-gradient-to-b from-[#25d366]/10 to-white py-12 px-4">
      <motion.div 
        className="max-w-3xl mx-auto space-y-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        {/* Cabeçalho */}
        <div className="text-center space-y-6">
          {/* Logo e Nome */}
          <div className="flex flex-col items-center gap-4">
            <Image
              src="/icons/economiza-ai-logo.png"
              alt="Economiza Aí"
              width={120}
              height={120}
              className="animate-float"
            />
            <h2 className="text-[#1b4638] text-3xl font-bold">
              Economiza Aí
            </h2>
          </div>

          <h1 className="text-4xl font-bold text-[#1b4638]">
            Oferta Por Tempo Limitado
          </h1>
          <p className="text-lg text-gray-700">
            Essa é a sua <span className="text-[#128c7e]">chance</span> de cumprir o que você tem{' '}
            <span className="text-[#128c7e]">prometido</span> a tanto tempo.
          </p>
        </div>

        {/* Gráfico */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <div className="flex justify-between items-center mb-8">
            <div>
              <p className="text-gray-600">Você hoje</p>
              <p className="text-2xl font-bold text-[#128c7e]">R$ 50</p>
            </div>
            <div className="text-right">
              <p className="text-gray-600">Daqui 6 meses</p>
              <p className="text-2xl font-bold text-[#ff9f43]">R$ 7492</p>
            </div>
          </div>
          
          <div className="relative h-[200px] w-full">
            <svg className="w-full h-full">
              <path
                d="M0,180 C100,160 200,100 600,20"
                fill="none"
                stroke="#25d366"
                strokeWidth="3"
              />
            </svg>
            <div className="absolute bottom-0 left-0 right-0 flex justify-between text-sm text-gray-500">
              <span>Jan</span>
              <span>Fev</span>
              <span>Mar</span>
              <span>Abr</span>
              <span>Mai</span>
              <span>Jun</span>
            </div>
          </div>
        </div>

        {/* Cards de Texto Motivacional */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Card 1 - Visão de Futuro */}
          <motion.div 
            className="bg-white rounded-2xl p-6 shadow-lg border-l-4 border-[#25d366] col-span-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <p className="text-lg">
              <span className="text-[#1b4638] font-medium">Imagine você daqui a 1 ano</span>,{' '}
              <span className="text-[#128c7e] font-medium">com dinheiro sobrando</span>{' '}
              para viajar ou para completar pra trocar de carro,{' '}
              <span className="font-medium">tudo por causa da decisão que você tomou hoje.</span>
            </p>
          </motion.div>

          {/* Card 2 - Desenvolvimento */}
          <motion.div 
            className="bg-white rounded-2xl p-6 shadow-lg border-l-4 border-[#25d366]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <p className="text-gray-700">
              Todos os nossos <span className="text-[#128c7e] font-medium">recursos</span> foram desenvolvidos em conjunto por{' '}
              <span className="text-[#128c7e] font-medium">programadores</span> e{' '}
              <span className="text-[#128c7e] font-medium">analistas financeiros</span>.
            </p>
          </motion.div>

          {/* Card 3 - Custo */}
          <motion.div 
            className="bg-white rounded-2xl p-6 shadow-lg border-l-4 border-[#25d366]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="space-y-4">
              <p className="text-xl font-medium text-[#1b4638]">
                E tudo isso tem um custo.
              </p>
              <p className="text-lg">
                Poderíamos cobrar de você o justo,{' '}
                <span className="text-[#128c7e] font-medium">R$ 400 reais por ANO</span>,{' '}
                pela economia que vamos te trazer.
              </p>
            </div>
          </motion.div>

          {/* Card 4 - Proposta de Valor */}
          <motion.div 
            className="bg-white rounded-2xl p-6 shadow-lg border-l-4 border-[#ff9f43] col-span-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div className="space-y-4">
              <p className="text-lg font-medium text-[#1b4638]">
                Mas não, não faria sentido cobrarmos tanto de você sendo que o que queremos é a sua{' '}
                <span className="text-[#128c7e] font-semibold">LIBERDADE FINANCEIRA</span>.
              </p>
              <p className="text-lg">
                Sendo assim, por tempo limitado vamos liberar para você nossa{' '}
                <span className="text-[#128c7e] font-medium">inteligência artificial</span> por apenas:
              </p>
            </div>
          </motion.div>
        </div>

        {/* Timer */}
        <div className="bg-[#25d366] text-white py-3 px-6 rounded-full text-center mx-auto w-fit">
          <p className="flex items-center gap-2">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Oferta por tempo limitado: {timeLeft}
          </p>
        </div>

        {/* Depoimento */}
        <div className="bg-white rounded-xl p-6 shadow-md">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden">
              {/* Avatar placeholder */}
            </div>
            <div>
              <p className="font-medium">Neide</p>
              <p className="text-gray-500 text-sm">@neidesiva_amorim</p>
            </div>
          </div>
          <p className="mt-4">
            "Nunca me dei bem com planilhas ou blocos de nota pra organização!! O fato de eu conseguir ter controle total do meu dinheiro pelo whatsapp é incrível"
          </p>
        </div>

        {/* Plano */}
        <div className="bg-[#25d366] text-white rounded-2xl p-8 relative">
          <div className="bg-[#ff9f43] text-white px-4 py-1 rounded-full text-sm absolute -top-3 right-8">
            PROMOÇÃO 50% OFF
          </div>
          
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-2xl font-bold mb-2">Plano ANUAL</h2>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-bold">R$ 5</span>
                <span className="text-2xl">,70</span>
              </div>
              <p className="text-sm opacity-80">ou 57 à vista</p>
            </div>
            <div className="text-3xl font-bold">
              12x de
            </div>
          </div>
        </div>

        <p className="text-center text-gray-600">
          (equivalente à menos de R$ 0,16 por dia)
        </p>

        {/* Botão de Ação */}
        <button 
          onClick={() => router.push('/checkout')}
          className="w-full bg-[#25d366] hover:bg-[#128c7e] text-white font-bold py-4 rounded-full text-xl transition-colors"
        >
          Quero assinar
        </button>

        {/* Footer */}
        <div className="text-center space-y-4">
          <p className="text-gray-600">
            Após assinar você receberá o contato da IA para começar a usar.
          </p>
          <p className="flex items-center justify-center gap-2 text-gray-500">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            Pagamento Seguro
          </p>
        </div>
      </motion.div>
    </div>
  );
} 