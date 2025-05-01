# Plano de Desenvolvimento da Wiki de Ragnarok Online

## Visão Geral do Projeto

Estamos desenvolvendo um sistema completo de Wiki para Ragnarok Online com uma abordagem em fases:

1. **Primeira fase**: Frontend Web em React com tema escuro inspirado em Netflix/Spotify, incluindo painel administrativo para gerenciamento de conteúdo e sistema de usuários
2. **Segunda fase (futura)**: Aplicativo Android em React Native
3. **Backend comum** em Node.js com PostgreSQL que servirá ambas as plataformas

O sistema utiliza uma arquitetura moderna com API RESTful, sistema de autenticação, gerenciamento de conteúdo, e será desenvolvido de forma modular e amigável para usuários sem conhecimento técnico.

### Principais Recursos

- **Painel Administrativo Intuitivo**: Interface gráfica simples para adicionar e editar conteúdo sem necessidade de conhecimento em programação
- **Editor WYSIWYG**: Editor de texto rico estilo "o que você vê é o que você obtém" para formatação fácil
- **Sistema de Autenticação Completo**: Login/registro de usuários com diferentes níveis de permissão
- **Perfil de Usuário**: Histórico de navegação, itens favoritos e conteúdo personalizado
- **Player de Vídeo Integrado**: Suporte para incorporação de vídeos do YouTube e outras plataformas
- **Drawer Lateral para Usuários**: Painel deslizante que aparece da esquerda para a direita com as opções do usuário

## Estrutura Completa do Projeto

### Estrutura de Pastas Principal

```
ragnarok-wiki/                # Projeto principal (raiz)
├── frontend/                 # Frontend Web (React) - FASE 1
├── backend/                  # Backend API (Node.js/Express)
└── mobile/                   # Aplicativo Android (React Native) - FASE 2
```

## FASE 1: DESENVOLVIMENTO WEB (FRONTEND REACT)

### 1. Estrutura Detalhada do Frontend Web

