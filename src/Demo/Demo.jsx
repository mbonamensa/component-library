import BadgeDemo from "./BadgeDemo";
import MenuBar from "./MenuBar";
import { useState, } from "react"
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react"
import BannerDemo from "./BannerDemo";
import CardDemo from "./CardDemo";
import TestimonialDemo from "./TestimonialDemo";
import { FaGithub } from "react-icons/fa";
import GettingStarted from "./GettingStarted";


export default function Demo() {
    const [openMenu, setOpenMenu] = useState(false)
    const [closeMenu, setCloseMenu] = useState(true)
    const [selectedPage,setSelectedPage] = useState("Getting Started")
    const { contextSafe } = useGSAP()  


    const openMobileMenu = contextSafe(() => {
        setOpenMenu(true)
        gsap.fromTo(".sidebar", {x: -200}, {x :0},)
        gsap.fromTo(".modal", {opacity: 0}, {opacity: 0.2},)
    })

    const closeMobileMenu = contextSafe(() => {
        setCloseMenu(false)
        gsap.fromTo(".sidebar", 
            {x:0}, 
            {
                x:-320,
                onComplete: () => {
                setOpenMenu(false)
                gsap.to(".sidebar", {x:0})
                }
            }
        )
        gsap.fromTo(".modal",
            {opacity: 0.2},
            {opacity: 0}
        )
    })

    const pages = ["Getting Started", "Badge", "Banner", "Card", "Testimonial"]

    const pageItems = pages.map((page, i)=> {
        return (
            <li
                key={i}
                className={`${selectedPage === page ? "active" : ""}`}
                onClick={(event) => {
                    const pageItem = event.target.textContent
                    setSelectedPage(pageItem)
                }}
                
            >
                <a href={`#${page}`}></a>
                {page}
            </li>
        )
    })

    const pageRender = ()=> {
        if (selectedPage === "Badge") {
            return <BadgeDemo />
        }
        else if (selectedPage === "Banner") {
            return <BannerDemo />
        }
        else if (selectedPage === "Card") {
            return <CardDemo />
        }
        else if ((selectedPage === "Testimonial") ){
            return <TestimonialDemo />
        }
        else if ((selectedPage === "Getting Started") ){
            return <GettingStarted />
        }
    }


    return (
        <div className="page-layout">
            <header>
                <div className="header-layout">
                    <h1>React Component Library</h1>
                    <div><a className="vo-github" href="https://github.com/mbonamensa/component-library" target="_blank"><FaGithub /><span className="vo-github-text">View on GitHub</span></a></div>
                </div>
                <hr />
            <MenuBar openMobileMenu={openMobileMenu} />
            </header>
            <aside>
            <div className={`sidebar ${openMenu ? "show" : ""}`}>
                <ul className="sidebar-list-container">
                    {pageItems}                   
                </ul>
            </div>
            <div onClick={closeMobileMenu} className={`modal ${openMenu ? "show" : ""}`}></div>
            </aside>
            <div className="main-content">
                {pageRender()}
            </div>
            <footer></footer>
        </div>
    )
}