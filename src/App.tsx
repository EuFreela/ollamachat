import React, { useState, useEffect, useRef } from 'react';
import Sidebar from './components/layout/Sidebar'; // Importa o componente Sidebar
import Footer from './components/layout/Footer';   // Importa o componente Footer
import { ollamaService } from './service/ollamaService'; // Importe o serviço
import { Message } from './interface/Message';
import ChatIntro from './components/layout/ChatIntro'; // Importa o componente ChatIntro

function App() {
  const [messages, setMessages] = useState<Message[]>([]); // Estado para armazenar as mensagens
  const [loading, setLoading] = useState(false);           // Estado de carregamento
  const lastMessageRef = useRef<HTMLDivElement | null>(null); // Referência à última mensagem

  // Função chamada pelo Footer quando uma nova mensagem é enviada
  const handleMessageSend = async (newMessage: Message) => {
    setMessages((prevMessages) => [...prevMessages, newMessage]); // Adiciona a nova mensagem ao estado

    if (newMessage.sender === 'user') {
      setLoading(true); // Inicia o carregamento enquanto espera a resposta do bot

      // Chama o serviço Ollama para obter a resposta
      const response = await ollamaService('1', [newMessage]);

      setLoading(false); // Termina o estado de carregamento

      if (response.success) {
        setMessages((prevMessages) => [
          ...prevMessages, 
          { sender: 'bot', text: response.response }
        ]); // Adiciona a resposta do bot
      } else {
        setMessages((prevMessages) => [
          ...prevMessages, 
          { sender: 'bot', text: 'Erro ao obter resposta.' }
        ]); // Adiciona mensagem de erro
      }
    }
  };

  // Efeito para rolar automaticamente até a última mensagem sempre que o array de mensagens for atualizado
  useEffect(() => {
    if (lastMessageRef.current) {
      lastMessageRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  return (
    <div className="d-flex vh-100">
      <Sidebar />

      {/* Conteúdo Principal */}
      <div className="flex-grow-1 bg-light d-flex flex-column justify-content-between">
        <div className="p-3 flex-grow-1 overflow-auto">
          {/* Exibe sempre o ChatIntro no topo */}
          <ChatIntro />

          {/* Exibindo as mensagens abaixo do ChatIntro */}
          <div className="chat-content mt-4">
            {messages.map((message, index) => (
              <div
                key={index} // Chave única para cada mensagem renderizada
                ref={index === messages.length - 1 ? lastMessageRef : null} // A última mensagem recebe a referência
                className={`d-flex ${message.sender === 'user' ? 'justify-content-end' : 'justify-content-start'} mb-2`}
              >
                {/* Estiliza as mensagens de acordo com o remetente */}
                <div
                  className={`p-3 rounded ${message.sender === 'user' ? 'bg-primary text-white' : 'bg-secondary text-white'}`}
                  style={{ maxWidth: '60%' }} // Limita a largura da mensagem
                >
                  {message.text} {/* Exibe o conteúdo da mensagem */}
                </div>
              </div>
            ))}

            {/* Exibe o spinner de carregamento enquanto espera a resposta do bot */}
            {loading && (
              <div className="d-flex justify-content-start mb-2">
                <div className="spinner-border text-primary" role="status">
                  <span className="visually-hidden">Carregando...</span>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Footer fixado na parte inferior */}
        <Footer 
          onMessageSend={handleMessageSend} // Passa a função de envio de mensagens para o Footer
          conversationId="1" // ID fixo da conversa (pode ser dinâmico dependendo da lógica)
          loading={loading}  // Passa o estado de carregamento para o Footer, que desabilita o input enquanto o bot responde
        />
      </div>
    </div>
  );
}

export default App;