```
frontend/
├── node_modules/            # Módulos instalados (gerado automaticamente)
├── public/
│   ├── assets/
│   │   ├── images/          # Imagens estáticas
│   │   │   ├── logo.png
│   │   │   ├── monsters/    # Imagens dos monstros
│   │   │   │   ├── poring.png
│   │   │   │   ├── drops.png
│   │   │   │   ├── boss/
│   │   │   │   └── mvp/
│   │   │   ├── items/       # Imagens dos itens
│   │   │   │   ├── weapons/
│   │   │   │   ├── armors/
│   │   │   │   ├── cards/
│   │   │   │   └── consumables/
│   │   │   ├── maps/        # Imagens dos mapas
│   │   │   │   ├── world-map.png
│   │   │   │   ├── cities/
│   │   │   │   ├── dungeons/
│   │   │   │   └── instances/
│   │   │   ├── ui/          # Imagens da interface
│   │   │   │   ├── backgrounds/
│   │   │   │   ├── banners/
│   │   │   │   ├── admin/   # Imagens do painel admin
│   │   │   │   └── user/    # Imagens do painel usuário
│   │   │   └── placeholder-image.png
│   │   └── icons/          # Ícones para a interface
│   │       ├── classes/    # Ícones das classes
│   │       ├── elements/   # Ícones dos elementos
│   │       ├── stats/      # Ícones de atributos
│   │       └── ui/         # Ícones de interface
│   ├── favicon.ico         # Ícone da página
│   └── index.html          # HTML principal
├── src/
│   ├── components/         # Componentes reutilizáveis
│   │   ├── Header/
│   │   │   ├── index.jsx   # Componente de cabeçalho
│   │   │   └── styles.js   # Estilos do cabeçalho
│   │   ├── Footer/
│   │   │   ├── index.jsx   # Componente de rodapé
│   │   │   └── styles.js   # Estilos do rodapé
│   │   ├── Card/
│   │   │   ├── index.jsx   # Cartão genérico para itens/monstros
│   │   │   └── styles.js   # Estilos do cartão
│   │   ├── LoadingSpinner/
│   │   │   ├── index.jsx   # Indicador de carregamento
│   │   │   └── styles.js   # Estilos do indicador
│   │   ├── SearchBar/
│   │   │   ├── index.jsx   # Barra de pesquisa
│   │   │   └── styles.js   # Estilos da barra de pesquisa
│   │   ├── Pagination/
│   │   │   ├── index.jsx   # Componente de paginação
│   │   │   └── styles.js   # Estilos da paginação
│   │   ├── StatDisplay/
│   │   │   ├── index.jsx   # Exibição de estatísticas
│   │   │   └── styles.js   # Estilos da exibição
│   │   ├── DropTable/
│   │   │   ├── index.jsx   # Tabela de drops
│   │   │   └── styles.js   # Estilos da tabela
│   │   ├── Sidebar/
│   │   │   ├── index.jsx   # Barra lateral para filtros
│   │   │   └── styles.js   # Estilos da barra lateral
│   │   ├── UserDrawer/     # Drawer lateral para usuário logado
│   │   │   ├── index.jsx   # Componente do drawer deslizante
│   │   │   └── styles.js   # Estilos do drawer
│   │   ├── VideoPlayer/    # Player de vídeo para embeds
│   │   │   ├── index.jsx   # Componente de player de vídeo
│   │   │   └── styles.js   # Estilos do player
│   │   ├── RichTextEditor/ # Editor de texto rico para admin
│   │   │   ├── index.jsx   # Componente de editor
│   │   │   └── styles.js   # Estilos do editor
│   │   ├── ImageUploader/  # Componente para upload de imagens
│   │   │   ├── index.jsx   # Componente de upload
│   │   │   └── styles.js   # Estilos do uploader
│   │   ├── Forms/          # Componentes de formulários
│   │   │   ├── LoginForm/  # Formulário de login
│   │   │   │   ├── index.jsx
│   │   │   │   └── styles.js
│   │   │   ├── RegisterForm/ # Formulário de cadastro
│   │   │   │   ├── index.jsx
│   │   │   │   └── styles.js
│   │   │   └── ContentForm/ # Formulário de conteúdo para admin
│   │   │       ├── index.jsx
│   │   │       └── styles.js
│   │   ├── AdminComponents/ # Componentes específicos para o admin
│   │   │   ├── DashboardCard/ # Card para o dashboard
│   │   │   │   ├── index.jsx
│   │   │   │   └── styles.js
│   │   │   ├── ContentBuilder/ # Construtor de conteúdo visual
│   │   │   │   ├── index.jsx
│   │   │   │   └── styles.js
│   │   │   ├── MediaLibrary/ # Biblioteca de mídia
│   │   │   │   ├── index.jsx
│   │   │   │   └── styles.js
│   │   │   ├── RelationshipBuilder/ # Para conectar itens/monstros
│   │   │   │   ├── index.jsx
│   │   │   │   └── styles.js
│   │   │   └── EmbedVideoTool/ # Ferramenta para embedar vídeos
│   │   │       ├── index.jsx
│   │   │       └── styles.js
│   │   ├── UserComponents/ # Componentes específicos para usuários
│   │   │   ├── FavoritesList/ # Lista de favoritos
│   │   │   │   ├── index.jsx
│   │   │   │   └── styles.js
│   │   │   ├── HistoryTimeline/ # Histórico de navegação
│   │   │   │   ├── index.jsx
│   │   │   │   └── styles.js
│   │   │   └── UserSettings/ # Configurações do usuário
│   │   │       ├── index.jsx
│   │   │       └── styles.js
│   │   └── ErrorBoundary/
│   │       ├── index.jsx   # Tratamento de erros
│   │       └── styles.js   # Estilos do tratamento
│   ├── pages/              # Páginas do site
│   │   ├── Home/
│   │   │   ├── index.jsx   # Página inicial
│   │   │   └── styles.js   # Estilos da página inicial
│   │   ├── Monsters/
│   │   │   ├── index.jsx   # Lista de monstros
│   │   │   ├── styles.js   # Estilos da lista
│   │   │   └── MonsterDetail/
│   │   │       ├── index.jsx # Detalhe do monstro
│   │   │       └── styles.js # Estilos do detalhe
│   │   ├── Items/
│   │   │   ├── index.jsx   # Lista de itens
│   │   │   ├── styles.js   # Estilos da lista
│   │   │   └── ItemDetail/
│   │   │       ├── index.jsx # Detalhe do item
│   │   │       └── styles.js # Estilos do detalhe
│   │   ├── Maps/
│   │   │   ├── index.jsx   # Lista de mapas
│   │   │   ├── styles.js   # Estilos da lista
│   │   │   └── MapDetail/
│   │   │       ├── index.jsx # Detalhe do mapa
│   │   │       └── styles.js # Estilos do detalhe
│   │   ├── Instances/
│   │   │   ├── index.jsx   # Lista de instâncias
│   │   │   ├── styles.js   # Estilos da lista
│   │   │   └── InstanceDetail/
│   │   │       ├── index.jsx # Detalhe da instância
│   │   │       └── styles.js # Estilos do detalhe
│   │   ├── Guides/         # Guias e tutoriais
│   │   │   ├── index.jsx   # Lista de guias
│   │   │   ├── styles.js   # Estilos da lista
│   │   │   └── GuideDetail/
│   │   │       ├── index.jsx # Detalhe do guia
│   │   │       └── styles.js # Estilos do detalhe
│   │   ├── Search/
│   │   │   ├── index.jsx   # Página de resultados de pesquisa
│   │   │   └── styles.js   # Estilos da página
│   │   ├── Auth/           # Páginas de autenticação
│   │   │   ├── Login/      # Página de login
│   │   │   │   ├── index.jsx
│   │   │   │   └── styles.js
│   │   │   └── Register/   # Página de registro
│   │   │       ├── index.jsx
│   │   │       └── styles.js
│   │   ├── UserProfile/    # Perfil do usuário
│   │   │   ├── index.jsx   # Página de perfil
│   │   │   ├── styles.js   # Estilos do perfil
│   │   │   ├── Favorites/  # Favoritos do usuário
│   │   │   │   ├── index.jsx
│   │   │   │   └── styles.js
│   │   │   └── History/    # Histórico do usuário
│   │   │       ├── index.jsx
│   │   │       └── styles.js
│   │   ├── Admin/          # Painel administrativo
│   │   │   ├── Dashboard/  # Dashboard principal
│   │   │   │   ├── index.jsx
│   │   │   │   └── styles.js
│   │   │   ├── ContentManager/ # Gerenciador de conteúdo
│   │   │   │   ├── index.jsx
│   │   │   │   └── styles.js
│   │   │   ├── MonsterManager/ # Gerenciador de monstros
│   │   │   │   ├── index.jsx
│   │   │   │   ├── styles.js
│   │   │   │   ├── CreateMonster/
│   │   │   │   │   ├── index.jsx
│   │   │   │   │   └── styles.js
│   │   │   │   └── EditMonster/
│   │   │   │       ├── index.jsx
│   │   │   │       └── styles.js
│   │   │   ├── ItemManager/ # Gerenciador de itens
│   │   │   │   ├── index.jsx
│   │   │   │   ├── styles.js
│   │   │   │   ├── CreateItem/
│   │   │   │   │   ├── index.jsx
│   │   │   │   │   └── styles.js
│   │   │   │   └── EditItem/
│   │   │   │       ├── index.jsx
│   │   │   │       └── styles.js
│   │   │   ├── MapManager/ # Gerenciador de mapas
│   │   │   │   ├── index.jsx
│   │   │   │   ├── styles.js
│   │   │   │   ├── CreateMap/
│   │   │   │   │   ├── index.jsx
│   │   │   │   │   └── styles.js
│   │   │   │   └── EditMap/
│   │   │   │       ├── index.jsx
│   │   │   │       └── styles.js
│   │   │   ├── GuideManager/ # Gerenciador de guias
│   │   │   │   ├── index.jsx
│   │   │   │   ├── styles.js
│   │   │   │   ├── CreateGuide/
│   │   │   │   │   ├── index.jsx
│   │   │   │   │   └── styles.js
│   │   │   │   └── EditGuide/
│   │   │   │       ├── index.jsx
│   │   │   │       └── styles.js
│   │   │   ├── MediaManager/ # Gerenciador de mídia
│   │   │   │   ├── index.jsx # Gerenciador de arquivos
│   │   │   │   ├── styles.js
│   │   │   │   ├── ImageLibrary/ # Biblioteca de imagens
│   │   │   │   │   ├── index.jsx
│   │   │   │   │   └── styles.js
│   │   │   │   └── VideoManager/ # Gerenciador de vídeos
│   │   │   │       ├── index.jsx
│   │   │   │       └── styles.js
│   │   │   └── UserManager/ # Gerenciador de usuários
│   │   │       ├── index.jsx
│   │   │       └── styles.js
│   │   └── NotFound/
│   │       ├── index.jsx   # Página 404
│   │       └── styles.js   # Estilos da página 404
│   ├── services/           # Serviços de API
│   │   ├── api.js          # Configuração do Axios
│   │   ├── monstersService.js # Serviço para monstros
│   │   ├── itemsService.js # Serviço para itens
│   │   ├── mapsService.js  # Serviço para mapas
│   │   ├── instancesService.js # Serviço para instâncias
│   │   ├── guidesService.js # Serviço para guias
│   │   ├── userService.js  # Serviço para usuários
│   │   ├── favoriteService.js # Serviço para favoritos
│   │   ├── historyService.js # Serviço para histórico
│   │   ├── mediaService.js # Serviço para gerenciamento de mídia
│   │   └── authService.js  # Serviço para autenticação
│   ├── utils/              # Funções auxiliares
│   │   ├── formatters.js   # Formatação de dados
│   │   ├── constants.js    # Constantes do app
│   │   ├── localStorage.js # Gerenciamento de armazenamento local
│   │   ├── validators.js   # Validadores de formulários
│   │   ├── elementHelpers.js # Funções auxiliares para elementos
│   │   ├── mediaHelpers.js # Funções para mídia (vídeo, imagens)
│   │   ├── videoEmbedParser.js # Parser para links de vídeo
│   │   └── relationshipHelpers.js # Funções para relacionar conteúdos
│   ├── hooks/              # Custom hooks
│   │   ├── useDebounce.js  # Hook para debounce na pesquisa
│   │   ├── useFetch.js     # Hook para chamadas de API
│   │   ├── useLocalStorage.js # Hook para localStorage
│   │   ├── useAuth.js      # Hook para autenticação
│   │   ├── useFavorites.js # Hook para gerenciar favoritos
│   │   ├── useHistory.js   # Hook para histórico de navegação
│   │   └── useMediaUpload.js # Hook para upload de mídia
│   ├── contexts/           # Contextos React
│   │   ├── ThemeContext.js # Contexto para o tema
│   │   ├── SearchContext.js # Contexto para pesquisa
│   │   ├── AuthContext.js  # Contexto para autenticação
│   │   ├── UserContext.js  # Contexto para dados do usuário
│   │   ├── FavoriteContext.js # Contexto para favoritos
│   │   ├── HistoryContext.js # Contexto para histórico
│   │   └── DrawerContext.js # Contexto para o drawer lateral
│   ├── App.jsx             # Componente principal
│   ├── index.js            # Ponto de entrada
│   ├── theme.js            # Configuração do tema escuro
│   ├── routes.js           # Configuração de rotas
│   ├── config.js           # Configurações gerais
│   └── PrivateRoute.jsx    # Componente para rotas protegidas
├── .eslintrc.js            # Configuração do ESLint
├── .prettierrc             # Configuração do Prettier
├── package.json            # Dependências e scripts
├── package-lock.json       # Lock de dependências
├── .gitignore              # Arquivos ignorados pelo Git
└── README.md               # Documentação do frontend
```

