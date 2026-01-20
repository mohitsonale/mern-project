import { useNavigate } from "react-router";
import { assets } from "../assets/assets";

function Header(){

    const navigate=useNavigate()

    return(

        <div className=" flex flex-col items-center  text-center  mt-5 p-4 text-blue-800 ">
            <h1 className="flex items-center gap-2 text-2xl sm:text-5xl font-medium mb-4">Hey Developer <img className="w-8 aspect-square hover:w-12 transition-all" src={assets.hand_wave} alt="" /> </h1>
            <h2 className="text-2xl sm:text-5xl font-medium mb-4">Welcome to our page</h2>
            <p className="text-2xl sm:text-4xl mb-4">Let's Go Developers</p>
            <button onClick={()=>navigate("/login")} className="border cursor-pointer border-gray-700 rounded-full px-4 py-2 hover:px-6 hover:text-xl hover:bg-blue-300 hover:shadow-xl shadow-blue-200 transition-all ">Get Started</button>
        </div>
    )
}

export default Header; 