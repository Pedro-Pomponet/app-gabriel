'use client';

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { SendIcon } from '../components/Icons';

interface Step {
  number: string;
  title: string;
  description?: string;
  example: {
    userMessage?: string;
    botResponse?: string;
    isChat?: boolean;
    chart?: boolean;
  };
}

const steps: Step[] = [
  {
    number: "3",
    title: "Defina lembretes para pagar contas e não esqueça de nada",
    description: "(para uma conta única, ou frequente).",
    example: {
      userMessage: "Boleto do carro todo dia 12, R$ 2400",
      botResponse: "Lembrete adicionado\n🚨 Boleto do carro\nData: 12\nFrequência: Mensal",
      isChat: true
    }
  },
  {
    number: "4",
    title: "E seja lembrado com antecedência.",
    example: {
      userMessage: "paguei já",
      botResponse: "Te lembro de novo mês que vem ✅",
      isChat: true
    }
  },
  {
    number: "5",
    title: "Defina limites de gastos por categoria.",
    description: "Controle quanto quer gastar.",
    example: {
      userMessage: "como estão meus limites de gastos?",
      botResponse: "",
      chart: true
    }
  }
];

export default function ProximoPasso() {
  const [visibleSteps, setVisibleSteps] = useState<number[]>([]);
  const [showContinueButton, setShowContinueButton] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const initialMessage = searchParams.get('initialMessage');

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex < steps.length) {
        setVisibleSteps(prev => [...prev, currentIndex]);
        currentIndex++;
      } else {
        clearInterval(interval);
        setShowContinueButton(true);
      }
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-3xl mx-auto pt-8 pb-16 space-y-12">
        {steps.map((step, index) => (
          <div
            key={step.number}
            className={`transition-all duration-700 transform ${
              visibleSteps.includes(index)
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="flex items-start gap-4 mb-6">
              <span className="text-4xl text-orange-400 font-bold">{step.number}.</span>
              <div>
                <h2 className="text-xl font-semibold text-gray-800">{step.title}</h2>
                {step.description && (
                  <p className="text-gray-600 italic">{step.description}</p>
                )}
              </div>
            </div>

            {step.example.isChat && (
              <div className="bg-white rounded-2xl shadow-lg p-6 space-y-4">
                {step.example.userMessage && (
                  <div className="flex justify-end">
                    <div className="bg-green-600 text-white px-4 py-2 rounded-2xl max-w-[80%]">
                      <p>{step.example.userMessage}</p>
                      <p className="text-xs mt-1 text-green-100">12:03</p>
                    </div>
                  </div>
                )}
                {step.example.botResponse && (
                  <div className="flex justify-start">
                    <div className="bg-gray-100 text-gray-800 px-4 py-2 rounded-2xl max-w-[80%]">
                      <p className="whitespace-pre-line">{step.example.botResponse}</p>
                      <p className="text-xs mt-1 text-gray-500">12:03</p>
                    </div>
                  </div>
                )}
              </div>
            )}

            {step.example.chart && (
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <div className="space-y-4">
                  <div className="h-48 bg-gray-50 rounded-lg p-4">
                    <h3 className="font-semibold mb-2">Limite definidos</h3>
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <div className="w-24 text-sm">Lazer</div>
                        <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div className="h-full bg-green-500 rounded-full" style={{width: '60%'}}></div>
                        </div>
                        <div className="text-sm">60%</div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-24 text-sm">Delivery</div>
                        <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div className="h-full bg-green-500 rounded-full" style={{width: '84%'}}></div>
                        </div>
                        <div className="text-sm">84%</div>
                      </div>
                      {/* Adicione mais barras de progresso conforme necessário */}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}

        {showContinueButton && (
          <div className="text-center animate-fade-in">
            <button
              onClick={() => router.push('/final')}
              className="bg-orange-400 hover:bg-orange-500 text-white font-semibold 
                       px-12 py-4 rounded-full text-xl transition-colors duration-200 
                       shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Continuar
            </button>
          </div>
        )}
      </div>
    </div>
  );
} 