'use client';

import { motion, Variants } from 'framer-motion';
import { useRouter } from 'next/navigation';

export default function HomePage() {
  const router = useRouter();

  const fadeInUp: Variants = {
    initial: { y: 20, opacity: 0 },
    animate: { y: 0, opacity: 1 }
  };

  const staggerContainer: Variants = {
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <motion.div 
        className="max-w-4xl mx-auto px-4 py-16 space-y-12"
        initial="initial"
        animate="animate"
        variants={staggerContainer}
      >
        {/* Cabeçalho */}
        <motion.div 
          className="text-center space-y-4" 
          variants={fadeInUp}
          transition={{ duration: 0.5 }}
        >
          <p className="text-gray-600 italic">Sem planilhas complicadas ou gerentes de investimentos.</p>
          <h1 className="text-4xl md:text-5xl font-bold">
            <span className="text-green-600">Economize </span>
            <span className="text-orange-400">+ de 300 Reais </span>
            <span className="text-green-600">Em 30 Dias</span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-green-600 font-semibold">
            Sem Cortar Os "Luxos" E Apenas Com O Whatsapp.
          </h2>
          <p className="text-lg text-gray-700 mt-6">
            Não é app, nem planilha, nem Notion, 
            <span className="text-green-600 font-semibold"> é inteligência artificial de ponta.</span>
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div 
          className="grid md:grid-cols-2 gap-8"
          variants={staggerContainer}
        >
          <motion.div 
            className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
            variants={fadeInUp}
          >
            <h3 className="text-xl font-semibold text-green-600 mb-4">Para onde vai seu dinheiro?</h3>
            <p className="text-gray-600">Você trabalha o mês inteiro, mas no final</p>
            <p className="text-green-600 font-semibold">nunca sabe onde foi parar tudo que ganhou.</p>
          </motion.div>

          <motion.div 
            className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
            variants={fadeInUp}
          >
            <h3 className="text-xl font-semibold text-green-600 mb-4">Sem planilhas ou apps</h3>
            <p className="text-gray-600">São soluções complicadas que dão preguiça de usar.</p>
            <p className="text-green-600 font-semibold">Aqui você resolve tudo no WhatsApp.</p>
          </motion.div>

          <motion.div 
            className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
            variants={fadeInUp}
          >
            <h3 className="text-xl font-semibold text-green-600 mb-4">Perdido nas dívidas</h3>
            <p className="text-gray-600">Não sabe quanto paga de parcela, quanto tempo falta, quem deve,</p>
            <p className="text-green-600 font-semibold">e não tem um plano para pagar.</p>
          </motion.div>

          <motion.div 
            className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
            variants={fadeInUp}
          >
            <h3 className="text-xl font-semibold text-green-600 mb-4">Pagando mais caro sempre</h3>
            <p className="text-gray-600">Você compra por impulso ou não pesquisa antes,</p>
            <p className="text-green-600 font-semibold">gastando mais e deixando de economizar.</p>
          </motion.div>
        </motion.div>

        {/* Botão de Ação */}
        <motion.div 
          className="text-center"
          variants={fadeInUp}
        >
          <button
            onClick={() => router.push('/passo-1')}
            className="bg-green-600 hover:bg-green-700 text-white text-xl font-semibold px-12 py-4 rounded-full
                     shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
          >
            Começar Agora
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
}