## BACKEND (COMUM AO WEB E MOBILE)

### 2. Estrutura Detalhada do Backend

```
backend/
├── node_modules/           # Módulos instalados (gerado automaticamente)
├── src/
│   ├── controllers/        # Controladores da API
│   │   ├── monsterController.js  # Controlador de monstros
│   │   ├── itemController.js     # Controlador de itens
│   │   ├── mapController.js      # Controlador de mapas
│   │   ├── instanceController.js  # Controlador de instâncias
│   │   ├── guideController.js     # Controlador de guias
│   │   ├── authController.js      # Controlador de autenticação
│   │   ├── userController.js      # Controlador de usuários
│   │   ├── favoriteController.js  # Controlador de favoritos
│   │   ├── historyController.js   # Controlador de histórico
│   │   ├── mediaController.js     # Controlador de mídia
│   │   └── searchController.js    # Controlador de pesquisa
│   ├── models/             # Modelos de dados
│   │   ├── Monster.js      # Modelo de monstro
│   │   │   ├── schema.js   # Schema do monstro
│   │   │   ├── queries.js  # Queries específicas
│   │   │   └── index.js    # Exportação do modelo
│   │   ├── Item.js         # Modelo de item
│   │   │   ├── schema.js   # Schema do item
│   │   │   ├── queries.js  # Queries específicas
│   │   │   └── index.js    # Exportação do modelo
│   │   ├── Map.js          # Modelo de mapa
│   │   │   ├── schema.js   # Schema do mapa
│   │   │   ├── queries.js  # Queries específicas
│   │   │   └── index.js    # Exportação do modelo
│   │   ├── Instance.js     # Modelo de instância
│   │   │   ├── schema.js   # Schema da instância
│   │   │   ├── queries.js  # Queries específicas
│   │   │   └── index.js    # Exportação do modelo
│   │   ├── Guide.js        # Modelo de guias
│   │   │   ├── schema.js   # Schema do guia
│   │   │   ├── queries.js  # Queries específicas
│   │   │   └── index.js    # Exportação do modelo
│   │   ├── User.js         # Modelo de usuário
│   │   │   ├── schema.js   # Schema do usuário
│   │   │   ├── queries.js  # Queries específicas
│   │   │   └── index.js    # Exportação do modelo
│   │   ├── Favorite.js     # Modelo de favoritos
│   │   │   ├── schema.js   # Schema de favoritos
│   │   │   ├── queries.js  # Queries específicas
│   │   │   └── index.js    # Exportação do modelo
│   │   ├── History.js      # Modelo de histórico
│   │   │   ├── schema.js   # Schema do histórico
│   │   │   ├── queries.js  # Queries específicas
│   │   │   └── index.js    # Exportação do modelo
│   │   └── Media.js        # Modelo de mídia
│   │       ├── schema.js   # Schema da mídia
│   │       ├── queries.js  # Queries específicas
│   │       └── index.js    # Exportação do modelo
│   ├── routes/             # Rotas da API
│   │   ├── monsters.js     # Rotas de monstros
│   │   ├── items.js        # Rotas de itens
│   │   ├── maps.js         # Rotas de mapas
│   │   ├── instances.js    # Rotas de instâncias
│   │   ├── guides.js       # Rotas de guias
│   │   ├── auth.js         # Rotas de autenticação
│   │   ├── users.js        # Rotas de usuários
│   │   ├── favorites.js    # Rotas de favoritos
│   │   ├── history.js      # Rotas de histórico
│   │   ├── media.js        # Rotas de mídia
│   │   ├── search.js       # Rotas de pesquisa
│   │   └── index.js        # Agregador de rotas
│   ├── middleware/         # Middlewares
│   │   ├── auth.js         # Autenticação
│   │   ├── roleCheck.js    # Verificação de roles (admin/user)
│   │   ├── errorHandler.js # Tratamento de erros
│   │   ├── logger.js       # Registro de logs
│   │   ├── upload.js       # Middleware para upload de arquivos
│   │   └── cache.js        # Cache de requisições
│   ├── config/             # Configurações
│   │   ├── database.js     # Configuração do banco
│   │   ├── corsOptions.js  # Configuração de CORS
│   │   ├── storage.js      # Configuração de armazenamento
│   │   └── app.js          # Configuração do Express
│   ├── utils/              # Utilitários
│   │   ├── helpers.js      # Funções auxiliares
│   │   ├── validators.js   # Validadores
│   │   ├── fileHelpers.js  # Auxiliares para arquivos
│   │   └── responseFormatter.js # Formatação de respostas
│   ├── database/           # Scripts de banco de dados
│   │   ├── migrations/     # Migrations do banco
│   │   │   ├── 20250401_create_monsters.js
│   │   │   ├── 20250401_create_items.js
│   │   │   ├── 20250401_create_maps.js
│   │   │   ├── 20250401_create_instances.js
│   │   │   ├── 20250401_create_guides.js
│   │   │   ├── 20250401_create_users.js
│   │   │   ├── 20250401_create_favorites.js
│   │   │   ├── 20250401_create_history.js
│   │   │   └── 20250401_create_media.js
│   │   └── seeds/          # Seeds do banco
│   │       ├── monsters.js # Dados iniciais de monstros
│   │       ├── items.js    # Dados iniciais de itens
│   │       ├── maps.js     # Dados iniciais de mapas
│   │       ├── instances.js # Dados iniciais de instâncias
│   │       └── users.js    # Dados iniciais de usuários
│   ├── services/           # Serviços de negócio
│   │   ├── monsterService.js
│   │   ├── itemService.js
│   │   ├── mapService.js
│   │   ├── instanceService.js
│   │   ├── guideService.js
│   │   ├── authService.js
│   │   ├── userService.js
│   │   ├── favoriteService.js
│   │   ├── historyService.js
│   │   ├── mediaService.js
│   │   └── searchService.js
│   └── app.js              # Ponto de entrada da aplicação
├── tests/                  # Testes automatizados
│   ├── unit/               # Testes unitários
│   │   ├── controllers/
│   │   ├── models/
│   │   └── services/
│   └── integration/        # Testes de integração
├── .env                    # Variáveis de ambiente (local)
├── .env.example            # Exemplo de variáveis de ambiente
├── .eslintrc.js            # Configuração do ESLint
├── .gitignore              # Arquivos ignorados pelo Git
├── package.json            # Dependências e scripts
├── package-lock.json       # Lock de dependências
└── README.md               # Documentação do backend
```

