# Grupo Farma

Sistema web para administração de farmácia, permitindo o gerenciamento de clientes, produtos, vendas e funcionários. O sistema conta com dois tipos de usuários: administradores, com controle total sobre o sistema, e vendedores, com acesso limitado a funcionalidades relacionadas a vendas e clientes.

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
├── Padroes-Adotados                                                             -- Padrões adotados na execução do projeto
├── Requisitos                                                                   -- Diagramas e requisitos
├── server                                                                       -- Código referente ao Back-end
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
└── web                                                                          -- Código referente ao Front-end
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
