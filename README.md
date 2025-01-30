# Grupo Farma

Sistema web para administração de uma farmácia, permitindo o gerenciamento de clientes, produtos, vendas e funcionários. O sistema conta com funcionários, que acessam o sistema como usuários e tem acesso total as funcionalidades do sistema.

## Desenvolvedores

* [Gabriel Coelho Costa](https://github.com/gabrielzinCoelho)
* [Harisson de Carvalho Alvarenga](https://github.com/harissonalvarenga)
* [Isac Gonçalves Cunha](https://github.com/Caquizeraa)

## Tecnologias Utilizadas

* Linguagem: JavaScript (versão associada ao ambiente de execução)
* Banco de Dados: PostgreSQL v17.2
* Back-End: Node.js v22.11.0 + fastify v5.1.0
* Front-End: React v18.3.1 + vite 6.0.2

## Estrutura de Pastas

```
├── Padroes-Adotados                                        -- Padrões adotados na execução do projeto
├── Requisitos                                              -- Diagramas e requisitos
├── server                                                  -- Código referente ao Back-end
│   ├── prisma
│   │   ├── migrations  
│   │   └── seeds
│   └── src
│       ├── env
│       ├── https
│       │   ├── controllers
│       │   └── middlewares
│       ├── lib
│       ├── services
│       └── @types
└── web                                                     -- Código referente ao Front-end
    └── src
        ├── assets
        ├── components
        ├── lib
        ├── pages
        ├── store
        ├── styles
        ├── @types
        └── utils
```
                                   
## Como rodar

1. Clone o repositório
2. Crie o arquivo .env no diretório server
```
server/.env

PORT=3333
NODE_ENV='dev'
DATABASE_URL='postgresql://root:root@localhost:5432/grupofarma?schema=public'
JWT_SECRET=jfshe438483u934kjgmfglmfrdofgkmo49804
```

3. Adicione um diretorio postgres-data na pasta server, com permissão de acesso
4. Rode os seguintes comandos no diretório server
```
sudo docker compose up
npm install
npm run dev
npx prisma migrate dev
npx prisma db seed
npx prisma studio
```

5. Crie o arquivo .env no diretório web
```
web/.env

VITE_API_URL='http://localhost:3333'
```
6. Rode os seguintes comandos no diretório web
```
npm install
npm run dev
```   

## Regras de Uso do Git

- Nomes dos commits não devem exceder 100 caracteres.
- Nomes dos commits devem ser intuitivos em relação à alteração vinculada;


## Boas Práticas de Programação Adotadas

- Todo trecho de código deve estar corretamente identado;
- Variáveis, métodos, funções, entre outros... devem possuir nomes significativos;
- Inserir comentários de forma precisa e sucinta, evitando explicações desnecessárias;
- Utilizar tratamento de erro (try/catch) visando prever erros esperados e inesperados;
- Nome de classes devem ser substantivos e nome de métodos devem ser verbos.
- Evitar, sempre que possível, duplicação de código.