## FASE 2: DESENVOLVIMENTO MOBILE (FUTURO)

### 3. Estrutura Detalhada do Aplicativo Android (React Native)

```
mobile/
├── node_modules/          # Módulos instalados (gerado automaticamente)
├── app.json               # Configuração do Expo
├── App.tsx                # Ponto de entrada do app
├── assets/                # Recursos estáticos
│   ├── fonts/             # Fontes personalizadas
│   ├── images/            # Imagens (logo, splash, monstros, itens, mapas)
│   └── icons/             # Ícones do app
├── src/
│   ├── api/               # Chamadas à API
│   │   ├── index.ts       # Configuração do Axios
│   │   ├── monster.ts     # API de monstros
│   │   ├── item.ts        # API de itens
│   │   ├── map.ts         # API de mapas
│   │   ├── instance.ts    # API de instâncias
│   │   ├── guide.ts       # API de guias
│   │   ├── auth.ts        # API de autenticação
│   │   ├── user.ts        # API de usuários
│   │   ├── favorite.ts    # API de favoritos
│   │   └── history.ts     # API de histórico
│   ├── components/        # Componentes reutilizáveis
│   │   ├── common/        # Componentes comuns
│   │   │   ├── Header/    # Cabeçalho do app
│   │   │   ├── Loading/   # Indicador de carregamento
│   │   │   ├── ErrorView/ # Visualização de erro
│   │   │   ├── Card/      # Cartão para itens/monstros
│   │   │   ├── SearchBar/ # Barra de pesquisa
│   │   │   ├── Pagination/ # Componente de paginação
│   │   │   ├── StatBar/   # Barra de estatísticas
│   │   │   ├── DropList/  # Lista de drops
│   │   │   ├── FilterChip/ # Chip para filtros
│   │   │   └── VideoPlayer/ # Player de vídeo
│   │   ├── monsters/      # Componentes específicos para monstros
│   │   │   ├── MonsterCard/ # Card de monstro
│   │   │   ├── MonsterStats/ # Estatísticas do monstro
│   │   │   └── DropTable/ # Tabela de drops
│   │   ├── items/         # Componentes específicos para itens
│   │   │   ├── ItemCard/  # Card de item
│   │   │   ├── ItemStats/ # Estatísticas do item
│   │   │   └── ItemSource/ # Fonte do item
│   │   ├── maps/          # Componentes específicos para mapas
│   │   │   ├── MapCard/   # Card de mapa
│   │   │   ├── MapPreview/ # Visualização do mapa
│   │   │   └── MonsterList/ # Lista de monstros no mapa
│   │   ├── user/          # Componentes do usuário
│   │   │   ├── ProfileHeader/ # Cabeçalho do perfil
│   │   │   ├── FavoriteItem/ # Item favorito
│   │   │   └── HistoryItem/ # Item do histórico
│   │   └── guides/        # Componentes para guias
│   │       ├── GuideCard/ # Card de guia
│   │       ├── GuideStep/ # Passo do guia
│   │       └── TipBox/    # Caixa de dicas
│   ├── constants/         # Constantes do app
│   │   ├── colors.ts      # Cores do tema
│   │   ├── layout.ts      # Constantes de layout
│   │   ├── api.ts         # Endpoints da API
│   │   └── navigation.ts  # Rotas de navegação
│   ├── context/           # Contextos de estado global
│   │   ├── AuthContext.tsx # Contexto de autenticação
│   │   ├── ThemeContext.tsx # Contexto de tema
│   │   ├── FavoriteContext.tsx # Contexto de favoritos
│   │   └── HistoryContext.tsx # Contexto de histórico
│   ├── hooks/             # Custom hooks
│   │   ├── useAPI.ts      # Hook para chamadas de API
│   │   ├── useAuth.ts     # Hook para autenticação
│   │   ├── useTheme.ts    # Hook para tema
│   │   ├── useFavorites.ts # Hook para favoritos
│   │   ├── useHistory.ts  # Hook para histórico
│   │   └── useDebounce.ts # Hook para debounce
│   ├── navigation/        # Configuração de navegação
│   │   ├── AppNavigator.tsx # Navegador principal
│   │   ├── AuthNavigator.tsx # Navegador de autenticação
│   │   ├── TabNavigator.tsx # Navegador de abas
│   │   ├── MonsterNavigator.tsx # Navegador de monstros
│   │   ├── ItemNavigator.tsx # Navegador de itens
│   │   ├── MapNavigator.tsx # Navegador de mapas
│   │   └── ProfileNavigator.tsx # Navegador de perfil
│   ├── screens/           # Telas do app
│   │   ├── Home/          # Tela inicial
│   │   │   └── index.tsx  # Componente da tela inicial
│   │   ├── Monster/       # Telas de monstros
│   │   │   ├── MonsterList.tsx # Lista de monstros
│   │   │   └── MonsterDetail.tsx # Detalhe do monstro
│   │   ├── Item/          # Telas de itens
│   │   │   ├── ItemList.tsx # Lista de itens
│   │   │   └── ItemDetail.tsx # Detalhe do item
│   │   ├── Map/           # Telas de mapas
│   │   │   ├── MapList.tsx # Lista de mapas
│   │   │   └── MapDetail.tsx # Detalhe do mapa
│   │   ├── Instance/      # Telas de instâncias
│   │   │   ├── InstanceList.tsx # Lista de instâncias
│   │   │   └── InstanceDetail.tsx # Detalhe da instância
│   │   ├── Guide/         # Telas de guias
│   │   │   ├── GuideList.tsx # Lista de guias
│   │   │   └── GuideDetail.tsx # Detalhe do guia
│   │   ├── Search/        # Tela de pesquisa
│   │   │   └── index.tsx  # Componente da tela de pesquisa
│   │   ├── Auth/          # Telas de autenticação
│   │   │   ├── Login.tsx  # Tela de login
│   │   │   ├── Register.tsx # Tela de registro
│   │   │   └── ForgotPassword.tsx # Recuperação de senha
│   │   ├── Profile/       # Telas de perfil
│   │   │   ├── index.tsx  # Tela principal de perfil
│   │   │   ├── Favorites.tsx # Favoritos do usuário
│   │   │   ├── History.tsx # Histórico do usuário
│   │   │   └── Settings.tsx # Configurações do usuário
│   │   └── More/          # Tela de mais opções
│   │       ├── index.tsx  # Tela de mais opções
│   │       ├── About.tsx  # Sobre o app
│   │       └── Feedback.tsx # Feedback
│   ├── services/          # Serviços
│   │   ├── auth.ts        # Serviço de autenticação
│   │   ├── storage.ts     # Serviço de armazenamento local
│   │   ├── localization.ts # Serviço de localização
│   │   └── notifications.ts # Serviço de notificações
│   ├── styles/            # Estilos globais
│   │   ├── theme.ts       # Tema do app
│   │   ├── typography.ts  # Estilos de tipografia
│   │   └── spacing.ts     # Sistema de espaçamento
│   ├── types/             # Definições de tipos
│   │   ├── index.ts       # Tipos globais
│   │   ├── monster.ts     # Tipos para monstros
│   │   ├── item.ts        # Tipos para itens
│   │   ├── map.ts         # Tipos para mapas
│   │   ├── instance.ts    # Tipos para instâncias
│   │   ├── guide.ts       # Tipos para guias
│   │   ├── user.ts        # Tipos para usuários
│   │   └── navigation.ts  # Tipos para navegação
│   └── utils/             # Utilitários
│       ├── formatters.ts  # Formatadores de dados
│       ├── validators.ts  # Validadores
│       ├── permissions.ts # Gerenciamento de permissões
│       ├── linking.ts     # Manipulação de links externos
│       ├── imageCache.ts  # Cache de imagens
│       └── analytics.ts   # Análise de uso
├── __tests__/            # Testes
│   ├── components/       # Testes de componentes
│   └── screens/          # Testes de telas
├── android/              # Configurações nativas Android
│   ├── app/              # Configuração do aplicativo
│   └── gradle/           # Configuração do Gradle
├── ios/                  # Configurações nativas iOS (para possível expansão futura)
├── tsconfig.json         # Configuração do TypeScript
├── metro.config.js       # Configuração do Metro Bundler
├── babel.config.js       # Configuração do Babel
├── .eslintrc.js          # Configuração do ESLint
├── .prettierrc           # Configuração do Prettier
├── jest.config.js        # Configuração do Jest
├── package.json          # Dependências e scripts
├── README.md             # Documentação do app mobile
└── .gitignore            # Arquivos ignorados pelo Git
```

