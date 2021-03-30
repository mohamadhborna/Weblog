const express = require("express");
const dotEnv = require("dotenv");

//* Load Config
dotEnv.config({path :"./config/config.env"})

const app = express();
const port = process.env.PORT || 3000;

app.listen(port , () =>{console.log(`Server is running on port ${port} in ${process.env.NODE_ENV} mode`)});
