const authRoutes = require("./auth.routes");
const treeRoutes = require("./tree.routes");
const postRoutes = require("./post.routes");

const initRoutes = (app) => {
    app.use('/api/v1/auth',authRoutes);
    app.use('/api/v1/tree',treeRoutes);
    app.use('/api/v1/post',postRoutes);

    return app.use('/',(req,res,next)=>{
        res.status(401).json("Not found routes!");
    }) 
}

module.exports = initRoutes;