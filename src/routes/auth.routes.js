const express = require("express");
const router = express.Router();
const {VerifyToken} = require("../middleware/handleVerify");

const controllers = require("../controllers/auth.controllers");

// [POST] api/v1/auth/register
router.post('/register',controllers.register);
// [POST] api/v1/auth/login
router.post('/login',controllers.login);
// [POST] api/v1/auth/updateUser
router.post('/update',controllers.updateUser)
// [POST] api/v1/auth/createcomment
router.post('/createcomment',VerifyToken,controllers.comment);
// [GET] api/v1/auth/getOneUserCurrent
router.get('/getOneUserCurrent',VerifyToken,controllers.getOneUser)
// [GET] api/v1/auth/getAllUser
router.get('/getAllUser',controllers.getAllUser);

router.post('/updateAccount',controllers.updateAccount);
// [GET] api/v1/auth/getcomment
router.get('/res',controllers.registerLoad);
router.delete('/deleteAccount/:id',controllers.deleteAccount);
router.get('/getcomment/:id',controllers.getCommentOnePost);
// router.get('/getUser',controllers.getUser);
router.get('/getCountComent/:id',controllers.getCountCommentPost);
// [GET] api/v1/auth/getuser


module.exports = router;