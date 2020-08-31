## instalação

```bash
npm install
```

# CRUD-EBARN

##### Uso do sistema:
* Para funcionar o sistema perfeitamente é preciso pegar o arquivo ebarn.sql e importar ao banco de dados MYSQL:
- E dentro do arquivo "src/config/dbconfig.js --> É preciso mudar os dados de conexão ao banco de dados.
```
const dbConfig = {
    dialect: 'mysql',
    host: 'localhost',
    username: 'root', --> mude o usuario de acesso, caso seja necessario.
    password: '!joel451236', --> mude a senha
    database: 'ebarn'
}
```
