CREATE EXTENSION IF NOT EXISTS vector;

-- Garantir que o usuário docker tenha todas as permissões necessárias
GRANT ALL PRIVILEGES ON DATABASE agents TO docker;
GRANT ALL PRIVILEGES ON SCHEMA public TO docker;
GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public TO docker;
GRANT ALL PRIVILEGES ON ALL SEQUENCES IN SCHEMA public TO docker;