import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend("re_fmy8VrHE_F1DFZUwYadadqmVLFHCT1SxJ");

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { nome, email, whatsapp, tipoSolicitacao, valor } = body;

    // Formatar valor para exibição
    const valorNumerico = parseInt(valor || "0", 10);
    const valorFormatado = (valorNumerico / 100).toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });

    const emailContent = `
      Nova simulação de consórcio recebida:
      
      Nome: ${nome}
      E-mail: ${email}
      WhatsApp: ${whatsapp}
      Tipo de Solicitação: ${tipoSolicitacao}
      Valor: ${valorFormatado}
    `;

    const data = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "agnaldo.tomsic@primoracapital.com.br",
      subject: "Nova Simulação de Consórcio",
      text: emailContent,
    });

    return NextResponse.json({ success: true, data }, { status: 200 });
  } catch (error) {
    console.error("Erro ao enviar email:", error);
    return NextResponse.json(
      { success: false, error: "Erro ao enviar email" },
      { status: 500 }
    );
  }
}

