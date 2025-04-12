# Site Institucional


## Visão Geral

O site institucional é a face pública da empresa, apresentando informações sobre a empresa, seus serviços, formas de contato e oportunidades de carreira. O site foi desenvolvido com foco em design moderno, responsividade e experiência do usuário.

## Páginas Principais

### Página Inicial (`/app/page.tsx`)

A página inicial apresenta as principais seções do site:

- **Hero**: Apresentação principal da empresa com chamada para ação
- **About**: Informações sobre a empresa, história e valores
- **Photo Carousel**: Carrossel de fotos do Instagram da empresa
- **Contact Form**: Formulário de contato para clientes e interessados

### Trabalhe Conosco (`/app/trabalhe-conosco/page.tsx`)

Página dedicada a oportunidades de carreira:

- **Job Openings**: Lista de vagas abertas com filtros de busca
- **Talent Pool**: Formulário para cadastro no banco de talentos

## Componentes Principais

### Navegação

- **Navbar** (`/components/navbar.tsx`): Barra de navegação responsiva com links para as principais seções do site e botão de login para a plataforma de cursos.

### Seções da Página Inicial

- **Hero** (`/components/sections/hero.tsx`): Seção de destaque com título, descrição e imagem.
- **About** (`/components/sections/about.tsx`): Seção com informações sobre a empresa, história, missão, visão e valores.
- **Partners Carousel** (`/components/sections/partners-carousel.tsx`): Carrossel de logos dos parceiros da empresa.
- **Photo Carousel** (`/components/sections/photo-carousel.tsx`): Carrossel de fotos do Instagram da empresa.
- **Contact Form** (`/components/sections/contact-form.tsx`): Formulário de contato com validação de campos.

### Seções da Página Trabalhe Conosco

- **Job Openings** (`/components/sections/job-openings.tsx`): Lista de vagas abertas com filtros de busca.
- **Talent Pool** (`/components/sections/talent-pool.tsx`): Formulário para cadastro no banco de talentos.
- **Job Application Modal** (`/components/job-application-modal.tsx`): Modal para candidatura a vagas específicas.

### Componentes Comuns

- **Footer** (`/components/footer.tsx`): Rodapé com links, informações de contato e redes sociais.
- **Back to Top** (`/components/back-to-top.tsx`): Botão para voltar ao topo da página.
- **File Upload** (`/components/file-upload.tsx`): Componente para upload de arquivos (usado no formulário de candidatura).

## Fluxos de Navegação

### Navegação Principal

1. O usuário acessa a página inicial
2. Pode navegar para diferentes seções através da barra de navegação
3. Pode rolar a página para visualizar todas as seções
4. Pode clicar no botão "Trabalhe Conosco" para acessar a página de carreiras
5. Pode clicar no botão "Login" para acessar a plataforma de cursos

### Fluxo de Contato

1. O usuário navega até a seção de contato
2. Preenche o formulário com nome, email, documento, telefone, assunto e mensagem
3. Envia o formulário
4. Recebe uma confirmação de envio

### Fluxo de Candidatura

1. O usuário acessa a página "Trabalhe Conosco"
2. Visualiza as vagas disponíveis e pode filtrar por área, localização ou palavra-chave
3. Clica em "Candidatar-se" em uma vaga específica
4. Preenche o formulário de candidatura no modal
5. Envia a candidatura
6. Recebe uma confirmação de envio

## Responsividade

O site é totalmente responsivo, adaptando-se a diferentes tamanhos de tela:

- **Desktop**: Layout completo com múltiplas colunas
- **Tablet**: Layout adaptado com menos colunas
- **Mobile**: Layout de coluna única com menu hambúrguer

## Acessibilidade

O site segue as melhores práticas de acessibilidade:

- Uso de tags semânticas HTML5
- Atributos ARIA quando necessário
- Contraste adequado entre texto e fundo
- Textos alternativos para imagens
- Navegação por teclado

## Otimização de Performance

- Carregamento lazy de imagens
- Componentes otimizados para renderização
- Minimização de re-renderizações desnecessárias
- Uso de Next.js para otimização de carregamento de páginas

## Integração com a Plataforma de Cursos

O site institucional se integra com a plataforma de cursos através do botão "Login" na barra de navegação, que direciona o usuário para a página de login da plataforma.

## Próximos Passos

Para entender melhor a plataforma de cursos, consulte o documento:

- [Plataforma de Cursos](./05-plataforma-cursos.md)
