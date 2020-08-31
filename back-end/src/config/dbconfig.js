const Sequelize = require('sequelize')

const dbConfig = {
    dialect: 'mysql',
    host: 'localhost',
    username: 'root',
    password: '!joel451236',
    database: 'ebarn'
}

let sequelize = new Sequelize(dbConfig);

let teste = sequelize.authenticate().then(() => {
    console.log('conexão feita com sucesso')
}).catch((err) => {
    console.log(err)
    console.log('erro na conexão');
})

module.exports = { sequelize, dbConfig, teste }