### 4. Funcionalidades Específicas do App Mobile

#### 4.1 Funcionalidades Principais

- **Navegação Intuitiva**: Sistema de abas inferiores e navegação por gestos
- **Modo Offline**: Armazenamento local dos dados mais acessados para uso sem internet
- **Notificações Push**: Alertas sobre novas adições ou atualizações de conteúdo
- **Compartilhamento Nativo**: Compartilhar informações via apps de mensagem ou redes sociais
- **Pesquisa Avançada com Filtros**: Busca rápida com filtros específicos para mobile
- **Tema Escuro Adaptativo**: Integração com configurações de tema do sistema

#### 4.2 Recursos Específicos para Mobile

- **Visualização de Mapa Interativo**: Zoom e pan em mapas do jogo
- **Calculadoras de Status**: Ferramentas para calcular builds de personagens
- **Timers de Boss**: Notificações para respawn de monstros chefe
- **Lista de Tarefas**: Checklist para progressão de quests ou farming
- **Salvamento de Builds**: Criação e compartilhamento de builds de personagens
- **Suporte a Tablets**: Layout adaptativo para diferentes tamanhos de tela
- **Modo Retrato e Paisagem**: Rotação automática da interface

#### 4.3 Integração com Recursos Nativos

- **Câmera**: Upload de screenshots para compartilhar ou pedir ajuda
- **Galeria**: Acesso às imagens salvas
- **Contatos**: Compartilhamento direto com amigos
- **Calendário**: Adicionar eventos de guild ou timers importantes
- **Biometria**: Login com impressão digital ou reconhecimento facial
- **Armazenamento Local**: Gerenciamento eficiente de cache

