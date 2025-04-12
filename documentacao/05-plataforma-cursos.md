# Plataforma de Cursos


## Visão Geral

A plataforma de cursos é um sistema de aprendizado corporativo que permite aos usuários acessar cursos, trilhas de aprendizado, acompanhar seu progresso e obter certificados. A plataforma possui dois tipos de usuários: usuários comuns e administradores.

## Páginas Principais

### Página de Login (`/app/cursos/page.tsx`)

Página de entrada da plataforma com:
- Formulário de login
- Opção para criar conta
- Informações sobre a plataforma

### Dashboard do Usuário

- **Cursos** (`/app/cursos/dashboard/cursos/page.tsx`): Catálogo de cursos disponíveis
- **Trilhas** (`/app/cursos/dashboard/trilhas/page.tsx`): Trilhas de aprendizado
- **Certificados** (`/app/cursos/dashboard/certificados/page.tsx`): Certificados obtidos
- **Desempenho** (`/app/cursos/dashboard/desempenho/page.tsx`): Métricas de desempenho
- **Perfil** (`/app/cursos/dashboard/perfil/page.tsx`): Informações do usuário
- **Configurações** (`/app/cursos/dashboard/configuracoes/page.tsx`): Preferências do usuário

### Dashboard do Administrador

- **Dashboard** (`/app/cursos/dashboard/page.tsx`): Visão geral da plataforma
- **Cursos** (`/app/cursos/dashboard/cursos/page.tsx`): Gerenciamento de cursos
- **Trilhas** (`/app/cursos/dashboard/trilhas/page.tsx`): Gerenciamento de trilhas
- **Administração** (`/app/cursos/dashboard/admin/administracao/page.tsx`): Gerenciamento de usuários
- **Configuração** (`/app/cursos/dashboard/configuracoes/page.tsx`): Configurações da plataforma

### Página de Curso Individual

- **Curso** (`/app/cursos/dashboard/curso/[id]/page.tsx`): Detalhes e conteúdo do curso

## Componentes Principais

### Autenticação

- **Auth Provider** (`/components/cursos/auth-provider.tsx`): Contexto de autenticação
- **Login Form** (`/components/cursos/login-form.tsx`): Formulário de login e registro

### Layout do Dashboard

- **Dashboard Header** (`/components/cursos/dashboard/header.tsx`): Cabeçalho com logo e menu do usuário
- **Dashboard Sidebar** (`/components/cursos/dashboard/sidebar.tsx`): Barra lateral com navegação

### Componentes de Cursos

- **Course Card** (`/components/cursos/course-card.tsx`): Card de curso para listagem
- **Recent Activity** (`/components/cursos/dashboard/recent-activity.tsx`): Atividades recentes do usuário
- **Charts** (`/components/cursos/dashboard/charts.tsx`): Gráficos para visualização de dados

## Fluxos de Usuário

### Autenticação

1. O usuário acessa a página de login
2. Insere suas credenciais ou cria uma nova conta
3. É redirecionado para o dashboard apropriado (usuário ou admin)

### Navegação de Cursos (Usuário)

1. O usuário acessa o catálogo de cursos
2. Pode filtrar cursos por categoria, nível ou palavra-chave
3. Clica em um curso para ver detalhes
4. Pode iniciar ou continuar o curso
5. Pode visualizar seu progresso e avaliações

### Trilhas de Aprendizado (Usuário)

1. O usuário acessa a página de trilhas
2. Visualiza trilhas disponíveis e seu progresso
3. Pode iniciar ou continuar uma trilha
4. Acompanha seu progresso na trilha

### Certificados (Usuário)

1. O usuário acessa a página de certificados
2. Visualiza certificados obtidos
3. Pode baixar ou visualizar certificados

### Administração (Admin)

1. O administrador acessa o dashboard
2. Visualiza métricas gerais da plataforma
3. Pode gerenciar usuários, cursos e trilhas
4. Pode configurar permissões e limitações

## Tipos de Usuário

### Usuário Comum

- Acesso a cursos e trilhas
- Visualização de certificados
- Acompanhamento de desempenho
- Configurações pessoais

### Administrador

- Todas as funcionalidades do usuário comum
- Gerenciamento de usuários
- Gerenciamento de cursos e trilhas
- Visualização de métricas e relatórios
- Configurações da plataforma

## Responsividade

A plataforma é totalmente responsiva:

- **Desktop**: Layout completo com sidebar visível
- **Tablet**: Layout adaptado com sidebar colapsável
- **Mobile**: Layout de coluna única com sidebar em overlay

## Temas

A plataforma suporta temas claro e escuro:

- Tema claro (padrão)
- Tema escuro
- Tema do sistema (segue a preferência do sistema operacional)

## Simulação de Backend

Como este é um projeto frontend, o backend é simulado:

- Autenticação simulada com localStorage
- Dados mockados para cursos, trilhas e usuários
- Simulação de chamadas de API com atrasos realistas

## Próximos Passos

Para entender melhor o guia de estilo e os componentes UI, consulte o documento:

- [Guia de Estilo](./06-guia-estilo.md)
