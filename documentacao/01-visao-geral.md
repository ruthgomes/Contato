# Visão Geral do Projeto

## Introdução

Este projeto consiste em um site institucional completo integrado com uma plataforma de cursos corporativos. O sistema foi desenvolvido utilizando tecnologias modernas de frontend, com foco em performance, acessibilidade e experiência do usuário.

O projeto é dividido em duas partes principais:

1. **Site Institucional**: Apresenta a empresa, seus serviços, informações de contato e página de trabalhe conosco.
2. **Plataforma de Cursos**: Sistema de aprendizado corporativo com autenticação, dashboard, catálogo de cursos, trilhas de aprendizado e certificados.

## Tecnologias Utilizadas

### Core

- **Next.js 14**: Framework React com suporte a renderização híbrida (SSR, SSG e CSR)
- **React 18**: Biblioteca para construção de interfaces
- **TypeScript**: Superset tipado de JavaScript
- **Tailwind CSS**: Framework CSS utilitário para estilização

### UI/UX

- **shadcn/ui**: Componentes React reutilizáveis e acessíveis
- **Lucide Icons**: Biblioteca de ícones
- **Tailwind Animations**: Animações CSS via Tailwind

### Gerenciamento de Estado

- **React Context API**: Para gerenciamento de estado global (autenticação, tema)
- **React Hooks**: Para gerenciamento de estado local e efeitos colaterais

### Gráficos e Visualização de Dados

- **Chart.js**: Biblioteca para criação de gráficos interativos
- **React Wrapper para Chart.js**: Para integração com React

### Formulários e Validação

- **React Hook Form**: Biblioteca para gerenciamento de formulários (simulado)
- **Zod**: Biblioteca para validação de esquemas (simulado)

### Roteamento

- **Next.js App Router**: Sistema de roteamento baseado em arquivos

### Temas e Acessibilidade

- **next-themes**: Suporte a temas claro/escuro com persistência
- **ARIA**: Atributos de acessibilidade implementados em componentes

## Requisitos do Sistema

- Node.js 18.x ou superior
- npm 9.x ou superior (ou yarn/pnpm equivalentes)
- Git

## Estrutura do Projeto

O projeto segue a estrutura do Next.js App Router, com organização por funcionalidades:

\`\`\`
/
├── app/                    # Rotas e páginas da aplicação
│   ├── cursos/             # Plataforma de cursos
│   │   ├── dashboard/      # Área logada da plataforma
│   │   └── page.tsx        # Página de login
│   ├── trabalhe-conosco/   # Página de carreiras
│   └── page.tsx            # Página inicial do site
├── components/             # Componentes React reutilizáveis
│   ├── cursos/             # Componentes específicos da plataforma de cursos
│   ├── sections/           # Seções do site institucional
│   └── ui/                 # Componentes de UI genéricos (shadcn)
├── lib/                    # Funções utilitárias e APIs
├── public/                 # Arquivos estáticos
└── documentacao/           # Documentação do projeto
\`\`\`

## Próximos Passos

Para continuar o desenvolvimento do projeto, consulte os seguintes documentos:

- [Guia de Instalação](./02-instalacao.md)
- [Estrutura de Organização](./03-estrutura.md)
- [Site Institucional](./04-site-institucional.md)
- [Plataforma de Cursos](./05-plataforma-cursos.md)
- [Guia de Estilo](./06-guia-estilo.md)
- [Autenticação](./07-autenticacao.md)
