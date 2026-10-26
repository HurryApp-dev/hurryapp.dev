export interface DadosContato {
  origem: "calculadora" | "reuniao";
  name: string;
  email: string;
  whatsapp?: string;
  message: string;
  website: string;
}

export async function enviarContato(dados: DadosContato) {
  const resposta = await fetch("/api/contato", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(dados),
  });

  if (!resposta.ok) {
    throw new Error(`Envio do formulario falhou (${resposta.status})`);
  }
}
