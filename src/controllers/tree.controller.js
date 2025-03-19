const service = require("../services/tree.services");


module.exports.createTreeMedical = async(req,res,next) => {
    try {
         const responsive = await service.createTreeService(req.body);
         return res.status(200).json(responsive);       
    } catch (error) {
        return res.status(500).json({
            err:-1,
            msg:"Interal Server Error"
        })
    }
}

module.exports.getAllTree = async(req,res,next)=> {
    try {
        const responsive = await service.getAllTreeService(req.body);
        return res.status(200).json(responsive); 
    } catch (error) {
        return res.status(500).json({
            err:-1,
            msg:"Interal Server Error"
        })
    }
}


module.exports.deleteTree = async(req,res,next) => {
   try {
    const responsive = await service.deleteTreeServer(req.params);
    return res.status(200).json(responsive); 
} catch (error) {
    return res.status(500).json({
        err:-1,
        msg:"Interal Server Error"
    });
   }
}

module.exports.createMedicine = async(req,res,next)=>{
    try{
        const responsive = await service.createMedicineService(req.body);
        return res.status(200).json(responsive);
    }catch(err){
        return res.status(500).json({
            err:-1,
            msg:err.name
        })
    }
}

module.exports.getAllMedicine = async(req,res,next) => {
    try{
        const responsive = await service.getAllMedicineService();
        return res.status(200).json(responsive);
    }catch(err){
        res.status(500).json({
            err:-1,
            msg:err.name
        })
    }
}

module.exports.deleteMedicine = async(req,res,next) => {
    try{
        const responsive = await service.deleteMedicineService(req.params);
        return res.status(200).json(responsive);
    }catch(err){
        return res.status(500).json({
            err:-1,
            msg:err.name
        })
    }
}


module.exports.updateTree = async(req,res,next) => {
    try {
 
         const responsive = await service.updateTreeService(req.body);
         return res.status(200).json(responsive); 
    } catch (error) {
        return res.status(500).json({
            err:-1,
            msg:"Interal Server Error"
        })
    }
}

module.exports.updateMedince = async(req,res,next) => {
    try {
        const reponsive = await service.updateMedicine(req.body);
        return res.status(200).json(reponsive);
    } catch (error) {
        return res.status(500).json({
            err:-1,
            msg:"Interal Server Error"
        }) 
    }
}