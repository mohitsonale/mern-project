import { useContext, useState } from "react"
import { assets } from "../assets/assets"
import { useNavigate } from "react-router"
import { Appcontext } from "../context/Appcontext"
import axios from "axios"
import { toast } from "react-toastify"


function Login(){

    const[state,Setstate]=useState("sign up")
    const[name,Setname]=useState("")
    const[email,Setemail]=useState("")
    const[password,Setpassword]=useState("")
    const navigate=useNavigate()
    const {backendurl,SetIsLoggedin}=useContext(Appcontext)

    const Submithandler=async(e)=>{
        try {

            e.preventDefault();

            axios.defaults.withCredentials=true

            if(state==="sign up"){

                const {data}=await axios.post(backendurl + "/api/auth/register",{name,email,password})

                if(data.success){
                    SetIsLoggedin(true)
                    toast.success(data.message)
                    navigate("/")
                }
                else{
                    toast.error(data.message)
                }
            }
            else{

                 const {data}=await axios.post(backendurl+"/api/auth/login",{email,password})

                if(data.success){
                    SetIsLoggedin(true)
                    toast.success(data.message)
                    navigate("/")
                }
                else{
                    toast.error(data.message)
                }

            }
            
        } catch (error) {
            toast.error(error.message)

            
        }
    }
    

   

    return(
        <div className=" flex justify-center items-center px-6 sm:px-0 h-screen w-full bg-gradient-to-l from-blue-500 to-blue-300 ">
            <img onClick={()=>navigate("/")} src={assets.logo} alt="" className="absolute left-5 sm:left-20 top-5 w-28 sm:w-32 cursor-pointer hover:shadow-xl shadow-blue-200 hover:w-[11%] transition-all" />

            <div className="bg-slate-900 p-10 rounded-lg shadow-lg w-full sm:w-96 text-indigo-300  text-sm shadow-xl hover:shadow-blue-300 transition-all">
                <h2 className="text-3xl text-center font-medium bg-gradient-to-l from-blue-200 to-blue-800 bg-clip-text text-transparent mb-3" >{state==="sign up" ? "Create Account":"Login"}</h2>
                <p className="text-sm text-center mb-5  ">{state==="sign up"? "Create your account":"Login to your account"}</p>

                <form onSubmit={Submithandler}>

                    {state==="sign up" && (<div className="flex items-center mb-4 gap-3 w-full px-5 py-3 rounded-full bg-[#333A5C]">
                        <img src={assets.person_icon} alt="" />
                        <input onChange={(e)=>Setname(e.target.value)} value={name} type="text" placeholder="full name" required className="outline-none bg-transparent" />
                    </div>)}

                    

                    <div className="flex items-center mb-4 gap-3 w-full px-5 py-3 rounded-full bg-[#333A5C]">
                        <img src={assets.mail_icon} alt="" />
                        <input onChange={(e)=>Setemail(e.target.value)} value={email} type="text" placeholder="email" required className="outline-none bg-transparent" />
                    </div>

                    <div className="flex items-center mb-4 gap-3 w-full px-5 py-3 rounded-full bg-[#333A5C]">
                        <img src={assets.lock_icon} alt="" />
                        <input onChange={(e)=>Setpassword(e.target.value)} value={password} type="text" placeholder="password" required className="outline-none bg-transparent" />
                    </div>

                    

                    <button className="w-full bg-gradient-to-r from-blue-500  rounded-full py-2 mt-3 text-white cursor-pointer">{state}</button>

                   {
                    state==="sign up" ? (  <p className="text-gray-400 text-center text-sm mt-3">Already have an account?{' '}
                        <span onClick={()=>Setstate("login")} className="text-indigo-700 underline cursor-pointer">Login here</span>
                    </p>
                    )
                    :
                    (
                       <p className="text-gray-400 text-center text-sm mt-3">Don't have an account?{' '}
                        <span onClick={()=>Setstate("sign up")} className="text-indigo-700 underline cursor-pointer">Sign up</span>
                    </p>
                    )
                   }

                  

                   

                </form>
            </div>
        </div>
    )
}

export default Login