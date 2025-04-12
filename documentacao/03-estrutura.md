# Estrutura de Organização do Código

Este documento detalha a estrutura de organização do código do projeto, explicando a função de cada diretório e arquivo principal.

## Visão Geral da Estrutura

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

## Detalhamento dos Diretórios

### `/app`

Contém todas as rotas e páginas da aplicação, seguindo a estrutura do Next.js App Router.

- **`/app/page.tsx`**: Página inicial do site institucional
- **`/app/layout.tsx`**: Layout raiz que envolve todas as páginas do site
- **`/app/globals.css`**: Estilos globais da aplicação
- **`/app/trabalhe-conosco/`**: Rota para a página de carreiras
- **`/app/cursos/`**: Subdomínio para a plataforma de cursos
  - **`/app/cursos/page.tsx`**: Página de login da plataforma
  - **`/app/cursos/layout.tsx`**: Layout específico para a plataforma de cursos
  - **`/app/cursos/dashboard/`**: Área logada da plataforma
    - **`/app/cursos/dashboard/layout.tsx`**: Layout do dashboard
    - **`/app/cursos/dashboard/page.tsx`**: Página inicial do dashboard
    - **`/app/cursos/dashboard/cursos/`**: Catálogo de cursos
    - **`/app/cursos/dashboard/trilhas/`**: Trilhas de aprendizado
    - **`/app/cursos/dashboard/certificados/`**: Certificados do usuário
    - **`/app/cursos/dashboard/desempenho/`**: Desempenho do usuário
    - **`/app/cursos/dashboard/perfil/`**: Perfil do usuário
    - **`/app/cursos/dashboard/configuracoes/`**: Configurações do usuário
    - **`/app/cursos/dashboard/admin/`**: Área administrativa (apenas para admins)

### `/components`

Contém todos os componentes React reutilizáveis, organizados por funcionalidade.

- **`/components/ui/`**: Componentes de UI genéricos baseados no shadcn/ui
  - Botões, cards, inputs, modais, etc.
- **`/components/sections/`**: Seções do site institucional
  - Hero, About, Contact Form, Partners, etc.
- **`/components/cursos/`**: Componentes específicos da plataforma de cursos
  - Login Form, Course Card, Dashboard components, etc.
- **`/components/navbar.tsx`**: Barra de navegação do site institucional
- **`/components/footer.tsx`**: Rodapé do site institucional
- **`/components/theme-provider.tsx`**: Provedor de tema para a aplicação
- **`/components/back-to-top.tsx`**: Botão de voltar ao topo

### `/lib`

Contém funções utilitárias, hooks personalizados e APIs simuladas.

- **`/lib/utils.ts`**: Funções utilitárias gerais
- **`/lib/api.ts`**: Funções para simular chamadas de API
- **`/lib/mock-data.ts`**: Dados mockados para desenvolvimento

### `/public`

Contém arquivos estáticos como imagens, fontes e outros recursos.

- **`/public/placeholder.svg`**: Imagem de placeholder para desenvolvimento

### `/documentacao`

Contém a documentação completa do projeto.

## Convenções de Nomenclatura

### Arquivos e Diretórios

- **Componentes React**: PascalCase (ex: `Button.tsx`, `CourseCard.tsx`)
- **Utilitários e Hooks**: camelCase (ex: `useAuth.ts`, `formatDate.ts`)
- **Páginas**: kebab-case para diretórios, `page.tsx` para arquivos de página
- **Layouts**: `layout.tsx` para arquivos de layout

### Código

- **Componentes**: PascalCase (ex: `function Button()`, `const Header = ()`)
- **Hooks**: camelCase começando com "use" (ex: `useAuth`, `useTheme`)
- **Funções Utilitárias**: camelCase (ex: `formatDate`, `calculateTotal`)
- **Interfaces e Types**: PascalCase (ex: `interface UserProps`, `type ButtonVariant`)
- **Constantes**: UPPER_SNAKE_CASE para constantes globais, camelCase para constantes locais

## Padrões de Código

### Componentes

- Componentes do lado do cliente usam a diretiva `'use client'` no topo do arquivo
- Componentes do lado do servidor não precisam da diretiva
- Props são tipadas usando TypeScript interfaces ou types
- Componentes maiores são divididos em subcomponentes menores

### Estado e Efeitos

- Estado local é gerenciado com `useState` e `useReducer`
- Efeitos colaterais são gerenciados com `useEffect`
- Estado global é gerenciado com Context API

### Estilização

- Estilização é feita principalmente com Tailwind CSS
- Classes condicionais são aplicadas usando a função utilitária `cn`
- Variantes de componentes são definidas usando `cva` quando necessário

## Próximos Passos

Para entender melhor cada parte do projeto, consulte os seguintes documentos:

- [Site Institucional](./04-site-institucional.md)
- [Plataforma de Cursos](./05-plataforma-cursos.md)
- [Guia de Estilo](./06-guia-estilo.md)
- [Autenticação](./07-autenticacao.md)
