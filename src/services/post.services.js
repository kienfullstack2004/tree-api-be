const { v4 } = require("uuid");
const db = require("../models/index");
const { Op } = require("sequelize");

module.exports.createPostService = ({ title, image, titleShort, detail }) => new Promise(async (relsove, reject) => {
    try {
        const responsive = await db.Post.create({
            title,
            titleShort,
            id: v4(),
            detail,
            image
        })

        return relsove({
            err: responsive ? 0 : 1,
            msg: responsive ? "Created is success " : "Created is fail!"
        })
    } catch (error) {
        return reject(error);
    }
})


module.exports.getPostService = () => new Promise(async (relsove, reject) => {
    try {
        var listHavCount = [];
        const responsive = await db.Post.findAll({ raw: true });
        // console.log(responsive)
        responsive?.length > 0 && responsive.forEach(async (item, index) => {
            const respon = await db.Comment.findAndCountAll({
                where: { postId: item?.id },
                raw: true
            });
            item.count = respon.count;
            listHavCount.push(item);
            if (index == responsive.length - 1) {
                relsove({
                    err: responsive ? 0 : 1,
                    msg: responsive ? "Get Successfully!" : "Get fail !",
                    data: responsive ? listHavCount : null
                })

            }

        }
        );
    } catch (error) {
        return reject(error);
    }
})

module.exports.getMedicineService = () => new Promise(async (relsove, reject) => {
    try {
        // console.log(responsive)
        //    console.log(responsive)
        var listHavCount = [];
        const responsive = await db.Medicine.findAll({ raw: true });

        responsive?.length > 0 && responsive.forEach(async (item, index) => {
            const respon = await db.Comment.findAndCountAll({
                where: { postId: item?.id },
                raw: true
            });
            item.count = respon.count;
            listHavCount.push(item);
            if (index == responsive.length - 1) {
                relsove({
                    err: responsive ? 0 : 1,
                    msg: responsive ? "Get Successfully!" : "Get fail !",
                    data: responsive ? listHavCount : null
                })

            }

        }
        );
    } catch (error) {
        return reject(error);
    }
})

module.exports.searchPostService = ({ search }) => new Promise(async (relsove, reject) => {
    try {
        const responsive = await db.Post.findAll({
            where: {
                title: { [Op.like]: `%${search}%` }
            }
        })

        relsove({
            err: responsive ? 0 : 1,
            msg: responsive ? "OK" : "Fail",
            data: responsive ? responsive : null
        })
    } catch (error) {
        return reject(error);
    }
})

module.exports.deatilNewPost = ({ id }) => new Promise(async (relsove, reject) => {
    try {
        const responsive = await db.Post.findOne({
            where: { id },
            raw: true
        });
        return relsove({
            err: responsive ? 0 : 1,
            msg: responsive ? "OK" : "Fail",
            data: responsive ? responsive : null
        })
    } catch (error) {
        return reject(error);
    }
})

module.exports.getAllNewService = () => new Promise(async (relsove, reject) => {
    try {
        // console.log("Post")
        const responsive = await db.Post.findAll({});


        return relsove({
            err: responsive ? 0 : 1,
            msg: responsive ? "OK" : "Fail",
            data: responsive ? responsive : null
        })
    } catch (error) {
        return reject(error);
    }
})

module.exports.deleteNewsService = async ({ id }) => new Promise(async (relsove, reject) => {
    try {
        const responsive = await db.Post.destroy({
            where: { id }
        })

        return relsove({
            err: responsive ? 0 : 1,
            msg: responsive ? "DELETE SUCCESS !" : "DELETE FAIL!",
        })

    } catch (error) {
        return reject(error);
    }
})

module.exports.updateNewsService = ({ id, title, titleShort, image, detail }) => new Promise(async (relsove, reject) => {
    try {
        const responsive = await db.Post.update({ title, titleShort, detail, image },{
            where: { id }
        })
        relsove({
            err: responsive ? 0 : 1,
            msg: responsive ? "Update sucess !" : "Update fail!"
        })
    } catch (error) {
        return reject(error);
    }
}) 