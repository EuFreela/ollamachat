import React, { useState } from 'react';
import { AiOutlinePaperClip, AiOutlineSend } from "react-icons/ai";
import { Message } from '../../interface/Message';

interface FooterProps {
  onMessageSend: (newMessage: Message) => Promise<void>;  // Função para lidar com o envio da mensagem para o componente pai
  conversationId: string | null;                         // ID da conversa atual
  loading: boolean;                                      // Estado de carregamento vindo do App
}

const Footer: React.FC<FooterProps> = ({ onMessageSend, conversationId, loading }) => {
  const [input, setInput] = useState(''); // Estado para o campo de texto

  // Função para enviar a mensagem
  const handleSendMessage = async () => {
    if (!input.trim() || !conversationId) return;

    const newMessage: Message = {
      sender: 'user',
      text: input.trim(),
    };

    setInput(''); // Limpa o campo de texto
    await onMessageSend(newMessage); // Envia a mensagem para o componente pai
  };

  // Função para capturar a tecla Enter e enviar a mensagem
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage(); // Envia a mensagem ao pressionar a tecla Enter
    }
  };

  return (
    <div className="bg-white border-top p-3">
      <div className="input-group">
        <span className="input-group-text bg-transparent border-0">
          <AiOutlinePaperClip size={25} />
        </span>

        <input
          type="text"
          className="form-control border-0"
          placeholder="Digite sua mensagem..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyPress}
          aria-label="Digite sua mensagem..."
          disabled={loading} // Desabilita o campo de input enquanto está carregando
        />

        <span 
          className="input-group-text bg-transparent border-0" 
          onClick={handleSendMessage} 
          style={{ cursor: 'pointer' }}
        >
          <AiOutlineSend size={25} />
        </span>
      </div>
    </div>
  );
};

export default Footer;
