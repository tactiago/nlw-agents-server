# NLW Agents

Este projeto é o backend do **NLW Agents**, desenvolvido durante um evento da Rocketseat.

## Tecnologias e Bibliotecas Principais

- **Node.js** + **TypeScript**
- **Fastify**: Framework web para APIs rápidas
- **Drizzle ORM**: ORM para PostgreSQL
- **Zod**: Validação de esquemas
- **dotenv**: Gerenciamento de variáveis de ambiente
- **@fastify/cors**: Suporte a CORS
- **biome**/**ultracite**: Lint e formatação de código

## Padrões de Projeto

- Estrutura modular por domínio (ex: `db/`, `http/`)
- Validação de dados com Zod
- Lint e formatação automáticos via Biome/Ultracite
- Configuração estrita do TypeScript (`strict: true`)

## Setup e Configuração

1. **Clone o repositório e instale as dependências:**
   ```bash
   npm install
   ```
2. **Configure o banco de dados:**
   - O projeto utiliza PostgreSQL. Você pode subir um container local com:
     ```bash
     docker-compose up -d
     ```
   - As credenciais padrão estão em `docker-compose.yml`.
3. **Configure as variáveis de ambiente:**
   - Crie um arquivo `.env` na raiz com:
     ```env
     DATABASE_URL=postgresql://docker:docker@localhost:5433/agents
     PORT=3333
     ```
4. **Rode as migrações e o seed:**
   ```bash
   npm run db:seed
   ```
5. **Inicie o servidor em modo desenvolvimento:**
   ```bash
   npm run dev
   ```

## Endpoints Principais

- `GET /rooms`: Lista as salas cadastradas
- `GET /health`: Healthcheck da API

## Observações

- O projeto segue padrões de código e formatação definidos pelo Biome/Ultracite.
- O ORM utilizado é o Drizzle, com migrations e seed automatizados.
- Desenvolvido durante o evento NLW da Rocketseat.
