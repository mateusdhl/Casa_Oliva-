# CASA OLIVA — Restaurante | Demo de portfólio HoraCode

Segundo projeto conceitual da série de três sites para portfólio. Aplicação responsiva de restaurante, com cardápio filtrável, busca, carrinho e formulários de pedido e consulta de reserva via WhatsApp.

## Tecnologias
- React 18 + TypeScript
- Vite 6
- Tailwind CSS 3
- Lucide React

## Como iniciar
Requisitos: Node.js 20+.

```bash
npm install
npm run dev
```

Acesse o endereço informado pelo Vite (geralmente `http://localhost:5173`).

## Gerar versão de produção
```bash
npm run build
npm run preview
```
O conteúdo estático fica em `dist/`, pronto para deploy na Vercel/Netlify.

## Personalização
- `src/App.tsx`: bloco `CONFIG` (WhatsApp, endereço e Instagram), conteúdo de apresentação e seções.
- `src/data/menu.ts`: pratos, preços, imagens, categorias e descrições.
- `src/styles.css` e `tailwind.config.js`: cores, fontes e ajustes gerais.
- `index.html`: título e SEO.

### WhatsApp
Use no `CONFIG.whatsapp` um número habilitado no WhatsApp, com DDI e DDD, **sem espaços nem símbolos**. O número `5511999999999` é apenas um exemplo. O aplicativo **não** processa pedidos, pagamentos, mesas ou reservas no servidor. Apenas monta mensagens e abre `wa.me` para confirmação manual.

### Conteúdo de demonstração
**Casa Oliva é um restaurante fictício**. Nome, endereço, preços, horário, receitas e imagens são exemplos. Imagens são carregadas de `images.unsplash.com` e requerem conexão com a internet; substitua por fotos licenciadas do cliente antes de publicar um projeto comercial. Valores exibidos não incluem eventuais taxas de entrega.

## Projeto
Desenvolvido como demonstração comercial para portfólio da **HoraCode**.
