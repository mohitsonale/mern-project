import { useNavigate } from "react-router";
import {assets} from "../assets/assets"
import axios from "axios";
import { useContext } from "react";
import { Appcontext } from "../context/Appcontext";
import { toast } from "react-toastify"
import App from "../App";
function Navbar(){

    const navigate=useNavigate()
    const {backendurl,isLoggedin,SetIsLoggedin}=useContext(Appcontext)

    const handlelogout=async()=>{
        
        try{

            const{data}=await axios.delete(`${backendurl}/api/auth/logout`, { withCredentials: true })


            if(data.success){
                SetIsLoggedin(false)
                navigate("/login")
                toast.success(data.message)
            }
            else{
                toast.error(data.message)
            }

        }
        catch(error){

            toast.error(error.message)
        }
    }

    return(
        <div className="w-full flex justify-between items-center  p-4 sm:p-6 sm:px-24 absolute top-0 ">
            <img src={assets.logo} alt="" className="w-28 sm:w-32  cursor-pointer hover:shadow-xl shadow-blue-200 hover:w-[11%] transition-all"/>
           
            {
                isLoggedin && ( <button onClick={handlelogout}  className="flex items-center text-blue-900  gap-2 border cursor-pointer hover:shadow-xl shadow-blue-200 border-gray-700  rounded-full px-6 py-2  hover:bg-blue-300 hover:px-7  hover:text-[19px]  hover:gap-4  transition-all ">Logout<img  src={assets.arrow_icon} alt="" />
            </button>)
            }
           
              
        </div>
    )
}
export default  Navbar;