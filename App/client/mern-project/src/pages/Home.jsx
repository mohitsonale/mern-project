import Header from "../component/Header";
import Navbar from "../component/Navbar";


function Home(){

    return(

        <div className="flex flex-col justify-center items-center h-screen w-full bg-gradient-to-l from-blue-500 to-purple-100 ">
            <Navbar />
            <Header />
        </div>
    )
}

export default Home;