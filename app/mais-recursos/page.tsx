'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

interface Feature {
  icon: string;
  title: string;
  description: string;
  highlight?: string;
  colorClass: string;
}

const features: Feature[] = [
  {
    icon: "⚡",
    title: "Categorias Automáticas",
    description: "Você não precisa criar nada. A IA identifica e organiza todos os seus gastos sozinha.",
    colorClass: "bg-green-50/70"
  },
  {
    icon: "💡",
    title: "Sugestões Inteligentes",
    description: 'Acompanhe dicas como: "Você está gastando mais em lazer este mês. Fique de olho."',
    colorClass: "bg-green-50/70"
  },
  {
    icon: "🔍",
    title: "Análise De Compras",
    description: "Diga o que quer comprar e a IA analisa seu perfil e te diz: parcelar, esperar ou pagar à vista.",
    colorClass: "bg-green-50/70"
  },
  {
    icon: "🎯",
    title: "Pare De Só Economizar",
    description: "Participe dos nossos desafios com recompensas onde você pode ganhar até R$ 3.000 / mês.",
    colorClass: "bg-green-50/70"
  }
];

export default function MaisRecursos() {
  const [visibleFeatures, setVisibleFeatures] = useState<number[]>([]);
  const [showFinalMessage, setShowFinalMessage] = useState(false);
  const [showContinueButton, setShowContinueButton] = useState(false);
  const router = useRouter();

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex < features.length) {
        setVisibleFeatures(prev => [...prev, currentIndex]);
        currentIndex++;
      } else {
        clearInterval(interval);
        setTimeout(() => setShowFinalMessage(true), 1000);
        setTimeout(() => setShowContinueButton(true), 2000);
      }
    }, 800);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-3xl mx-auto pt-8 pb-16">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">E Mais Recursos:</h1>
          <p className="text-xl text-gray-600">
            Além do que já mostramos <span className="text-green-700 font-semibold">também contamos com:</span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`${feature.colorClass} p-6 rounded-2xl transform transition-all duration-500 ${
                visibleFeatures.includes(index)
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">{feature.icon}</span>
                <h3 className="text-xl font-bold text-gray-800">{feature.title}</h3>
              </div>
              <p className="text-gray-600">
                {feature.description}
                {feature.highlight && (
                  <span className="text-green-700 font-medium">{feature.highlight}</span>
                )}
              </p>
            </div>
          ))}
        </div>

        <div className={`text-center space-y-6 transition-all duration-500 ${
          showFinalMessage ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <p className="text-gray-600">e outros recursos...</p>
          
          <div className="max-w-2xl mx-auto">
            <p className="text-lg mb-4">
              Nosso diferencial é justamente não ser SÓ uma ferramenta que você vai usar uma vez e esquecer.
            </p>
            <p className="text-lg">
              Não só registrar gastos, mas sim{' '}
              <span className="text-green-700 font-semibold">
                te dar o PASSO A PASSO para você realizar seus objetivos.
              </span>
            </p>
          </div>
        </div>

        {showContinueButton && (
          <div className="mt-12 text-center animate-fade-in">
            <button
              onClick={() => router.push('/comece-agora')}
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