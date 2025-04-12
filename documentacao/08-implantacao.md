# Guia de Implantação


## Pré-requisitos

Para implantar o projeto em produção, você precisará:

- Conta na Vercel, Netlify ou outro provedor de hospedagem para Next.js
- Domínio (opcional, mas recomendado)
- Variáveis de ambiente configuradas

## Implantação na Vercel (Recomendado)

A Vercel é a plataforma ideal para hospedar aplicações Next.js, sendo desenvolvida pela mesma empresa.

### Passo 1: Preparar o Projeto

Certifique-se de que seu projeto está pronto para produção:

\`\`\`bash
# Verifique se a build funciona localmente
npm run build
\`\`\`

### Passo 2: Criar uma Conta na Vercel

Acesse [vercel.com](https://vercel.com) e crie uma conta ou faça login.

### Passo 3: Instalar a CLI da Vercel (Opcional)

\`\`\`bash
npm install -g vercel
\`\`\`

### Passo 4: Implantar via Dashboard

1. No dashboard da Vercel, clique em "New Project"
2. Importe seu repositório Git (GitHub, GitLab ou Bitbucket)
3. Configure as opções do projeto:
   - Framework Preset: Next.js
   - Build Command: `npm run build` (padrão)
   - Output Directory: `.next` (padrão)
   - Environment Variables: Adicione as variáveis necessárias

4. Clique em "Deploy"

### Passo 5: Implantar via CLI (Alternativa)

\`\`\`bash
# No diretório do projeto
vercel
\`\`\`

Siga as instruções na tela para configurar o projeto.

### Passo 6: Configurar Domínio Personalizado

1. No dashboard do projeto na Vercel, vá para "Settings" > "Domains"
2. Adicione seu domínio personalizado
3. Siga as instruções para configurar os registros DNS

## Implantação em Outros Provedores

### Netlify

1. Crie uma conta no [Netlify](https://netlify.com)
2. Clique em "New site from Git"
3. Conecte seu repositório
4. Configure as opções:
   - Build command: `npm run build`
   - Publish directory: `.next`
5. Clique em "Deploy site"

### AWS Amplify

1. Acesse o console do AWS Amplify
2. Clique em "New app" > "Host web app"
3. Conecte seu repositório
4. Configure as opções de build
5. Clique em "Save and deploy"

## Variáveis de Ambiente

Configure as seguintes variáveis de ambiente no seu provedor de hospedagem:

\`\`\`
NEXT_PUBLIC_API_URL=https://api.seudominio.com
\`\`\`

## Otimizações para Produção

### Performance

1. **Análise de Bundle**: Use ferramentas como `@next/bundle-analyzer` para analisar o tamanho do bundle
2. **Lazy Loading**: Certifique-se de que componentes pesados são carregados com lazy loading
3. **Otimização de Imagens**: Use o componente `Image` do Next.js para otimização automática

### SEO

1. **Metadados**: Verifique se todas as páginas têm metadados apropriados
2. **Sitemap**: Gere um sitemap.xml para melhor indexação
3. **robots.txt**: Configure corretamente para controlar o acesso dos crawlers

### Monitoramento

1. **Analytics**: Integre Google Analytics ou similar
2. **Error Tracking**: Considere ferramentas como Sentry para monitoramento de erros
3. **Performance Monitoring**: Use Lighthouse ou similar para monitorar a performance

## CI/CD

### GitHub Actions

Exemplo de workflow para CI/CD com GitHub Actions:

\`\`\`yaml
name: CI/CD

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
    - uses: actions/checkout@v2
    
    - name: Setup Node.js
      uses: actions/setup-node@v2
      with:
        node-version: '18'
        
    - name: Install dependencies
      run: npm ci
      
    - name: Lint
      run: npm run lint
      
    - name: Build
      run: npm run build
      
    - name: Deploy to Vercel
      if: github.ref == 'refs/heads/main'
      uses: amondnet/vercel-action@v20
      with:
        vercel-token: ${{ secrets.VERCEL_TOKEN }}
        vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
        vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}
        vercel-args: '--prod'
\`\`\`

## Checklist de Implantação

Antes de implantar em produção, verifique:

- [ ] Todos os testes passam
- [ ] Build funciona localmente
- [ ] Variáveis de ambiente estão configuradas
- [ ] Imagens e assets estão otimizados
- [ ] SEO está configurado corretamente
- [ ] Análise de acessibilidade foi realizada
- [ ] Performance foi otimizada
- [ ] Segurança foi verificada

## Manutenção Pós-Implantação

Após a implantação, é importante:

1. Monitorar o desempenho e erros
2. Atualizar dependências regularmente
3. Realizar backups periódicos
4. Planejar atualizações e novas funcionalidades

## Rollback

Em caso de problemas após a implantação:

1. Na Vercel, acesse o dashboard do projeto
2. Vá para a aba "Deployments"
3. Encontre a versão estável anterior
4. Clique em "..." > "Promote to Production"

## Conclusão

Seguindo este guia, você poderá implantar o projeto em um ambiente de produção de forma segura e eficiente. Lembre-se de que a implantação é apenas o início - a manutenção contínua é essencial para garantir que o site permaneça seguro, rápido e funcional.
