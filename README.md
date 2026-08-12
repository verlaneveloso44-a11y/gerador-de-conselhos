# Gerador de Conselhos (Advice Generator)

Uma aplicação web interativa e responsiva que consome uma API pública para gerar conselhos aleatórios, conta com **tradução automática para o português** e **botões integrados para compartilhamento** direto nas redes sociais.

---

## Demonstração

Clique aqui para testar o projeto online:
👉 **[Acessar o Gerador de Conselhos](https://verlaneveloso44-a11y.github.io/gerador-de-conselhos/)**

---

## Funcionalidades

- 💡 **Conselhos Aleatórios:** Busca frases atualizadas da *Advice Slip API* sem repetição por cache.
- 🌐 **Tradução Automática:** Traduz os conselhos de inglês para português em tempo real utilizando a *MyMemory Translation API*.
- 📋 **Cópia Rápida:** Botão integrado para copiar a frase direta para a área de transferência.
- 📲 **Compartilhamento Social:**
  - **WhatsApp:** Abre o aplicativo com o texto formatado para enviar em chats ou Status.
  - **Facebook:** Compartilhamento direto na rede social.
  - **Instagram:** Copia a frase e redireciona para a plataforma.
  - **Twitter / X:** Prepara um tweet com o conselho e hashtag pronta (`#ConselhoDoDia`).
- 📱 **Layout Responsivo:** Interface moderna, centralizada e adaptável para dispositivos móveis e desktop.

---

## Tecnologias Utilizadas

- **HTML5:** Estrutura semântica da aplicação.
- **CSS3:** Estilização moderna com CSS Grid, Flexbox, variáveis e tema escuro.
- **JavaScript (ES6+):** Consumo de APIs assíncronas via `fetch`, manipulação do DOM e uso da API `navigator.clipboard`.
- **APIs Externas:**
  - [Advice Slip API](https://api.adviceslip.com/)
  - [MyMemory Translation API](https://mymemory.translated.net/)

---

## Screenshots

| Conselho gerado | Buscando novo conselho |
|:---:|:---:|
| ![Tela com o conselho gerado](screenshots/imagem1.png) | ![Tela buscando novo conselho](screenshots/imagem2.png) |

---

## Como Executar o Projeto Localmente

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/verlaneveloso44-a11y/gerador-de-conselhos.git
   ```

2. **Acesse a pasta do projeto:**

   ```bash
   cd gerador-de-conselhos
   ```

3. **Abra o arquivo `index.html`:**
   - Dê dois cliques no arquivo `index.html` para abrir diretamente no navegador, ou
   - Abra a pasta no Visual Studio Code e utilize a extensão Live Server (clicando em **Go Live** no canto inferior do editor).

---

## 📄 Licença

Este projeto está sob a licença MIT. Sinta-se à vontade para utilizar, modificar e compartilhar!