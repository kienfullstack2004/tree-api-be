const express = require("express");
const router = express.Router();

const controller = require("../controllers/post.controller");

router.get('/allnews',controller.getAllNews);
router.get('/getAllCountComment',controller.getAllCountCommentMedicine);
router.post('/create',controller.createPost);
router.get('/getAllPost',controller.getAllPost);
router.get('/:search',controller.searchPost);
router.post('/updateNews',controller.updateNews);
router.delete('/deletenews/:id',controller.deleteNews);
router.get('/news/:id',controller.detailNew);

module.exports = router;