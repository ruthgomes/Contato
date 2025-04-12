# Guia de Instalação e Configuração


## Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- **Node.js**: versão 18.x ou superior
- **npm**: versão 9.x ou superior (ou yarn/pnpm)
- **Git**: para controle de versão

## Passo 1: Clonar o Repositório

\`\`\`bash
git clone [URL_DO_REPOSITORIO]
cd [NOME_DO_DIRETORIO]
\`\`\`

## Passo 2: Instalar Dependências

\`\`\`bash
npm install
# ou
yarn install
# ou
pnpm install
\`\`\`

## Passo 3: Configurar Variáveis de Ambiente

Crie um arquivo `.env.local` na raiz do projeto com as seguintes variáveis:

\`\`\`
NEXT_PUBLIC_API_URL=http://localhost:3000/api
\`\`\`

## Passo 4: Executar o Projeto em Desenvolvimento

\`\`\`bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
\`\`\`

O projeto estará disponível em `http://localhost:3000`.

## Passo 5: Construir para Produção

\`\`\`bash
npm run build
# ou
yarn build
# ou
pnpm build
\`\`\`

## Passo 6: Executar a Versão de Produção

\`\`\`bash
npm start
# ou
yarn start
# ou
pnpm start
\`\`\`

## Estrutura de Diretórios

A estrutura de diretórios segue o padrão do Next.js App Router:

\`\`\`
/
├── app/                    # Rotas e páginas da aplicação
├── components/             # Componentes React reutilizáveis
├── lib/                    # Funções utilitárias e APIs
├── public/                 # Arquivos estáticos
└── documentacao/           # Documentação do projeto
\`\`\`

## Comandos Disponíveis

- `npm run dev`: Inicia o servidor de desenvolvimento
- `npm run build`: Constrói o aplicativo para produção
- `npm start`: Inicia o servidor de produção
- `npm run lint`: Executa o linter para verificar problemas de código
- `npm run format`: Formata o código usando Prettier

## Solução de Problemas Comuns

### Erro de Porta em Uso

Se a porta 3000 já estiver em uso, você pode iniciar o servidor em uma porta diferente:

\`\`\`bash
npm run dev -- -p 3001
# ou
yarn dev -p 3001
# ou
pnpm dev -p 3001
\`\`\`

### Problemas com Dependências

Se encontrar problemas com dependências, tente limpar o cache e reinstalar:

\`\`\`bash
npm cache clean --force
rm -rf node_modules
rm -rf .next
npm install
\`\`\`

### Problemas com Next.js

Se encontrar problemas específicos do Next.js, consulte a [documentação oficial](https://nextjs.org/docs) ou verifique se há atualizações disponíveis:

\`\`\`bash
npm outdated
\`\`\`

## Próximos Passos

Após a instalação, consulte os seguintes documentos para entender melhor a estrutura e funcionamento do projeto:

- [Estrutura de Organização](./03-estrutura.md)
- [Site Institucional](./04-site-institucional.md)
- [Plataforma de Cursos](./05-plataforma-cursos.md)
