import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-white p-4 py-12">
      <div className="max-w-3xl mx-auto space-y-12">
        {/* Header text */}
        <p className="text-center text-gray-600 italic text-lg">
          Desenvolvido por especialistas em finanças pessoais e gerentes de investimentos.
        </p>

        {/* Main heading */}
        <div className="text-center space-y-8">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            <span>Economize </span>
            <span className="text-orange-400">+ de 300 Reais Em 30 Dias</span>
            <br />
            <span className="text-green-700">Sem Cortar Os "Luxos"</span>
            <br />
            <span className="text-green-700">E Apenas Com O Whatsapp.</span>
          </h1>

          {/* Subheading */}
          <div className="text-2xl space-y-2">
            <p>
              Não é <span className="text-orange-400 font-medium">app</span>, 
              nem <span className="text-orange-400 font-medium">planilha</span>, 
              nem <span className="text-orange-400 font-medium">Notion</span>,
            </p>
            <p className="text-green-700 font-semibold">
              é inteligência artificial de ponta.
            </p>
          </div>
        </div>

        {/* Grid of features */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Feature 1 */}
          <div className="bg-green-50/70 p-8 rounded-2xl shadow-sm">
            <h2 className="text-2xl font-bold text-green-700 mb-4">
              Para onde vai seu dinheiro?
            </h2>
            <p className="text-lg leading-relaxed">
              Você trabalha o mês inteiro, mas no final{' '}
              <span className="text-green-700 font-medium">nunca sabe onde foi parar tudo que ganhou.</span>
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-green-50/70 p-8 rounded-2xl shadow-sm">
            <h2 className="text-2xl font-bold text-green-700 mb-4">
              Sem planilhas ou apps
            </h2>
            <p className="text-lg leading-relaxed">
              São soluções complicadas que dão preguiça de usar.{' '}
              <span className="text-green-700 font-medium">Aqui você resolve tudo no Whatsapp.</span>
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-green-50/70 p-8 rounded-2xl shadow-sm">
            <h2 className="text-2xl font-bold text-green-700 mb-4">
              Perdido nas dívidas
            </h2>
            <p className="text-lg leading-relaxed">
              Não sabe quanto paga de parcela, quanto tempo falta, quem deve,{' '}
              <span className="text-green-700 font-medium">e não tem um plano para pagar.</span>
            </p>
          </div>

          {/* Feature 4 */}
          <div className="bg-green-50/70 p-8 rounded-2xl shadow-sm">
            <h2 className="text-2xl font-bold text-green-700 mb-4">
              Pagando mais caro sempre
            </h2>
            <p className="text-lg leading-relaxed">
              Você compra por impulso ou não pesquisa antes,{' '}
              <span className="text-green-700 font-medium">gastando mais e deixando de economizar.</span>
            </p>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center pt-8">
          <Link href="/demonstracao">
            <button className="bg-orange-400 text-white px-16 py-6 rounded-full text-2xl font-semibold hover:bg-orange-500 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
              Continuar
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}
