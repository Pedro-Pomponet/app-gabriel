'use client';

import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

export default function PassosFinalPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-8">
      <motion.div 
        className="max-w-3xl mx-auto p-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        {/* Passo 3 */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <div className="flex items-baseline gap-2 mb-6">
            <span className="text-4xl text-orange-400 font-bold">3.</span>
            <div className="space-y-2">
              <p className="text-xl">
                Defina <span className="text-green-600">lembretes</span> para pagar contas e 
                não esqueça de nada <span className="text-gray-500">(para uma conta única, ou frequente)</span>.
              </p>
            </div>
          </div>

          <div className="bg-gray-50 rounded-xl p-4 space-y-4">
            <div className="reminder-card">
              <div className="reminder-header">
                <span>📝 Lembrete adicionado</span>
              </div>
              <div className="reminder-title">Boleto do carro</div>
              <div className="reminder-details">
                <div>Data: 12</div>
                <div>Frequência: Mensal</div>
              </div>
            </div>

            <div className="flex gap-2 items-center text-sm bg-gray-900 text-white p-3 rounded-lg">
              <span>💡 Lembrete: Boleto Carro</span>
            </div>
            <div className="flex justify-end">
              <div className="bg-green-600 text-white px-4 py-2 rounded-full text-sm">
                paguei já ✅
              </div>
            </div>
            <div className="bg-gray-900 text-white p-3 rounded-lg text-sm">
              Te lembro de novo mês que vem ✅
            </div>
          </div>
        </div>

        {/* Passo 4 */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <div className="flex items-baseline gap-2 mb-6">
            <span className="text-4xl text-orange-400 font-bold">4.</span>
            <div className="space-y-2">
              <p className="text-xl">
                E seja <span className="text-green-600">lembrado</span> com antecedência.
              </p>
            </div>
          </div>

          <div className="bg-gray-50 rounded-xl p-4 space-y-4">
            <div className="flex gap-2 items-center text-sm bg-gray-900 text-white p-3 rounded-lg">
              <span>🔔 Lembrete: Boleto Carro vence amanhã</span>
            </div>
            <div className="flex justify-end">
              <div className="bg-green-600 text-white px-4 py-2 rounded-full text-sm">
                paguei já ✅
              </div>
            </div>
            <div className="bg-gray-900 text-white p-3 rounded-lg text-sm">
              Ótimo! Lembrete marcado como pago
            </div>
          </div>
        </div>

        {/* Passo 5 */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="flex items-baseline gap-2 mb-6">
            <span className="text-4xl text-orange-400 font-bold">5.</span>
            <div className="space-y-2">
              <p className="text-xl">
                Defina <span className="text-green-600">limites</span> de gastos por categoria. 
                <span className="text-gray-500"> Controle quanto quer gastar.</span>
              </p>
            </div>
          </div>

          <div className="bg-gray-50 rounded-xl p-4">
            <div className="limits-card">
              <div className="limits-title">Limites definidos</div>
              <div className="limits-subtitle">Relatório dia {new Date().toLocaleDateString()}</div>
              
              <div className="limits-list">
                <div className="limit-item">
                  <div className="limit-name">Lazer</div>
                  <div className="limit-bar">
                    <div className="limit-progress" style={{width: '60%'}}></div>
                  </div>
                  <div className="limit-value">60%</div>
                </div>
                
                <div className="limit-item">
                  <div className="limit-name">Delivery</div>
                  <div className="limit-bar">
                    <div className="limit-progress" style={{width: '84%'}}></div>
                  </div>
                  <div className="limit-value">84%</div>
                </div>

                <div className="limit-item">
                  <div className="limit-name">Compras</div>
                  <div className="limit-bar">
                    <div className="limit-progress" style={{width: '12%'}}></div>
                  </div>
                  <div className="limit-value">12%</div>
                </div>

                <div className="limit-item">
                  <div className="limit-name">Transporte</div>
                  <div className="limit-bar">
                    <div className="limit-progress" style={{width: '34%'}}></div>
                  </div>
                  <div className="limit-value">34%</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Botão Continuar */}
        <div className="mt-8 text-center">
          <button 
            onClick={() => router.push('/demonstracao')}
            className="continue-button"
          >
            Continuar
          </button>
        </div>
      </motion.div>
    </div>
  );
} 