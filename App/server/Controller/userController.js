let bcrypt=require("../../../node_modules/bcryptjs/umd")
let jwt=require("jsonwebtoken")
const userModel = require("../models/model.user");

let register=async(req,res)=>{

    let{name,email,password}=req.body;

    if(!name || !email || !password){

        return res.send({success:false,message:"Missing Details"})
    }
    
    try{

        let exitinguser=await userModel.findOne({email});

        if(exitinguser){
            res.send({success:true,message:"User is already exits"})
        }

        const hashpassword=await bcrypt.hash(password,10);

        let user=new userModel({
            name,
            email,
            password:hashpassword
        })

        await user.save();

        let token=jwt.sign({id:user._id},process.env.JWT_SECRET,{expiresIn:"7d"}) 

        res.cookie("token",token,{
            httpOnly:true,
            secure:process.env.NODE_ENV==="production",
            samesite:process.env.NODE_ENV==="production"?"none":"strict",
            maxAge:7*24*60*60*1000
        })

        return res.send({success:true,message:"Registration Successfull"})



    }
    catch(error){
        return res.send({success:false,message:error.message})
    }
}

let login=async(req,res)=>{

    let {email,password}=req.body;

    if(!email,!password){

        return res.send({success:false,message:"Email and Password are required"})
    }

    try{

        let user=await userModel.findOne({email})

        if(!user){
            return res.send({success:false,message:"Invalid Email"})
        }

        let isMatch=await bcrypt.compare(password,user.password)

        if(!isMatch){
            res.send({success:false,message:"Password is Wrong"})
        }
        
        let token=jwt.sign({id:user._id},process.env.JWT_SECRET,{expiresIn:"7d"}) 

        res.cookie("token",token,{
            httpOnly:true,
            secure:process.env.NODE_ENV==="production",
            samesite:process.env.NODE_ENV==="production"?"none":"strict",
            maxAge:7*24*60*60*1000
        })

        return res.send({success:true,message:"Login Successfull"})


    }
    catch(error){

        return res.send({success:false,message:error.message})
    }


}

let logout = async (req, res) => {
  try {
    
    res.clearCookie("token", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production", 
      sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
    });

    return res.status(200).send({ success: true, message: "Logout Successful" });
  } catch (error) {
    return res.status(500).send({ success: false, message: error.message });
  }
};


module.exports={register,login,logout}