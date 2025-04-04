'use client';

import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

export default function HomePage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <motion.div 
        className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-16 space-y-8 sm:space-y-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Controle seus gastos de forma <span className="text-green-600">inteligente</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Acompanhe suas despesas, receba insights personalizados e tome melhores decisões financeiras.
          </p>
        </div>

        {/* Cards de Funcionalidades */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8">
          <motion.div 
            className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-xl font-semibold text-green-600 mb-4">Para onde vai seu dinheiro?</h3>
            <p className="text-gray-600">Você trabalha o mês inteiro, mas no final</p>
            <p className="text-green-600 font-semibold">nunca sabe onde foi parar tudo que ganhou.</p>
          </motion.div>

          <motion.div 
            className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="text-xl font-semibold text-green-600 mb-4">Sem planilhas ou apps</h3>
            <p className="text-gray-600">São soluções complicadas que dão preguiça de usar.</p>
            <p className="text-green-600 font-semibold">Aqui você resolve tudo no WhatsApp.</p>
          </motion.div>

          <motion.div 
            className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h3 className="text-xl font-semibold text-green-600 mb-4">Perdido nas dívidas</h3>
            <p className="text-gray-600">Não sabe quanto paga de parcela, quanto tempo falta, quem deve,</p>
            <p className="text-green-600 font-semibold">e não tem um plano para pagar.</p>
          </motion.div>

          <motion.div 
            className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <h3 className="text-xl font-semibold text-green-600 mb-4">Pagando mais caro sempre</h3>
            <p className="text-gray-600">Você compra por impulso ou não pesquisa antes,</p>
            <p className="text-green-600 font-semibold">gastando mais e deixando de economizar.</p>
          </motion.div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          <button
            onClick={() => router.push('/demo')}
            className="w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white font-semibold 
                     px-8 py-4 rounded-full text-lg transition-all duration-200
                     shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            Ver Demonstração
          </button>
        </div>
      </motion.div>
    </div>
  );
}