### 5. Estratégia de Desenvolvimento

#### 5.1 Abordagem de Implementação

- **Prototipação Inicial**: Criação de wireframes e protótipos interativos
- **Desenvolvimento por Módulos**: Implementação incremental por seções do app
- **Teste Beta**: Distribuição para testadores antes do lançamento público
- **Feedback dos Usuários**: Sistema integrado para sugestões e relatos de bugs

#### 5.2 Tecnologias e Bibliotecas

- **React Native**: Framework principal para desenvolvimento cross-platform
- **Expo**: Para acelerar o desenvolvimento inicial e gerenciar dependências nativas
- **TypeScript**: Para tipagem estática e melhor manutenção do código
- **React Navigation**: Para sistema de navegação entre telas
- **Redux Toolkit**: Para gerenciamento de estado global
- **React Query**: Para cache e gerenciamento de estado do servidor
- **Async Storage**: Para persistência de dados local
- **Styled Components**: Para estilização de componentes
- **React Native Reanimated**: Para animações fluidas
- **React Native SVG**: Para gráficos e ícones vetoriais
- **Firebase**: Para notificações push e análise

#### 5.3 Considerações de Performance

- **Lazy Loading**: Carregamento sob demanda para imagens e dados pesados
- **Paginação Eficiente**: Lista virtualizada para grandes conjuntos de dados
- **Cache de Imagens**: Armazenamento local de imagens frequentemente acessadas
- **Compressão de Dados**: Otimização do tamanho das transferências de dados
- **Inlining de Recursos Críticos**: Para renderização inicial mais rápida
- **Tree Shaking**: Eliminação de código não utilizado

