'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-3xl mx-auto px-3 sm:px-4 py-2 sm:py-3">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-green-700 font-semibold text-base sm:text-lg">
            Assistente Financeiro
          </Link>
          
          <div className="flex gap-2 sm:gap-4">
            <Link 
              href="/demo"
              className={`px-2 sm:px-3 py-1 sm:py-2 rounded-md text-sm sm:text-base ${
                pathname === '/demo' 
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