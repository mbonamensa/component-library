import { useContext } from "react"
import { DemoContext } from "../Demo"
import { NavLink } from "react-router-dom"

export default function Nav() {

    const {openMenu, closeMobileMenu} = useContext(DemoContext)

    const activeStyles = {
        borderRadius: "8px",
        backgroundColor: "#5b21b645",
    }

    return (
        <>
            <div className={`sidebar ${openMenu ? "show" : ""}`}>
                <ul className="sidebar-list-container">
                    <li><NavLink to="/" style={({isActive}) => isActive ? activeStyles : null}>Getting Started</NavLink></li>
                    <li><NavLink to="/badge" style={({isActive}) => isActive ? activeStyles : null}>Badge</NavLink></li>
                    <li><NavLink to="/banner" style={({isActive}) => isActive ? activeStyles : null}>Banner</NavLink></li>
                    <li><NavLink to="/card" style={({isActive}) => isActive ? activeStyles : null}>Card</NavLink></li>
                    <li><NavLink to="/testimonial" style={({isActive}) => isActive ? activeStyles : null}>Testimonial</NavLink></li>
                </ul>
            </div>
            <div onClick={closeMobileMenu} className={`modal ${openMenu ? "show" : ""}`}></div>
        </> 
   )
}