const express = require("express");
const app = express();
const cors = require("cors");
const initRoutes = require("./routes/index.routes");
const port = 3000 || process.env.PORT;
const db = require("./config/connectDB");
require("dotenv").config();

app.use(cors({
    origin: process.env.CLIENT_URL,
    methods: ["GET", "POST", "PUT", "DELETE"]
}))
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json({}));
db();
initRoutes(app);

app.listen(port, () => {
    console.log("App listening on port " + port);
})