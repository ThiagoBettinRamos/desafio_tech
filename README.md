<p align="center">
  <h1>📖 Online Schedule</h1>
</p>
<p align="center">O Online Schedule é uma avançada API projetada para simular funcionalidades de uma agenda digital. Desenvolvida com a utilização do framework ExpressJS, esta API é otimizada para proporcionar eficiência e robustez em suas operações. Além disso, para garantir integridade e segurança no manuseio dos dados, o "Online Schedule" emprega o TypeORM, que é um ORM (Object-Relational Mapping) muito popular para o gerenciamento de banco de dados, facilitando a integração entre a aplicação e as bases de dados. A segurança dos dados do usuário, especialmente no que diz respeito às senhas, é de suma importância. Por essa razão, o Bcrypt é utilizado para a criptografia das senhas, garantindo assim que elas permaneçam protegidas contra acessos não autorizados e potenciais ameaças. Ao escolher o "Online Schedule", os usuários e desenvolvedores podem ter a certeza de que estão utilizando uma ferramenta moderna, segura e altamente eficaz para suas necessidades de agenda online.</p>

---

## 🛠️ Instalando as dependências

Para iniciar este projeto, siga os passos:

### 📁 Exemplo Backend:

1. **Acessando a pasta do backend:**
    ```bash
    cd backend
    ```

2. **Instalando as dependências:**
    - Usando npm:
      ```bash
      npm install
      ```
    - Ou usando yarn:
      ```bash
      yarn install
      ```

---

### 📁 Exemplo Frontend:

1. **Acessando a pasta do frontend:**
    ```bash
    cd frontend/tech
    ```

2. **Instalando as dependências:**
    - Usando npm:
      ```bash
      npm install
      ```
    - Ou usando yarn:
      ```bash
      yarn install
      ```

<br>

<div align="center">
    <h2>
    2. Aplicar as migrações e gerar tabelas
    </h2>
    <p>Para gerar as tabelas com o TypeORM, é necessário utilizar o comando abaixo:</p>
</div>

```bash
Na pasta do frontend:

npm run typeorm migration:run -- -d ./src/data-source.ts

##ou

yarn typeorm migration:run -d ./src/data-source.ts
```
Para rodar a aplicação localmente, é necessário acessar a pasta de cada módulo e seguir as etapas abaixo:

---

### 📁 Exemplo Backend:

1. **Acessando a pasta do backend:**
    ```bash
    cd backend
    ```

2. **Rodando a aplicação localmente:**
    - Usando npm:
      ```bash
      npm run dev
      ```
    - Ou usando yarn:
      ```bash
      yarn dev
      ```

---

### 📁 Exemplo Frontend:

1. **Acessando a pasta do frontend:**
    ```bash
    cd frontend/tech
    ```

2. **Rodando a aplicação localmente:**
    - Usando npm:
      ```bash
      npm run dev
      ```
    - Ou usando yarn:
      ```bash
      yarn dev
      ```