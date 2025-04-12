# Autenticação e Autorização


## Visão Geral

Como este é um projeto frontend, o sistema de autenticação é simulado utilizando localStorage para persistir o estado de autenticação entre sessões. Em um ambiente de produção, este sistema seria substituído por uma implementação real com backend.

## Componentes de Autenticação

### Auth Provider

O componente `AuthProvider` (`/components/cursos/auth-provider.tsx`) é o coração do sistema de autenticação:

- Utiliza Context API para fornecer estado de autenticação a toda a aplicação
- Gerencia o estado do usuário atual
- Fornece funções para login e logout
- Persiste o estado de autenticação no localStorage

\`\`\`tsx
// Exemplo simplificado do AuthProvider
export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Verificar se há um usuário no localStorage ao iniciar
  useEffect(() => {
    try {
      const storedUser = localStorage.getItem("cursosUser");
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
    } catch (error) {
      setError("Erro ao recuperar dados de autenticação");
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Funções de login e logout
  const login = (userData: User) => {
    setUser(userData);
    localStorage.setItem("cursosUser", JSON.stringify(userData));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("cursosUser");
  };

  return (
    <AuthContext.Provider value={{ user, isLoading, error, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
\`\`\`

### Hook useAuth

O hook `useAuth` permite que componentes acessem o contexto de autenticação:

\`\`\`tsx
export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
\`\`\`

### Formulário de Login

O componente `LoginForm` (`/components/cursos/login-form.tsx`) gerencia a interface de autenticação:

- Formulário de login com validação
- Opção para criar nova conta
- Feedback de erros
- Integração com o AuthProvider

## Tipos de Usuário

O sistema suporta dois tipos de usuário:

### Usuário Comum

\`\`\`tsx
{
  id: "1",
  name: "João Silva",
  email: "usuario@empresa.com",
  role: "user",
  department: "Marketing"
}
\`\`\`

### Administrador

\`\`\`tsx
{
  id: "2",
  name: "Admin",
  email: "admin@empresa.com",
  role: "admin",
  department: "TI"
}
\`\`\`

## Fluxo de Autenticação

### Login

1. Usuário acessa a página de login (`/cursos`)
2. Preenche o formulário com email e senha
3. O sistema verifica as credenciais (simulado)
4. Se válidas, o usuário é autenticado e redirecionado para o dashboard
5. O estado de autenticação é persistido no localStorage

### Logout

1. Usuário clica no botão de logout
2. O estado de autenticação é limpo
3. O usuário é redirecionado para a página de login

### Verificação de Autenticação

Cada página protegida verifica se o usuário está autenticado:

\`\`\`tsx
export default function ProtectedPage() {
  const { user, isLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && !user) {
      router.push("/cursos");
    }
  }, [user, isLoading, router]);

  if (isLoading || !user) {
    return <div>Carregando...</div>;
  }

  return <div>Conteúdo protegido</div>;
}
\`\`\`

## Autorização

Além da autenticação, o sistema implementa autorização baseada em roles:

### Verificação de Role

\`\`\`tsx
export default function AdminPage() {
  const { user, isLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && !user) {
      router.push("/cursos");
    }

    // Verificar se o usuário é administrador
    if (!isLoading && user && user.role !== "admin") {
      router.push("/cursos/dashboard");
    }
  }, [user, isLoading, router]);

  if (isLoading || !user) {
    return <div>Carregando...</div>;
  }

  if (user.role !== "admin") {
    return <div>Acesso não autorizado</div>;
  }

  return <div>Conteúdo administrativo</div>;
}
\`\`\`

### Renderização Condicional

Componentes podem renderizar conteúdo diferente baseado na role do usuário:

\`\`\`tsx
function ConditionalContent() {
  const { user } = useAuth();
  const isAdmin = user?.role === "admin";

  return (
    <div>
      {isAdmin ? (
        <AdminContent />
      ) : (
        <UserContent />
      )}
    </div>
  );
}
\`\`\`

## Navegação Condicional

A barra lateral (`DashboardSidebar`) mostra diferentes opções de menu baseadas na role do usuário:

\`\`\`tsx
export function DashboardSidebar() {
  const { user } = useAuth();
  const isAdmin = user?.role === "admin";

  const items = [
    // Itens comuns
    {
      href: "/cursos/dashboard/cursos",
      title: "Cursos",
      icon: <BookOpen />,
    },
    // Itens específicos para usuários
    {
      href: "/cursos/dashboard/certificados",
      title: "Certificados",
      icon: <Award />,
      userOnly: true,
    },
    // Itens específicos para admins
    {
      href: "/cursos/dashboard/admin",
      title: "Administração",
      icon: <Users />,
      adminOnly: true,
    },
  ];

  return (
    <nav>
      {items
        .filter((item) => (!item.adminOnly || isAdmin) && (!item.userOnly || !isAdmin))
        .map((item) => (
          <Link key={item.href} href={item.href}>
            {item.icon}
            {item.title}
          </Link>
        ))}
    </nav>
  );
}
\`\`\`

## Segurança

Embora este seja um projeto frontend com autenticação simulada, em um ambiente de produção seria necessário implementar:

- Autenticação baseada em tokens (JWT)
- HTTPS para todas as comunicações
- Proteção contra CSRF
- Validação de entrada em todos os formulários
- Expiração de sessão
- Proteção de rotas no backend

## Próximos Passos

Para implementar este projeto em um ambiente de produção, seria necessário:

1. Desenvolver um backend real com API de autenticação
2. Substituir o localStorage por cookies seguros ou tokens JWT
3. Implementar medidas de segurança adicionais
4. Adicionar funcionalidades como recuperação de senha e verificação de email
