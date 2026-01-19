let express=require("express");
const { register, login, logout } = require("../Controller/userController");
let authrouter=express.Router();

authrouter.post("/register",register)
authrouter.post("/login",login)
authrouter.post("/logout",logout)

module.exports=authrouter