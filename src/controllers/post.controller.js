const service = require("../services/post.services");

module.exports.createPost = async(req,res,next) => {
    try {
        const responsive = await service.createPostService(req.body);
        return res.status(200).json(responsive);
    } catch (error) {
        return res.status(500).json({
            err:-1,
            msg:"Interal Server Error"
        })
    }
}

module.exports.getAllPost = async(req,res,next) => {
    try {
        const responsive = await service.getPostService();
        return res.status(200).json(responsive);
    } catch (error) {
        return res.status(500).json({
            err:-1,
            msg:"Interal Server Error"
        })
    }
}

module.exports.searchPost = async(req,res,next) => {
    try {
        const responsive = await service.searchPostService(req.params);
        return res.status(200).json(responsive);
    } catch (error) {
        return res.status(500).json({
            err:-1,
            msg:"Interal Server Error"
        })
    }
}

module.exports.deleteNews = async(req,res,next) => {
    try {
       const responsive = await service.deleteNewsService(req.params);
       return res.status(200).json(responsive);        
    } catch (error) {
        return res.status(500).json({
            err:-1,
            msg:err.name
        })
    }
}

module.exports.detailNew = async(req,res,next) => {
    try {
        const responsive = await service.deatilNewPost(req.params);
        return res.status(200).json(responsive);
    } catch (error) {
        return res.status(500).json({
            err:-1,
            msg:"Interal Server Error"
        })
    }
}

module.exports.getAllCountCommentMedicine = async(req,res,next) => {
    try {
         const responsive = await service.getMedicineService();
         return res.status(200).json(responsive);        
    } catch (error) {
        return res.status(500).json({
            err:-1,
            msg:err.name
        })
    }
}

module.exports.getAllNews = async(req,res,next) => {
    try {
        // console.log("[]")
        const responsive = await service.getAllNewService();
        return res.status(200).json(responsive);
    } catch (error) {
       return res.status(500).json({
        err:-1,
        msg:"Interal Server Error"
       }) 
    }
}

module.exports.updateNews = async(req,res,next) => {
    try {
       const responsive = await service.updateNewsService(req.body);
       return res.status(200).json(responsive);        
    } catch (error) {
        return res.status(500).json({
            err:-1,
            msg:error.name
        })
    }
}