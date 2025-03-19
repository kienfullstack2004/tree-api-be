const { v4 } = require("uuid");
const db = require("../models/index");

module.exports.createTreeService = ({ nameTree, desTree, zalo, imageTree }) => new Promise(async (relsove, reject) => {
    try {
        const responsive = await db.Tree.create({
            nameTree,
            id: v4(),
            desTree,
            zalo,
            imageTree

        })

        return relsove({
            err: responsive ? 0 : 1,
            msg: responsive ? "OK" : "Fail!"
        })

    } catch (error) {
        return reject(error);
    }
})

module.exports.getAllTreeService = () => new Promise(async (relsove, reject) => {
    try {
        const responsive = await db.Tree.findAll({});
        return relsove({
            err: responsive ? 0 : 1,
            msg: responsive ? "OK" : "FAIL",
            data: responsive ? responsive : null
        })
    } catch (error) {
        return reject(err);
    }
});

module.exports.deleteTreeServer = ({ id }) => new Promise(async (relsove, reject) => {
    try {
        const responsive = await db.Tree.destroy({
            where: { id }
        });
        return relsove({
            err: responsive ? 0 : 1,
            msg: responsive ? "Delete success !" : "Detele fail",
        })
    } catch (error) {
        return reject(error);
    }
})

module.exports.createMedicineService = ({ nameMedicine, desMedicineShort, desMedicinedetail, imageMedicine }) => new Promise(async (relsove, reject) => {
    try {
        const responsive = await db.Medicine.create({
            id: v4(),
            nameMedicine,
            desMedicineShort,
            desMedicinedetail,
            imageMedicine
        })
        return relsove({
            err: responsive ? 0 : 1,
            msg: responsive ? "Create successfull!" : "Create fail!",

        })
    } catch (err) {
        return reject(err);
    }
})

module.exports.getAllMedicineService = () => new Promise(async (relsove, reject) => {
    try {
        const responsive = await db.Medicine.findAll({});
        return relsove({
            err: responsive ? 0 : 1,
            msg: responsive ? "Get All Success !" : "Get All Fail!",
            data: responsive ? responsive : null
        })
    } catch (err) {
        return reject(err);
    }
})

module.exports.deleteMedicineService = ({ id }) => new Promise(async (relsove, reject) => {
    try {
        const responsive = await db.Medicine.destroy({
            where: { id },
        })
        return relsove({
            err: responsive ? 0 : 1,
            msg: responsive ? "Xoa thanh cong" : "Xoa khong thanh cong",
        })
    } catch (error) {

    }
})

module.exports.updateTreeService = ({ id, desTree, nameTree, imageTree }) => new Promise(async (relsove, reject) => {
    try {
        const resposnive = await db.Tree.update({ nameTree, desTree, imageTree },{
            where: { id },
        }, )

        return relsove({
            err: resposnive ? 0 : 1,
            msg: resposnive ? "Update success!" : "Update fail!",
        })
    } catch (error) {
        return reject(error);
    }
})


module.exports.updateMedicineService = ({ id, nameMedicine, desMedicineShort, desMedicinedetail, imageMedicine }) => new Promise(async (relsove, reject) => {
    try {
        const resposnive = await db.Medicine.update( { nameMedicine, desMedicineShort, desMedicinedetail, imageMedicine },{
            where: { id },
        },)

        return relsove({
            err: resposnive ? 0 : 1,
            msg: resposnive ? "Update success!" : "Update fail!",
        })
    } catch (error) {
        return reject(error);
    }
}) 