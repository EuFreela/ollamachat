import { Message } from "../interface/Message"; // Importa a interface Message que define a estrutura de uma mensagem, incluindo o remetente e o texto
  
// Tipagem da resposta da API do Ollama
interface OllamaResponse {
  success: boolean;  // Indica se a requisição à API foi bem-sucedida
  response?: string; // Armazena a resposta do bot caso o sucesso seja true
  error?: string;    // Armazena a mensagem de erro caso o sucesso seja false
}

// Serviço para comunicação com a API do Ollama
export const ollamaService = async (
  conversationId: string,  // ID da conversa, utilizado para identificar o contexto da conversa
  messages: Message[]      // Array de mensagens contendo o remetente (user ou bot) e o texto da mensagem
): Promise<OllamaResponse> => {  // A função retorna uma Promise que resolve para um objeto do tipo OllamaResponse
  const url = 'http://localhost:11434/api/generate'; // URL local da API do Ollama que processa as mensagens

  // Cria o prompt para o modelo, combinando as mensagens anteriores e a nova pergunta do usuário
  const prompt = `Você está continuando a conversa. Contexto anterior: ${messages.map(msg => msg.text).join(' ')}. Nova pergunta: ${messages[messages.length - 1].text}`;

  // Define o corpo da requisição que será enviado para a API
  const payload = {
    model: 'llama3.2',   // Define o modelo de IA a ser utilizado (LLaMA 3.2)
    prompt: prompt,      // O prompt gerado a partir das mensagens da conversa
    stream: false,       // Indica se a resposta deve ser transmitida em tempo real ou de uma só vez
    temperature: 0.7,    // Controla a aleatoriedade das respostas (quanto maior, mais criativas as respostas)
    max_tokens: 150      // Limita o número de tokens (palavras/frases) que o modelo pode gerar na resposta
  };

  try {
    // Faz a requisição POST à API do Ollama com o payload
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', // Define o formato dos dados como JSON
      },
      body: JSON.stringify(payload),  // Converte o payload para uma string JSON antes de enviar
    });

    // Verifica se a resposta da API foi bem-sucedida (status 200)
    if (res.ok) {
      const data = await res.json();  // Converte a resposta da API de volta para um objeto JavaScript
      return { success: true, response: data.response || 'Nenhuma resposta encontrada.' }; // Retorna a resposta do bot
    } else {
      return { success: false, error: `Erro na API: ${res.status}` }; // Retorna um erro caso o status não seja 200
    }
  } catch (error) {
    // Captura erros de rede ou erros ocorridos durante a requisição
    return { success: false, error: `Erro ao se comunicar com a API: ${error.message}` }; // Retorna o erro
  }
};
