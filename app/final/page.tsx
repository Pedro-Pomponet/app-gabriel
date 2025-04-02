'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

interface Step {
  number: string;
  title: string;
  description: string;
  example: {
    userMessage?: string;
    botResponse?: string[];
    chart?: boolean;
    goalChart?: boolean;
    promotion?: boolean;
  };
}

const steps: Step[] = [
  {
    number: "6",
    title: "Planejamento de Metas",
    description: "Defina uma meta e te levamos até lá. Ele planeja, calcula e avisa o que você precisa fazer.",
    example: {
      userMessage: "Cria uma meta para viagem em setembro pro Chile, preciso de 10 mil",
      botResponse: ["Criei a meta e já registrei o valor que você guardou hoje."],
      goalChart: true
    }
  },
  {
    number: "7",
    title: "Alerta de Promoções",
    description: "Economize também nas compras, nossa IA te envia as melhores promoções que ela encontra.",
    example: {
      botResponse: [
        "🎁 Você demonstrou interesse em um Iphone 16 alguns dias atrás. Encontrei uma promoção:",
        "✨ Apple iPhone 16 (128 GB) – Ultramarino\n\npor R$ 5.599 no pix 🚨🚨\n💳 ou 10x de R$ 626,55\n\n💰 Use o cupom: APPLE400\n\n🔗 Compre aqui:"
      ],
      promotion: true
    }
  }
];

export default function Final() {
  const [visibleSteps, setVisibleSteps] = useState<number[]>([]);
  const [showContinueButton, setShowContinueButton] = useState(false);
  const router = useRouter();

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
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-3xl mx-auto pt-8 pb-16 space-y-16">
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
                <p className="text-gray-600">{step.description}</p>
              </div>
            </div>

            <div className="space-y-4">
              {step.example.userMessage && (
                <div className="flex justify-end">
                  <div className="bg-green-600 text-white px-4 py-2 rounded-2xl max-w-[80%]">
                    <p>{step.example.userMessage}</p>
                    <p className="text-xs mt-1 text-green-100">12:15</p>
                  </div>
                </div>
              )}

              {step.example.botResponse?.map((response, idx) => (
                <div key={idx} className="flex justify-start">
                  <div className="bg-gray-100 text-gray-800 px-4 py-2 rounded-2xl max-w-[80%]">
                    <p className="whitespace-pre-line">{response}</p>
                    <p className="text-xs mt-1 text-gray-500">12:15</p>
                  </div>
                </div>
              ))}

              {step.example.goalChart && (
                <div className="bg-white rounded-2xl shadow-lg p-6">
                  <div className="text-center space-y-4">
                    <div className="flex items-center justify-center gap-2">
                      <span className="text-red-500">🎯</span>
                      <h3 className="font-semibold">Nova Meta</h3>
                    </div>
                    <div className="relative w-32 h-32 mx-auto">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-2xl font-bold">20%</span>
                      </div>
                      <svg className="transform -rotate-90 w-32 h-32">
                        <circle
                          cx="64"
                          cy="64"
                          r="60"
                          fill="none"
                          stroke="#f3f4f6"
                          strokeWidth="8"
                        />
                        <circle
                          cx="64"
                          cy="64"
                          r="60"
                          fill="none"
                          stroke="#f97316"
                          strokeWidth="8"
                          strokeDasharray="377"
                          strokeDashoffset="301.6"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold">Viagem Chile Setembro ↗</p>
                      <p className="text-lg">
                        <span className="text-green-600">R$ 2.000,00</span>
                        <span className="text-gray-400"> de R$ 10.000,00</span>
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {step.example.promotion && (
                <div className="bg-black text-white rounded-2xl shadow-lg p-6">
                  <div className="space-y-2">
                    <p className="text-green-400">💳 Compre aqui:</p>
                    <div className="bg-gray-800 rounded p-2 text-sm">
                      <p className="text-gray-400">Link da loja parceira</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}

        {showContinueButton && (
          <div className="text-center animate-fade-in">
            <button
              onClick={() => router.push('/comece-agora')}
              className="bg-orange-400 hover:bg-orange-500 text-white font-semibold 
                       px-12 py-4 rounded-full text-xl transition-colors duration-200 
                       shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Começar Agora
            </button>
          </div>
        )}
      </div>
    </div>
  );
} 