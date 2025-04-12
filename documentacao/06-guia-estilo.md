# Guia de Estilo e Componentes


## Sistema de Design

O projeto utiliza um sistema de design baseado em componentes, construído com Tailwind CSS e shadcn/ui. Este sistema garante consistência visual e de interação em toda a aplicação.

## Paleta de Cores

A paleta de cores principal é definida no arquivo `tailwind.config.ts` e `app/globals.css`:

### Cores Principais

- **Primary**: `#001D3D` (Azul escuro)
- **Secondary**: `#001233` (Azul mais escuro)
- **Accent**: `#FFC300` (Amarelo)
- **Background**: `#FFFFFF` (Branco)
- **Foreground**: `#1F2937` (Cinza escuro)

### Cores Semânticas

- **Success**: Verde para indicar sucesso
- **Warning**: Amarelo para indicar avisos
- **Destructive**: Vermelho para indicar erros ou ações destrutivas
- **Muted**: Cinza claro para elementos secundários

### Variantes de Cores

Cada cor principal possui variantes para diferentes estados:

- **Hover**: Versão mais clara ou escura para estado hover
- **Focus**: Versão com destaque para estado de foco
- **Disabled**: Versão com opacidade reduzida para estado desabilitado

## Tipografia

### Fonte Principal

- **Inter**: Fonte sans-serif moderna e legível
- Importada via Google Fonts e configurada como variável CSS

### Hierarquia Tipográfica

- **h1**: Títulos principais (3xl-5xl)
- **h2**: Subtítulos (2xl-4xl)
- **h3**: Títulos de seção (xl-2xl)
- **h4-h6**: Títulos menores
- **p**: Texto de parágrafo
- **small**: Texto pequeno

### Pesos de Fonte

- **Regular**: 400
- **Medium**: 500
- **Semibold**: 600
- **Bold**: 700

## Espaçamento

O sistema de espaçamento segue a escala do Tailwind CSS:

- **0**: 0px
- **0.5**: 0.125rem (2px)
- **1**: 0.25rem (4px)
- **2**: 0.5rem (8px)
- **3**: 0.75rem (12px)
- **4**: 1rem (16px)
- **6**: 1.5rem (24px)
- **8**: 2rem (32px)
- **12**: 3rem (48px)
- **16**: 4rem (64px)
- **24**: 6rem (96px)

## Componentes UI

O projeto utiliza componentes do shadcn/ui, que são componentes React não empacotados, estilizados com Tailwind CSS e baseados em Radix UI.

### Componentes Básicos

- **Button**: Botões em diferentes variantes (default, outline, ghost, link)
- **Input**: Campos de entrada de texto
- **Textarea**: Áreas de texto
- **Select**: Seletores dropdown
- **Checkbox**: Caixas de seleção
- **Radio**: Botões de opção
- **Switch**: Interruptores toggle

### Componentes de Layout

- **Card**: Containers com cabeçalho, conteúdo e rodapé
- **Tabs**: Sistema de abas
- **Accordion**: Painéis expansíveis
- **Dialog**: Modais e diálogos
- **Sheet**: Painéis deslizantes
- **Sidebar**: Barra lateral navegacional

### Componentes de Feedback

- **Toast**: Notificações temporárias
- **Progress**: Barras de progresso
- **Skeleton**: Placeholders de carregamento
- **Badge**: Etiquetas e indicadores

### Componentes de Navegação

- **Navbar**: Barra de navegação principal
- **Sidebar**: Barra lateral de navegação
- **Breadcrumb**: Trilha de navegação
- **Pagination**: Controles de paginação

### Componentes de Dados

- **Table**: Tabelas para exibição de dados
- **Avatar**: Representação visual de usuários
- **Calendar**: Calendário e seletor de datas

## Variantes de Componentes

Muitos componentes possuem variantes que podem ser aplicadas através de props:

### Exemplo: Button

\`\`\`tsx
<Button variant="default">Default</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="link">Link</Button>
\`\`\`

### Exemplo: Card

\`\`\`tsx
<Card>
  <CardHeader>
    <CardTitle>Título do Card</CardTitle>
    <CardDescription>Descrição do card</CardDescription>
  </CardHeader>
  <CardContent>
    Conteúdo do card
  </CardContent>
  <CardFooter>
    Rodapé do card
  </CardFooter>
</Card>
\`\`\`

## Utilitários de Estilo

### Função `cn`

A função `cn` (classnames) é utilizada para combinar classes condicionalmente:

\`\`\`tsx
import { cn } from "@/lib/utils"

<div className={cn(
  "base-class",
  condition && "conditional-class",
  variant === "primary" ? "primary-class" : "secondary-class"
)}>
  Conteúdo
</div>
\`\`\`

### Animações

Animações são definidas no arquivo `tailwind.config.ts` e aplicadas via classes:

\`\`\`tsx
<div className="animate-fade-in">Conteúdo com fade in</div>
<div className="animate-slide-up">Conteúdo com slide up</div>
\`\`\`

## Responsividade

O design é totalmente responsivo, utilizando os breakpoints do Tailwind CSS:

- **sm**: 640px
- **md**: 768px
- **lg**: 1024px
- **xl**: 1280px
- **2xl**: 1536px

Exemplo de uso:

\`\`\`tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
  {/* Conteúdo */}
</div>
\`\`\`

## Temas Claro/Escuro

O projeto suporta temas claro e escuro através do `next-themes`:

\`\`\`tsx
import { useTheme } from "@/components/theme-provider"

const { theme, setTheme } = useTheme()

<button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
  Toggle Theme
</button>
\`\`\`

## Acessibilidade

Todos os componentes seguem as melhores práticas de acessibilidade:

- Contraste adequado
- Foco visível
- Atributos ARIA
- Navegação por teclado
- Textos alternativos

## Próximos Passos

Para entender melhor o sistema de autenticação, consulte o documento:

- [Autenticação](./07-autenticacao.md)
