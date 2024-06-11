import { useState, createContext } from "react"
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react"

const DemoContext = createContext()

export default function Demo({children}) {
    const [openMenu, setOpenMenu] = useState(false)
    const [closeMenu, setCloseMenu] = useState(true)
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

    return (
        <DemoContext.Provider value={{openMenu, closeMenu, openMobileMenu, closeMobileMenu}}>
            {children}
        </DemoContext.Provider>
    )
}

export { DemoContext }