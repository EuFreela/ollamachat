import React from 'react';
import llama from '../../assets/llama.jpg'; // Certifique-se de que o caminho da imagem está correto

// Componente ChatIntro para exibir o título, criador e resumo
const ChatIntro: React.FC = () => {
  return (
    <div className="text-center">
      {/* Imagem redonda */}
      <img 
        src={llama} 
        alt="Avatar" 
        style={{ width: '150px', height: '150px', borderRadius: '50%' }}
      />
      <h1 className="mt-3">Ollama Chat</h1>
      <p className="text-muted">Por Lameck Fernandes</p>
      <p className="mt-2">
        Ollama Chat é um assistente de IA que utiliza o modelo LLaMA para responder perguntas e ajudar com tarefas automatizadas. Converse com o bot para obter respostas rápidas e inteligentes.
      </p>
    </div>
  );
};

export default ChatIntro;
