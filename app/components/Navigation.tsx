'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-3xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-green-700 font-semibold text-lg">
            Assistente Financeiro
          </Link>
          
          <div className="flex gap-4">
            <Link 
              href="/demonstracao"
              className={`px-3 py-2 rounded-md ${
                pathname === '/demonstracao' 
                  ? 'bg-green-50 text-green-700' 
                  : 'text-gray-600 hover:text-green-700'
              }`}
            >
              Demonstração
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
} 