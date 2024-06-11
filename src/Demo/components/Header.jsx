import { useContext } from "react"
import { DemoContext } from "../Demo"
import { FaGithub } from "react-icons/fa";
import MenuBar from "./MenuBar";

export default function Header() {

    const {openMobileMenu} = useContext(DemoContext)
    
    return (
        <header>
            <div className="header-layout">
                <h1>React Component Library</h1>
                <div><a className="vo-github" href="https://github.com/mbonamensa/component-library" target="_blank"><FaGithub /><span className="vo-github-text">View on GitHub</span></a></div>
            </div>
            <hr />
            <MenuBar openMobileMenu={openMobileMenu} />
        </header>
    )
}