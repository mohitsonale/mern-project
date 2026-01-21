
let mongoose=require("mongoose")

let userSchema=new mongoose.Schema({

    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        unique:true  
    }
})

let userModel=mongoose.model("user",userSchema);

module.exports=userModel; 