# OllamaChat

![Avatar da LLaMA](https://i.postimg.cc/TwBLK55T/chat2.png)

**OllamaChat** é um assistente de IA interativo construído com React. Ele utiliza o modelo LLaMA para responder a perguntas e realizar tarefas automatizadas. Este projeto oferece uma interface de chat simples, onde o usuário pode conversar com o bot Ollama e obter respostas rápidas e inteligentes.

## Funcionalidades

- **Chat interativo:** Converse com o bot Ollama usando mensagens de texto.
- **Integração com o modelo LLaMA:** O bot usa o modelo de linguagem LLaMA para gerar respostas inteligentes.
- **Interface intuitiva:** O layout inclui um menu lateral, uma tela de introdução, e uma área de chat onde as mensagens do usuário e do bot são exibidas.
- **Scroll automático:** O chat se ajusta automaticamente para seguir a última mensagem enviada.
- **Carregamento dinâmico:** Indica quando o bot está processando uma resposta através de um spinner de carregamento.

## Tecnologias Utilizadas

- **React** - Biblioteca JavaScript para construir a interface de usuário.
- **TypeScript** - Superset de JavaScript que adiciona tipagem estática.
- **Bootstrap** - Biblioteca CSS para estilização responsiva.
- **react-icons** - Biblioteca de ícones usados no chat.
- **OllamaService** - Serviço de API que se comunica com o modelo LLaMA para gerar respostas.

## Instalação

Siga os passos abaixo para configurar o projeto localmente:

### Pré-requisitos

- **Node.js** - Certifique-se de ter o Node.js instalado na sua máquina. [Instale o Node.js](https://nodejs.org/)

### Passos

1. Clone este repositório:
   ```bash
   git clone https://github.com/seu-usuario/OllamaChat.git
   cd OllamaChat
   ```

2. Instale as dependências do projeto:
   ```bash
   npm install
   ```

3. Inicie o projeto:
   ```bash
   npm start
   ```

4. Acesse o projeto no seu navegador em `http://localhost:3000`.

## Como Usar

1. **Iniciar uma conversa:** Após abrir o chat, digite sua mensagem no campo de input localizado na parte inferior da tela.
2. **Receber respostas:** O bot Ollama responderá com base nas mensagens enviadas.
3. **Visualizar histórico:** O histórico de mensagens aparecerá abaixo do cabeçalho do chat.

## Estrutura do Projeto

```
src/
├── assets/                   # Arquivos estáticos, como imagens
│   └── llama.jpg             # Imagem do avatar da LLaMA
├── components/               # Componentes de layout da aplicação
│   └── layout/
│       ├── ChatIntro.tsx     # Componente que exibe a introdução do chat
│       ├── Footer.tsx        # Componente que contém o campo de input e botões
│       └── Sidebar.tsx       # Componente para o menu lateral do chat
├── interface/                # Definições de tipos e interfaces
│   └── Message.tsx           # Interface para as mensagens trocadas no chat
├── service/                  # Serviços de comunicação com APIs externas
│   └── ollamaService.ts      # Serviço que se comunica com a API do Ollama
├── App.tsx                   # Componente principal da aplicação que gerencia o chat
└── main.tsx                  # Ponto de entrada da aplicação
```

## API do Ollama

O OllamaChat utiliza uma API para gerar respostas com base no modelo LLaMA. O serviço de comunicação (`ollamaService`) é responsável por enviar as mensagens e receber as respostas do modelo.

### Exemplo de Payload para a API:

```json
{
  "model": "llama3.2",
  "prompt": "Sua pergunta aqui",
  "temperature": 0.7,
  "max_tokens": 150
}
```

### Configurando o Servidor da API

Para que o chat funcione corretamente, o serviço da API do Ollama deve estar rodando localmente em `http://localhost:11434`. Certifique-se de que o servidor está ativo antes de iniciar o chat.

## Contribuindo

Contribuições são bem-vindas! Se você encontrar algum bug ou tiver sugestões de melhorias, sinta-se à vontade para abrir uma issue ou enviar um pull request.

1. Fork o projeto
2. Crie uma nova branch (`git checkout -b feature/nova-funcionalidade`)
3. Commit suas mudanças (`git commit -am 'Adiciona nova funcionalidade'`)
4. Push para a branch (`git push origin feature/nova-funcionalidade`)
5. Abra um pull request

## Licença

Este projeto é licenciado sob a Licença MIT - veja o arquivo [LICENSE](LICENSE) para mais detalhes.
