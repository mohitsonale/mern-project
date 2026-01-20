import { Routes,Route, Link } from "react-router";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import { ToastContainer } from 'react-toastify';

function App(){

  return(
     <div>
   
    <ToastContainer />

    {/* <Link to="/Home" >Home</Link>
    <Link to="/Login" >Login</Link>
    <Link to="/Logout" >Logout</Link> */}
    
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Logout" element={<Logout />} />
    </Routes>
     </div>
  )
}

export default App;