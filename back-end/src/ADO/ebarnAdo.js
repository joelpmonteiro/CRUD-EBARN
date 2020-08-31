const { sequelize } = require('../config/dbconfig');

module.exports = {
    updateTractorsAdo(objectTractors) {
        return sequelize.query(`UPDATE tractors SET nameTractors=:nameTractors,
        modelTractors = :modelTractors WHERE id = :id`, {
            replacements: {
                id: objectTractors.id,
                nameTractors: objectTractors.nameTractors,
                modelTractors: objectTractors.modelTractors,
                imgTractors: objectTractors.imgTractors
            },
            type: sequelize.QueryTypes.UPDATE
        }).then((result, met) => {
            console.log('resultado do UPDATE', result[1])
            return result;
        }).catch((err) => {
            console.log(err);
        })
    },
    insertCreateTractors(objectTractors, img) {
        return sequelize.query(`insert into tractors (id,nameTractors,modelTractors,imgTractors) 
        values (null, :nameTractors, :modelTractors,:imgTractors)`, {
            replacements: {
                nameTractors: objectTractors.nameTractors,
                modelTractors: objectTractors.modelTractors,
                imgTractors: img
            },
            type: sequelize.QueryTypes.INSERT
        }).then((result) => {
            console.log('resultado do insert')
            return result;
        }).catch((err) => {
            console.log(err);
        })
        // }).finally(() => {
        //     sequelize.close();
        // })
    },
    deleteTractors(id, nameTractors) {
        return sequelize.query(`DELETE from tractors where id = :id 
        and nameTractors = :nameTractors`, {
            replacements: {
                id: id,
                nameTractors: nameTractors,
            },
            type: sequelize.QueryTypes.INSERT
        }).then((result) => {
            console.log('resultado do delete')
            return result;
        }).catch((err) => {
            console.log(err);
        })
    },
    deleteAllTractors() {
        return sequelize.query(`DELETE from tractors`, {
            type: sequelize.QueryTypes.INSERT
        }).then((result) => {
            console.log('resultado do delete:', result)
            return result;
        }).catch((err) => {
            console.log(err);
        })
    },
    selectTractorsByName(objectTractors) {
        return sequelize.query('select nameTractors from tractors where nameTractors = :nameTractors',
            {
                replacements: {
                    nameTractors: objectTractors
                },
                type: sequelize.QueryTypes.SELECT
            }).then((result) => {
                console.log('resultado do SELECT')
                return result;
            }).catch((err) => {
                console.log(err);
            })
    },
    selectTractorsByIdName(objectTractors) {
        return sequelize.query('select * from tractors where id = :id',
            {
                replacements: {
                    id: objectTractors
                },
                type: sequelize.QueryTypes.SELECT
            }).then((result) => {
                console.log('resultado do SELECT: ', result)
                return result;
            }).catch((err) => {
                console.log(err);
            })
    },
    selectAllTractors() {
        return sequelize.query('select * from tractors', {
            type: sequelize.QueryTypes.SELECT
        }).then((result) => {
            console.log('resultado do SELECT: ', result)
            return result;
        }).catch((err) => {
            console.log(err);
        })
    }

}