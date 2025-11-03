# 🌐 ONG TransformaTech

Projeto desenvolvido como trabalho escolar para a ONG **TransformaTech**, com foco em inclusão digital, cursos gratuitos e reciclagem de equipamentos.

---

## 🚀 Objetivo do Projeto
- Criar um site funcional e responsivo para ONG fictícia.
- Implementar boas práticas de HTML5 semântico, CSS3 e JavaScript avançado.
- Garantir acessibilidade e experiência otimizada para usuários e dispositivos móveis.
- Aplicar controle de versão com Git/GitHub, documentação técnica e deploy.

---

## 📚 Tecnologias Utilizadas

- **HTML5** (semântica e estrutura)
- **CSS3** (Flexbox, Grid, Design System)
- **JavaScript (ES6+)** (SPA básica, validação de formulários, storage, toast notifications)
- **Git & GitHub** (versionamento, branching GitFlow, pull requests, issues)
- **Ferramentas de otimização**: Minificação de CSS/JS/HTML, compressão de imagens

---

## 🧱 Estrutura do Projeto

O site é composto por **3 páginas principais**:

| Página | Descrição |
|--------|------------|
| `index.html` | Página inicial com apresentação da ONG |
| `projetos.html` | Mostra os principais projetos com cards responsivos |
| `cadastro.html` | Formulário de cadastro de voluntários |
| `sobrenos.html` | sobrenos |
---

## 🧭 Navegação Interativa

- **Menu principal responsivo** com **hambúrguer mobile**  
- Navegação fluida e intuitiva  
- Submenus preparados para expansão futura  

---

## 🧩 Componentes de Interface

- **Cards responsivos** com hover animado  
- **Botões** com estados (`hover`, `focus`, `active`, `disabled`)  
- **Formulário estilizado** com validação e feedback visual  
- **Alertas e feedbacks** (alerta de sucesso no envio do formulário)  
- **Badges** de categorização nos projetos  

---

## ⚙️ Funcionalidades Implementadas

- SPA (Single Page Application) básica com navegação sem recarregar a página.
- Menu principal responsivo e mobile (hambúrguer).
- Sistema de cards responsivos para projetos.
- Formulário de cadastro de voluntários com validação visual e feedback (toast notifications).
- Sistema de armazenamento no `localStorage` para cadastro.
- Design responsivo usando **Grid 12 colunas** e Flexbox.
- Suporte básico para acessibilidade:
  - Navegação por teclado
  - Labels e `alt` em imagens
  - Contraste adequado
  - Estrutura semântica

---
🧩 Estrutura Modular do JavaScript

🟢 js/main.js – Script principal que inicializa a SPA e gerencia o envio e validação dos formulários. Inclui o sistema de toasts para feedback visual ao usuário.

📄 js/ui.js – Funções responsáveis pelo carregamento dinâmico de páginas e templates, mantendo o conteúdo <main> atualizado sem recarregar a página.

✅ js/formValidation.js – Validação dos campos dos formulários, incluindo verificação de campos obrigatórios e formato de e-mail. Fornece feedback visual próximo ao campo em caso de erro.

💾 js/storage.js – Gerencia o armazenamento de dados no localStorage, salvando os voluntários cadastrados e permitindo persistência local.

---

## 🖌️ Design System

- **Cores**: Primárias, secundárias e neutras (8 variáveis)
- **Tipografia**: 5 tamanhos de fonte (xs, sm, md, lg, xl)
- **Espaçamento modular**: 8px, 16px, 24px, 32px, 48px, 64px

---

## 👨‍💻 Autor

**Rodolfo Fronza**  
💼 Desenvolvedor Front-end | Estudante de Tecnologia  

---

## 📝 Licença

Este projeto foi desenvolvido para fins educacionais.  

