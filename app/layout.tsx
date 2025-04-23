import type { Metadata } from "next";
import "./globals.css";
import FacebookPixel from './components/FacebookPixel';

export const metadata: Metadata = {
  title: "Assistente Financeiro",
  description: "Seu assistente financeiro pessoal",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        <FacebookPixel />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
