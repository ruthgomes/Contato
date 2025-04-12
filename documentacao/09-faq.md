# Perguntas Frequentes (FAQ)


## Perguntas Gerais

### Q: Quais são as principais tecnologias utilizadas neste projeto?
**R:** O projeto utiliza Next.js, React, TypeScript, Tailwind CSS e shadcn/ui como principais tecnologias.

### Q: O projeto requer um backend?
**R:** Não, este é um projeto frontend com simulação de backend. Em um ambiente de produção, seria necessário desenvolver ou integrar com um backend real.

### Q: Como o projeto está estruturado?
**R:** O projeto segue a estrutura do Next.js App Router, com organização por funcionalidades. Consulte o documento [Estrutura de Organização](./03-estrutura.md) para mais detalhes.

### Q: Posso usar este projeto como base para um projeto real?
**R:** Sim, este projeto foi desenvolvido como um template robusto que pode ser adaptado para necessidades reais.

## Instalação e Configuração

### Q: Quais são os requisitos mínimos para executar o projeto?
**R:** Node.js 18.x ou superior e npm 9.x ou superior (ou yarn/pnpm equivalentes).

### Q: Como instalo e executo o projeto localmente?
**R:** Consulte o documento [Guia de Instalação](./02-instalacao.md) para instruções detalhadas.

### Q: Como configuro as variáveis de ambiente?
**R:** Crie um arquivo `.env.local` na raiz do projeto com as variáveis necessárias. Consulte o documento [Guia de Instalação](./02-instalacao.md) para mais detalhes.

### Q: O projeto suporta Docker?
**R:** O projeto não inclui configuração Docker por padrão, mas pode ser facilmente adaptado para usar Docker.

## Desenvolvimento

### Q: Como adiciono uma nova página ao site?
**R:** Crie um novo arquivo `page.tsx` no diretório correspondente dentro de `/app`. Por exemplo, para uma página "Sobre", crie `/app/sobre/page.tsx`.

### Q: Como crio um novo componente?
**R:** Crie um novo arquivo no diretório `/components` seguindo a convenção de nomenclatura PascalCase. Por exemplo, `NewComponent.tsx`.

### Q: Como adiciono um novo curso à plataforma?
**R:** Como o backend é simulado, adicione o novo curso ao array de cursos mockados em `/lib/mock-data.ts`.

### Q: Como personalizo o tema e as cores?
**R:** Modifique as variáveis de cor no arquivo `tailwind.config.ts` e `app/globals.css`. Consulte o documento [Guia de Estilo](./06-guia-estilo.md) para mais detalhes.

## Autenticação

### Q: Como funciona a autenticação no projeto?
**R:** A autenticação é simulada usando localStorage. Consulte o documento [Autenticação](./07-autenticacao.md) para mais detalhes.

### Q: Quais são as credenciais de teste?
**R:** 
- Usuário comum: `usuario@empresa.com` / `senha123`
- Administrador: `admin@empresa.com` / `admin123`

### Q: Como implementar autenticação real?
**R:** Substitua a implementação atual por uma integração com um serviço de autenticação real, como Auth0, Firebase Authentication ou um backend personalizado.

## Implantação

### Q: Como implanto o projeto em produção?
**R:** Consulte o documento [Guia de Implantação](./08-implantacao.md) para instruções detalhadas.

### Q: Qual é o melhor provedor para hospedar este projeto?
**R:** A Vercel é recomendada por ser otimizada para Next.js, mas o projeto pode ser hospedado em qualquer provedor que suporte Next.js.

### Q: Como configuro um domínio personalizado?
**R:** A configuração de domínio varia de acordo com o provedor de hospedagem. Consulte o documento [Guia de Implantação](./08-implantacao.md) para instruções gerais.

## Personalização

### Q: Como adiciono novos componentes UI?
**R:** Para componentes shadcn/ui, use o CLI:
\`\`\`bash
npx shadcn@latest add [component-name]
\`\`\`
Para componentes personalizados, crie-os no diretório `/components`.

### Q: Como personalizo o layout do site?
**R:** Modifique os arquivos de layout em `/app/layout.tsx` e `/app/cursos/layout.tsx`.

### Q: Como adiciono novos ícones?
**R:** O projeto usa Lucide React para ícones. Importe novos ícones diretamente:
\`\`\`tsx
import { ImageIcon as NewIcon } from 'lucide-react'
\`\`\`

### Q: Como adiciono suporte para outros idiomas?
**R:** Implemente uma solução de internacionalização como `next-intl` ou `react-i18next`.

## Problemas Comuns

### Q: O projeto não compila após alterações.
**R:** Verifique se todas as importações estão corretas e se não há erros de tipo no TypeScript.

### Q: Os estilos não estão sendo aplicados corretamente.
**R:** Certifique-se de que as classes Tailwind estão corretas e que o arquivo `globals.css` está sendo importado.

### Q: Estou recebendo erros de hidratação no Next.js.
**R:** Isso geralmente ocorre quando o HTML renderizado no servidor não corresponde ao que é renderizado no cliente. Use o hook `useEffect` com verificação de montagem para componentes que dependem do navegador.

### Q: Como resolvo problemas com o tema claro/escuro?
**R:** Certifique-se de que o `ThemeProvider` está configurado corretamente e que está usando o hook `useTheme` para acessar e modificar o tema.

## Extensão e Integração

### Q: Como integro o projeto com um CMS?
**R:** Você pode integrar com um CMS headless como Contentful, Sanity ou Strapi através de suas APIs.

### Q: Como adiciono análise de dados (analytics)?
**R:** Integre Google Analytics, Plausible, ou outra solução de analytics usando o componente `Script` do Next.js.

### Q: Como integro com um sistema de pagamento?
**R:** Integre com Stripe, PayPal ou outro provedor de pagamento através de suas APIs e SDKs.

### Q: Como adiciono um blog ao site?
**R:** Crie uma nova seção `/app/blog` e integre com um CMS ou implemente um sistema de blog estático usando MDX.

## Suporte e Contribuição

### Q: Como reporto bugs ou solicito novas funcionalidades?
**R:** Abra uma issue no repositório GitHub do projeto.

### Q: Como contribuo para o projeto?
**R:** Fork o repositório, faça suas alterações e envie um pull request.

### Q: Onde posso encontrar mais documentação?
**R:** Além desta documentação, consulte a documentação oficial das tecnologias utilizadas:
- [Next.js](https://nextjs.org/docs)
- [React](https://reactjs.org/docs)
- [TypeScript](https://www.typescriptlang.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [shadcn/ui](https://ui.shadcn.com)
