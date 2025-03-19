const db = require("../models");
const { v4 } = require("uuid");
const jwt = require("jsonwebtoken");
const bcryt = require("bcryptjs");
require("dotenv").config();

const hasPass = pass => bcryt.hashSync(pass, bcryt.genSaltSync(12));


module.exports.registerService = ({ username, pass, phone, avatar = "/src/assets/images/user.jpg" }) => new Promise(async (relsove, reject) => {
    try {
        const responsive = await db.User.findOrCreate({
            where: { phone },
            defaults: {
                id: v4(),
                username,
                pass: hasPass(pass),
                phone,
                avatar
            }
        })

        relsove({
            err: responsive[1] ? 0 : 1,
            msg: responsive[1] ? "Đăng ky thanh cong !" : "Dang ky that bai"
        });
    } catch (error) {
        return reject(error);
    }
})

module.exports.loginService = ({ phone, pass }) => new Promise(async (relsove, reject) => {
    try {
        const responsive = await db.User.findOne({
            where: { phone },
            raw: true
        })

        const isCorrectPass = responsive && bcryt.compareSync(pass, responsive.pass);

        const token = isCorrectPass && jwt.sign({ id: responsive.id, username: responsive.username, phone: responsive.phone, avatar: responsive.avatar }, process.env.SECRET_JWT, { expiresIn: '2d' });

        relsove({
            err: token ? 0 : 1,
            msg: token ? "Dang nhap thanh cong" : isCorrectPass ? "Mat khau sai" : "Tai khoan khong ton tai",
            access_token: token || null
        })
    } catch (error) {
        return reject(error);
    }
})

module.exports.createCommentService = ({ username, avatar }, { des, postId }) => new Promise(async (relsove, reject) => {
    try {

        const responsive = await db.Comment.create({
            id: v4(),
            des,
            author: username,
            avatar,
            postId
        })
        return relsove({
            err: responsive ? 0 : 1,
            msg: responsive ? "Created comment is sucessfully!" : "Create comment is fail",
        })
    } catch (error) {
        return reject(error);
    }
})

module.exports.getAllPostCommentService = ({ id }) => new Promise(async (relsove, reject) => {
    try {

        const responsive = await db.Comment.findAll({
            where: { postId: id },
            include: [
                { model: db.User, attributes: ["username", "avatar"], as: "authorName" }
            ]
        });
        return relsove({
            err: responsive ? 0 : 1,
            msg: responsive ? "Ok" : "fail",
            data: responsive ? responsive : null
        })
    } catch (error) {
        return reject(error);
    }
})

module.exports.getOneUserService = ({ id }) => new Promise(async (relsove, reject) => {
    try {

        // console.log(id);
        const responsive = await db.User.findOne({
            where: { id },
            attributes: {
                exclude: ["createdAt", "updatedAt"]
            },
            include: [
                { model: db.Role, attributes: ["code", "value"], as: "role_code" }
            ],
            raw: true,
            nest: true
        })
        return relsove({
            err: responsive ? 0 : 1,
            msg: responsive ? "OK" : "FIAL",
            user: responsive ? responsive : null
        })
    } catch (error) {
        return reject(error);
    }
})

module.exports.updateUserService = ({ id, username, phone, avatar }) => new Promise(async (relsove, reject) => {
    try {
        const responsive = await db.User.update({ username, phone, avatar }, {
            where: { id }
        });
        return relsove({
            err: responsive ? 0 : 1,
            msg: responsive ? "Update success" : "Update faild!",
        })
    } catch (error) {
        return reject(error);
    }
});

module.exports.getAllUserService = () => new Promise(async (relsove, reject) => {
    try {
        const responsive = await db.User.findAll({
            attributes: {
                exclude: ["pass"],
            },
            include: [
                { model: db.Role, attributes: ["code", "value"], as: "role_code" },
            ],
            nest: true
        });
        return relsove({
            err: responsive ? 0 : 1,
            msg: responsive ? "Ok" : "Fail",
            data: responsive ? responsive : null
        })
    } catch (error) {
        return reject(error);
    }
})

// module.exports.getUserService = () => new Promise(async(relsove,reject)=>{
//     try { 
//         const responsive = await db.User.findAll({});
//         return relsove({
//             err:responsive ? 0 : 1,
//             msg:responsive ? "Ok" : "Fail",
//             data:responsive ? responsive : null
//         })
//     } catch (error) {
//         return reject(error);
//     }
// })

module.exports.testUserService = () => new Promise(async (relsove, reject) => {
    try {


        const responsive = await db.User.findAll({});

        //

        relsove({
            err: 1,
            msg: responsive,
        })
        // console.log(responsive);
    } catch (error) {
        return reject(error);
    }
})

module.exports.registerServiceAuth = () => new Promise(async (relsove, reject) => {
    try {
        // const responsive = await db.User.findAll({})
        return relsove({
            err: 0,
            msg: 'Resopon'
        })
    } catch (error) {
        return reject(error);
    }
});

module.exports.getCountCommentService = ({ id }) => new Promise(async (relsove, reject) => {
    try {
        const responsive = await db.Comment.findAndCountAll({
            where: { postId: id },
            raw: true
        })
        console.log(responsive)
        relsove({
            err: responsive ? 0 : 1,
            msg: responsive ? "Get All" : "Fail",
            count: responsive ? responsive.count : 0
        });
    } catch (error) {
        return reject(error);
    }
})

module.exports.deleteAccountService = ({ id }) => new Promise(async (relsove, reject) => {
    try {
        const responsive = await db.User.destroy({ where: { id } })
        return relsove({
            err: responsive ? 0 : 1,
            msg: responsive ? "Delete Success" : "Delete fail"
        })
    } catch (error) {
        return reject(error);
    }
})

module.exports.updateAccountService = ({ id, phone, username,pass,avatar }) => new Promise(async (relsove, reject) => {
    try {
        const responsive = await db.User.update({ phone, username,pass:hasPass(pass),avatar },{
            where: { id },
        })

       
   

        console.log(responsive)
         

        return relsove({
            err: responsive ? 0 : 1,
            msg: responsive ? "Update success" : "Update fail!"
        })
    } catch (error) {
        return reject(error);
    }
}) 