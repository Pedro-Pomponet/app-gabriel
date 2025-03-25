import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { message } = body;

    // Aqui você implementaria a lógica de processamento da mensagem
    // Por exemplo, integração com um serviço de IA ou WhatsApp

    const response = {
      success: true,
      reply: `Registrado: ${message}`,
    };

    return NextResponse.json(response);
  } catch (error) {
    return NextResponse.json(
      { error: 'Erro ao processar mensagem' },
      { status: 500 }
    );
  }
} 