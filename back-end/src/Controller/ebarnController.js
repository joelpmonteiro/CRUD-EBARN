const ebarnAdo = require('../ADO/ebarnAdo');
const fs = require('fs')
const { v4: uuid } = require('uuid');
const { convertImgWebp } = require('../utils/util');
var base64Img = require('base64-img');
var path = require('path');
const imageToBase64 = require('image-to-base64');

// this will grant 755 permission to webp executables
function saveImage(baseImage) {
    /*path of the folder where your project is saved. (In my case i got it from config file, root path of project).*/
    const uploadPath = `${path.join(process.cwd())}`;
    //path of folder where you want to save the image.
    const localPath = `${uploadPath}/uploads/`;
    console.log(localPath)
        //Find extension of file
    const ext = baseImage.substring(baseImage.indexOf("/") + 1, baseImage.indexOf(";base64"));
    const fileType = baseImage.substring("data:".length, baseImage.indexOf("/"));
    //Forming regex to extract base64 data of file.
    const regex = new RegExp(`^data:${fileType}\/${ext};base64,`, 'gi');
    //Extract base64 data.
    const base64Data = baseImage.replace(regex, "");
    const filename = `${uuid()}.${ext}`;

    //Check that if directory is present or not.
    if (!fs.existsSync(`${uploadPath}/uploads/`)) {
        fs.mkdirSync(`${uploadPath}/uploads/`);
    }
    if (!fs.existsSync(localPath)) {
        fs.mkdirSync(localPath);
    }
    fs.writeFileSync(localPath + filename, base64Data, 'base64');
    console.log(filename)
    return filename;
}

async function selectTractorsController(nameTractors) {
    try {
        let objectTractors = nameTractors;
        console.log('ssearch', objectTractors.length)
        if (objectTractors.length === 0 || objectTractors === '') {
            res.status(404).json({ msg: 'nao foi enviado o nome do trator' })
        } else {
            let selectedTractors = await ebarnAdo.selectTractorsByName(objectTractors);
            if (selectedTractors[0] == undefined) {
                console.log('teste')
            } else {
                if (selectedTractors[0].nameTractors.length > 0) {
                    return 1;
                } else {
                    return 0;
                }
            }
        }

    } catch (error) {
        console.log('erro no insert', error)
    }
}

