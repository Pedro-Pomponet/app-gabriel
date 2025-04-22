'use client';

import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function Home() {
  const router = useRouter();

  return (
    <main className="min-h-screen bg-[#f0f2f5] py-12 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Título e Subtítulo */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-2">
            Que tal finalmente organizar sua vida financeira?
          </h1>
          <h2 className="text-3xl font-bold mb-4">
            Controle suas finanças<br />
            direto pelo <span className="text-[#25d366]">WhatsApp</span>!
          </h2>
          <p className="text-gray-600 text-lg">
            Simplifique suas contas, economize dinheiro e prospere sem<br />
            precisar abrir planilhas.e direto do whatsapp
          </p>
        </div>

        {/* Grid de Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Card 1 */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex items-start gap-4">
              <span className="text-2xl">🤔</span>
              <div>
                <h3 className="font-bold text-lg mb-2">"Cadê meu dinheiro?"</h3>
                <p className="text-gray-600">
                  Você fala o mês inteiro e no fim... cadê o salário?<br />
                  Descubra exatamente pra onde seu dinheiro tá indo.
                </p>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex items-start gap-4">
              <span className="text-2xl">📊</span>
              <div>
                <h3 className="font-bold text-lg mb-2">"Chega de planilhas complicadas"</h3>
                <p className="text-gray-600">
                  Planilhas, apps, mil abas abertas... ninguém merece.<br />
                  Aqui, você resolve tudo com uma mensagem no WhatsApp.
                </p>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex items-start gap-4">
              <span className="text-2xl">💸</span>
              <div>
                <h3 className="font-bold text-lg mb-2">"Afogado nas dívidas"</h3>
                <p className="text-gray-600">
                  Não sabe quem tá devendo, quanto falta ou como sair dessa?<br />
                  A gente te ajuda a organizar as parcelas e montar um plano.
                </p>
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex items-start gap-4">
              <span className="text-2xl">✏️</span>
              <div>
                <h3 className="font-bold text-lg mb-2">"Errei na anotação?"</h3>
                <p className="text-gray-600">
                  Mandou um valor errado ou esqueceu de anotar?<br />
                  É só mandar uma mensagem e o bot corrige pra você.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
