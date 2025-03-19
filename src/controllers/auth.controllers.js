const services = require("../services/auth.services");

module.exports.register = async(req,res,next) => {
   try {
    // const {username,pass,phone} = req.body;
    const responsive = await services.registerService(req.body);
    // const responsive = await services.(req.body);
    // console.log(responsive);
    return res.status(200).json(responsive);
   } catch (error) {
    return res.status(500).json({
        err: error.name,
        msg:"Interal Server Error"
    })
   }
}

module.exports.registerLoad = async(req,res,next) => {
    try {
        const responsive = await services.registerServiceAuth();
        return res.status(200).json(responsive);
    } catch (error) {
        return res.status(500).json({
            err:error.name,
            msg:"Interal Server Error"
        })
    }
}

module.exports.testUser = async(req,res,next) => {
    try {
        const responsive = await services.testUserService();
        return res.status(200).json(responsive);
    } catch (error) {
        return res.status(501).json({
            err:-1,
            msg:"Interal Server Error"
        })
    }
}

module.exports.login = async(req,res,next) => {
    try {
        const responsive = await services.loginService(req.body);
        return res.status(200).json(responsive);
    } catch (error) {
        return res.status(500).json({
            err:-1,
            msg:"Interal Server Error"
        })
    }
}

module.exports.comment =  async(req,res,next) => {
    try {
        // const {name,avatar} = req.user;
        // console.log(req.user)
       const responsive = await services.createCommentService(req.user,req.body);        
      return res.status(200).json(responsive);
    } catch (error) {
        return res.status(500).json({
            err:-1,
            msg:"Interal Server Error",
        })
    }
}


module.exports.getCommentOnePost = async(req,res,next) => {
    try {
       const responsive = await services.getAllPostCommentService(req.params);
       return res.status(200).json(responsive);        
    } catch (error) {
        return res.status(500).json({
            err:-1,
            msg:"Interal Server Error"
        })
    }
}

module.exports.getOneUser = async(req,res,next) => {
    try {
        const responsive = await services.getOneUserService(req.user);
        return res.status(200).json(responsive);
    } catch (error) {
        return res.status(500).json({
            err:-1,
            msg:"Interal Server Error"
        })
    }
}

module.exports.updateUser = async(req,res,next) => {
    try {
        const responsive = await services.updateUserService(req.body);
        return res.status(200).json(responsive);
    } catch (error) {
        return res.status(500).json({
            err:-1,
            msg:"Interal Server Error"
        })
    }
}

module.exports.getAllUser = async(req,res,next) => {
    try {
        const responsive = await services.getAllUserService();
        return res.status(200).json(responsive);
    } catch (error) {
        return res.status(500).json({
            err:-1,
            msg:"Interal Server Error"
        })
    }
}

module.exports.getCountCommentPost = async(req,res,next) => {
    try {       
        const responsive = await services.getCountCommentService(req.params);
        return res.status(200).json(responsive);
    } catch (error) {
        return res.status(500).json({
            err:-1,
            msg:error?.name
        })
    }
}

module.exports.deleteAccount = async(req,res,next) => {
    try {
        const responsive = await services.deleteAccountService(req.params);
        return res.status(200).json(responsive);
    } catch (error) {
        return res.status(500).json({
            err:-1,
            msg:err.name
        })
    }
}


module.exports.updateAccount = async(req,res,next) => {
    try {
        const responsive = await services.updateAccountService(req.body);
        return res.status(200).json(responsive);
    } catch (error) {
        return res.status(500).json({
            err:-1,
            msg:"Interal Server Error"
        })
    }
}