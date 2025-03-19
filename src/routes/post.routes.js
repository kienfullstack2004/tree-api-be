const express = require("express");
const router = express.Router();

const controller = require("../controllers/post.controller");

// 
router.post('/createNew',controller.createNew);
router.get('/allnews',controller.getAllNews);
router.get('/getAllCountComment',controller.getAllCountCommentMedicine);
router.get('/getAllPost',controller.getAllPost);
router.get('/:search',controller.searchPost);
router.post('/updateNews',controller.updateNews);
// [method]:id
router.delete('/deletenews/:id',controller.deleteNews);
router.get('/news/:id',controller.detailNew);

module.exports = router;