import { createContext, useState } from "react";




export const Appcontext=createContext()

function Appcontextprovider(props){

    const backendurl=import.meta.env.VITE_BACKEND_URL;
    const[isLoggedin,SetIsLoggedin]=useState(false);
    const[userData,SetUserData]=useState(false);

    console.log(import.meta.env.VITE_BACKEND_URL);


    const value={
        backendurl,
        isLoggedin,SetIsLoggedin,
        userData,SetUserData

    }

    return(
 
        <Appcontext.Provider value={value}>
            {props.children}

        </Appcontext.Provider>
    )
}

export default Appcontextprovider;