import React, { useState } from 'react';
import llama from '../../assets/llama.jpg'; // Avatar da LLaMA

function Sidebar() {
  // Estado para controlar se o menu está retraído ou expandido. 
  // O menu começa retraído por padrão (true).
  const [isMenuCollapsed, setIsMenuCollapsed] = useState(true);

  return (
    // Contêiner principal do menu lateral. Aplica classes do Bootstrap para layout flex, cores e padding.
    // Usa `isMenuCollapsed` para alternar entre duas classes CSS e ajusta a largura dinamicamente.
    <div
      className={`bg-dark text-white d-flex flex-column align-items-center p-2 ${isMenuCollapsed ? 'collapsed-menu' : 'expanded-menu'}`}
      style={{ transition: 'width 0.3s', width: isMenuCollapsed ? '60px' : '250px', height: '100vh' }} // Transição suave para a largura, e altura ajustada para 100% da viewport.
    >
      {/* Avatar da LLaMA e toggle para expandir/retrair o menu */}
      <div
        className="mb-3 text-center" // Adiciona margem inferior e centraliza o conteúdo.
        style={{ cursor: 'pointer' }} // Aplica o cursor de "mão" para indicar interatividade.
        title="Clique para expandir/retrair o menu" // Texto que aparece ao passar o mouse sobre o avatar.
        onClick={() => setIsMenuCollapsed(!isMenuCollapsed)} // Alterna o estado do menu entre expandido e retraído ao clicar.
      >
        <img
          src={llama} // Fonte da imagem do avatar.
          alt="LLaMA Avatar" // Texto alternativo para acessibilidade.
          style={{
            width: isMenuCollapsed ? '40px' : '50px', // Ajusta o tamanho da imagem de acordo com o estado do menu.
            height: isMenuCollapsed ? '40px' : '50px',
            borderRadius: '50%' // Mantém a imagem redonda.
          }}
        />
      </div>

      {/* Lista de Links do Menu */}
      {/* Renderiza a lista de links somente quando o menu está expandido */}
      {!isMenuCollapsed && (
        <ul className="list-group w-100"> {/* Lista de grupo usando Bootstrap com largura total */}
          {/* Cada item da lista é um link com fundo escuro e texto branco */}
          <li className="list-group-item bg-dark text-white">Link 1</li>
          <li className="list-group-item bg-dark text-white">Link 2</li>
          <li className="list-group-item bg-dark text-white">Link 3</li>
        </ul>
      )}
    </div>
  );
}

export default Sidebar;
