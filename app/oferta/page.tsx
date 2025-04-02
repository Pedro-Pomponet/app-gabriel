'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function Oferta() {
  const [showContent, setShowContent] = useState(false);
  const [showPrice, setShowPrice] = useState(false);
  const [showTestimonial, setShowTestimonial] = useState(false);
  const [timeLeft, setTimeLeft] = useState('14:15');
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => setShowContent(true), 500);
    setTimeout(() => setShowPrice(true), 2500);
    setTimeout(() => setShowTestimonial(true), 3500);
  }, []);

  const chartData = {
    labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
    datasets: [
      {
        label: 'Projeção de Economia',
        data: [50, 100, 500, 2000, 5000, 7492],
        borderColor: '#22c55e',
        backgroundColor: 'rgba(34, 197, 94, 0.1)',
        tension: 0.4,
        fill: true,
      }
    ]
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: false
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: (value: any) => `R$ ${value}`
        }
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-3xl mx-auto pt-8 pb-16 space-y-12">
        <div className={`text-center transition-all duration-700 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-3xl font-bold text-green-800 mb-4">Oferta Por Tempo Limitado</h1>
          <p className="text-xl text-gray-700">
            Essa é a sua chance de cumprir o que você tem prometido a tanto tempo.
          </p>
        </div>

        <div className={`bg-white rounded-2xl shadow-lg p-6 transition-all duration-700 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex justify-between items-center mb-4">
            <span className="text-gray-600">Você hoje</span>
            <span className="text-gray-600">Daqui 6 meses</span>
          </div>
          <div className="h-[300px]">
            <Line data={chartData} options={chartOptions} />
          </div>
          <div className="flex justify-between items-center mt-4">
            <span className="text-xl font-semibold">R$ 50</span>
            <span className="text-xl font-semibold text-green-600">R$ 7492</span>
          </div>
        </div>

        <div className={`text-center space-y-6 transition-all duration-700 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-lg">
            Imagine você daqui a 1 ano, <span className="text-green-700 font-semibold">com dinheiro sobrando</span> para 
            viajar ou para completar pra trocar de carro, 
            <span className="text-green-700 font-semibold"> tudo por causa da decisão que você tomou hoje.</span>
          </p>

          <div className="max-w-2xl mx-auto">
            <p className="text-gray-600">
              Todos os nossos recursos foram desenvolvidos em conjunto por{' '}
              <span className="text-green-700">programadores</span> e{' '}
              <span className="text-green-700">analistas</span> financeiros.
            </p>
            <p className="text-xl font-semibold mt-4">E tudo isso tem um custo.</p>
          </div>
        </div>

        {showPrice && (
          <div className="space-y-6 animate-fade-in">
            <p className="text-center text-lg">
              Poderíamos cobrar de você o justo, R$ 400 reais por ANO, pela economia que vamos te trazer.
            </p>
            <p className="text-center text-xl font-bold text-green-800">
              Mas não, não faria sentido cobrarmos tanto de você sendo que o que queremos é a sua LIBERDADE FINANCEIRA.
            </p>
            <p className="text-center text-lg">
              Sendo assim, por tempo limitado vamos liberar para você nossa{' '}
              <span className="text-green-700 font-semibold">inteligência artificial</span> por apenas:
            </p>

            <div className="text-center">
              <div className="inline-block bg-orange-100 rounded-full px-6 py-2">
                <span className="text-orange-600">
                  Oferta por tempo limitado: {timeLeft}
                </span>
              </div>
            </div>
          </div>
        )}

        {showTestimonial && (
          <div className="animate-fade-in">
            <div className="bg-white rounded-2xl shadow-lg p-4 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
                <div>
                  <p className="font-semibold">João Guilherme</p>
                  <p className="text-gray-500 text-sm">@joaoguilherme</p>
                </div>
              </div>
              <p className="mt-3 text-gray-600">
                Consegui até economizar mais depois de usar essa IA kkkk Mt bom
              </p>
            </div>

            <div className="bg-black text-white rounded-2xl p-6 text-center">
              <div className="flex justify-between items-center mb-4">
                <div>
                  <span className="text-2xl font-bold">Plano ANUAL</span>
                  <span className="ml-3 bg-orange-400 text-white px-3 py-1 rounded-full text-sm">
                    PROMOÇÃO 50% OFF
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-2xl font-bold">12x de R$ 5,70</span>
                  <p className="text-sm text-gray-400">ou 57 à vista</p>
                </div>
              </div>
            </div>

            <p className="text-center text-gray-500 mt-2">
              (equivalente à menos de R$ 0,16 por dia)
            </p>

            <div className="mt-8 space-y-4">
              <button
                onClick={() => router.push('/checkout')}
                className="w-full bg-orange-400 hover:bg-orange-500 text-white font-semibold 
                         py-4 rounded-full text-xl transition-colors duration-200 
                         shadow-lg hover:shadow-xl"
              >
                Quero assinar
              </button>

              <p className="text-center text-gray-600 text-sm">
                Após assinar você receberá o contato da IA para começar a usar.
              </p>

              <div className="flex items-center justify-center gap-2 text-gray-500">
                <span>🔒</span>
                <span>Pagamento Seguro</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 