async function selectTractorsByIdController(id) {
    try {
        let objectTractors = id;
        console.log('ssearch', objectTractors.length)
        if (objectTractors.length === 0 || objectTractors === '') {
            res.status(404).json({ msg: 'nao foi enviado o id do trator' })
        } else {
            let selectedTractors = await ebarnAdo.selectTractorsByIdName(objectTractors);
            if (selectedTractors[0] == undefined) {
                console.log('teste')
            } else {
                if (selectedTractors[0].nameTractors.length > 0) {
                    return 1;
                } else {
                    return 0;
                }
            }
        }

    } catch (error) {
        console.log('erro no select: ', error)
    }
}
module.exports = {
    async selectedAllTractors(req, res) {
        try {


            let selectedAllTractors = await ebarnAdo.selectAllTractors();
            // console.log(selectedAllTractors.map(x => {
            //     console.log(x.imgTractors)
            // }))
            if (selectedAllTractors.length > 0) {
                for (let index = 0; index < selectedAllTractors.length; index++) {
                    // var testando = await base64Img.base64(path.join(process.cwd(), 'uploads', `/${selectedAllTractors[index].imgTractors}`), async function (err, data) {
                    //     if (err) throw err;
                    //     else testando = data;
                    // })


                    var dataimg = await base64Img.base64Sync(path.join(process.cwd(), 'uploads', `/${selectedAllTractors[index].imgTractors}`))
                    selectedAllTractors[index].imgTractors = dataimg;
                }
                selectedAllTractors.filter((x) => {

                    return x;
                })
                res.status(200).json({ code: 1, msg: 'dados consultado com sucesso,vejá a lista!', dados: selectedAllTractors })
            } else {
                res.status(200).json({ code: 0, msg: 'nenhum dado foi encontrado', dados: selectedAllTractors })
            }
        } catch (error) {
            console.log('erro no select: ', error)
        }
    },
    async updateTractors(req, res) {
        try {

            let updateTractors = req.body;
            console.log(req.body);
            if (updateTractors.nameTractors === 0) {
                res.status(404).json({ msg: 'ERRO os campos estão vazios!' })
            } else {
                if (updateTractors.id === 0 || updateTractors.nameTractors.length === 0 || updateTractors.modelTractors === 0) {
                    console.log('impossivel deletar o trators')
                    res.status(404).json({ msg: 'ERRO os campos estão vazios!' })

                } else {
                    let selectedTractors = await selectTractorsByIdController(updateTractors.id);
                    if (selectedTractors == 1) {

                        let updTractors = await ebarnAdo.updateTractorsAdo(updateTractors);
                        console.log('update: ', updTractors)
                        if (updTractors[1] > 0) {
                            res.status(200).json({ msg: 'Trator atualizado com sucesso' })
                        } else if (updTractors[1] == 0) {
                            res.status(200).json({ msg: 'nao houve nenhuma alteraçao nos dados do trator!' })

                        } else {
                            res.status(404).json({ msg: 'ERRO no processo de atualização de dados do trator!' })
                        }
                    } else {
                        res.status(404).json({ msg: 'nao existe esse trator!' })
                    }
                }
            }
        } catch (error) {
            console.log(error)
        }
    },
    async deleteTractors(req, res) {
        try {
            let { id, nameTractors } = req.params;
            console.log(req.params.id);
            if (id === 0 || nameTractors === '') {
                console.log('impossivel deletar o trators')
                res.status(404).json({ msg: 'ERRO os campos estão vazios!' })

            } else {
                let selectedTractors = await selectTractorsController(nameTractors);
                if (selectedTractors == 1) {

                    let deleteTractors = await ebarnAdo.deleteTractors(id, nameTractors);
                    if (deleteTractors.length > 0) {
                        res.status(200).json({ msg: 'Trator deletado com sucesso' })
                    } else {
                        res.status(404).json({ msg: 'ERRO no processo de deletar o trator!' })
                    }
                } else {
                    res.status(404).json({ msg: 'nao existe esse trator para deletar!' })
                }
            }
        } catch (error) {
            console.log(error)
        }
    },
    async deleteAllTractors(req, res) {
        try {
            let deleteAllTractors = await ebarnAdo.deleteAllTractors();
            console.log(deleteAllTractors[1] > 0)
            if (deleteAllTractors[1] > 0) {
                res.status(200).json({ msg: 'Tratores deletado com sucesso' })
            } else {
                res.status(404).json({ msg: 'ERRO no processo de deletar os trator!' })
            }

        } catch (error) {
            console.log(error)
        }
    },
    async insertCreateTractorsController(req, res) {
        try {
            //console.log(req.body)
            let { tractor, img } = req.body;
            //console.log(tractor)
            //console.log(img)

            if (tractor.nameTractors.length === 0 || tractor.modelTractors === 0 || img.length === 0) {
                res.status(404).json({ msg: 'Por favor preencha os dados corretamente para cadastrar um novo trator!' })
            } else {
                img = saveImage(img)
                let selectedTractors = await selectTractorsController(tractor.nameTractors);
                if (selectedTractors == 1) {
                    res.status(404).json({ msg: 'Já existe um trator com esse nome!' })

                } else {
                    let createTractors = await ebarnAdo.insertCreateTractors(tractor, img);
                    if (createTractors.length > 0) {
                        res.status(200).json({ msg: 'Trator cadastrado com sucesso' })
                    } else {
                        res.status(404).json({ msg: 'ERRO no processo de cadastro do trator!' })
                    }
                }
            }

        } catch (error) {
            console.log('erro no insert', error)
        }
    }

}