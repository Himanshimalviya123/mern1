import { Outlet } from "react-router"
import Footer from "./component/footer"
import Topnav from "./component/header";

const Layout=()=>{
    return(
        <>
        {/* <Header/> */}
        <div id="navbar">
        <Topnav/>
        </div>
        <div id="outlet">
            <Outlet/>
        </div>
         
        <Footer/>
        </>
    )
}
export default Layout;