const jwt = require("jsonwebtoken");

module.exports.VerifyToken = (req,res,next) => {
    const token = req.headers.authorization.split(' ')[1]

    if(!token){
        return res.status(401).json({
            err:-1,
            msg:"Authorization not found!"
        })
    }

    jwt.verify(token,process.env.SECRET_JWT,(err,user)=>{
        if(!err){
            // return
            req.user = user;
            next(); 
        }
    })

}