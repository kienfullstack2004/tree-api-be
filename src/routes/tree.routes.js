const express = require("express");
const router = express.Router();

const controller = require("../controllers/tree.controller");

router.post('/createTree',controller.createTreeMedical);
router.get('/getAllTree',controller.getAllTree);
router.post('/createMedicine',controller.createMedicine);
router.get('/getAllMedicine',controller.getAllMedicine);
router.post('/updateTree',controller.updateTree);
router.post('/updateMedicine',controller.updateMedince);
router.delete('/deleteMedicine/:id',controller.deleteMedicine);
router.delete('/deleteTree/:id',controller.deleteTree);

module.exports = router;