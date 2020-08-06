# Proffy: Back-end

### ⚒️ Features

- [x] Cadastro de aulas
- [x] Listagem de aulas
- [x] Criação de conexões

### ⚙️ Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/).
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

### 👩‍💻 Utilização

#### Clonando o repositório

```bash
# Clone este repositório
$ git clone <git@github.com:Fekleite/proffy.git>

# Acesse a pasta do projeto no terminal/cmd
$ cd proffy
```

#### Instalando as dependências

```bash
# Acesse a pasta do servidor no terminal/cmd
$ cd server

# Instale as dependências
$ yarn install 
```

#### Iniciando o servidor

```bash
# Execute a aplicação em modo de desenvolvimento
$ yarn start

# O servidor inciará na porta:3333 - acesse <http://localhost:3333>
```

### 🚀 Tecnologias

- [Typescript](https://www.typescriptlang.org/)
- [Node.js](https://nodejs.org/en/)
- [Express](https://expressjs.com/)
- [Sqlite](https://www.sqlite.org/index.html)
- [Knex](http://knexjs.org/)

### 🚀 Endpoints:

- **GET**: `/classes` - Listagem das aulas
- **POST**: `/classes` - Cadastro de aulas
- **GET**: `/connections` - Listagem de conexões
- **POST**: `/connections` - Criação de Conexões

### 📝 Licença:

<p style="font-size: 16px; color: #fff;">Este projeto está licenciado sob a licença MIT - consulte a página <a href="https://opensource.org/licenses/MIT" style=" font-size: 16px; " >LICENSE</a> para obter detalhes.</p>
