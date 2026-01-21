const jwt=require("jsonwebtoken");
const userModel=require("../models/model.user");


const authMiddleware = async (req, res, next) => {
  try {
    const token = req.cookies.token; 
    if (!token){
    
    return res.send({ success: false, message: "Unauthorized" });

    }
      
    const decoded = jwt.verify(token, process.env.JWT_SECRET); 
    const user = await userModel.findById(decoded.id);

    if (!user){
       return res.send({ success: false, message: "User not found" });
    }

    req.user = user; 
    next();

  } catch (error) {
    return res.send({success:false,message:error.message})
  }
};

module.exports=authMiddleware;
