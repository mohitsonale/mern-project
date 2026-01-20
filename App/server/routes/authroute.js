let express=require("express");
const { register, login, logout } = require("../Controller/userController");
const authMiddleware = require("../Middleware/Middleware");
let authrouter=express.Router();

authrouter.post("/register",register)
authrouter.post("/login",login)
authrouter.delete("/logout",authMiddleware,logout)

module.exports=authrouter