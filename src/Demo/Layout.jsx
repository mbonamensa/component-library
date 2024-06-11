import { Outlet } from "react-router-dom";
import Demo from "./Demo";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Footer from "./components/Footer";



export default function Layout() {
    return (
        <>
        <div className="page-layout">
           <Demo>
                <Header />
                <Nav />
            </Demo> 
            
            <div className="main-content">
                <Outlet />
            </div>

            <Footer />
        </div>    
        </>
    )
}

// 