### 6. Cronograma de Desenvolvimento Mobile (Estimativa)

1. **Planejamento e Design** (4 semanas)
   - Definição de requisitos específicos para mobile
   - Design de interfaces e fluxos de usuário
   - Prototipação e testes de usabilidade iniciais

2. **Configuração e Estrutura Base** (2 semanas)
   - Configuração do ambiente React Native/Expo
   - Implementação da estrutura de navegação
   - Configuração da conexão com a API existente

3. **Desenvolvimento dos Core Features** (8 semanas)
   - Implementação das funcionalidades principais
   - Integração com o backend existente
   - Desenvolvimento da lógica de cache offline

4. **Recursos Específicos para Mobile** (6 semanas)
   - Implementação de recursos exclusivos para plataforma móvel
   - Integração com recursos nativos (câmera, notificações, etc.)
   - Otimizações de interface para diferentes tamanhos de tela

5. **Testes e Otimização** (4 semanas)
   - Testes de usabilidade em diferentes dispositivos
   - Otimização de performance e consumo de bateria
   - Correção de bugs e refinamentos

6. **Lançamento e Pós-Lançamento** (2 semanas)
   - Preparação para publicação na Google Play Store
   - Monitoramento inicial e resposta a feedback
   - Planejamento de atualizações futuras

### 7. Integração com Sistema Web Existente

- **API Compartilhada**: Utilização da mesma API do sistema web com endpoints otimizados para mobile
- **Sincronização de Dados**: Sistema de sincronização entre favoritos e histórico das plataformas web e mobile
- **Autenticação Unificada**: Mesmas credenciais em ambas plataformas
- **Experiência Consistente**: Design system adaptado mas mantendo identidade visual
- **Analytics Cruzado**: Métricas de uso integradas entre plataformas

### 8. Considerações para Expansão Futura

- **Suporte a iOS**: Adaptação para publicação na App Store
- **Recursos Premium**: Desenvolvimento de recursos exclusivos para assinantes
- **Integrações com Discord/Telegram**: Bots e notificações em canais de comunidade
- **Mapa Mundial Interativo**: Visualização 3D dos mapas do jogo
- **Calculadoras Avançadas**: Simuladores de dano e eficiência
- **Comunidade In-App**: Fóruns e chat integrados ao aplicativo
- **Eventos Ao Vivo**: Sistema para acompanhar eventos do jogo em tempo real