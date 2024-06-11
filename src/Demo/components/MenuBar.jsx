import { HiOutlineMenuAlt1 } from "react-icons/hi";

export default function MenuBar({openMobileMenu}) {

    return (
        <div className="sidebarmenu-wrapper" onClick={openMobileMenu}>
                <div className="sidebarmenu-text" >
                    <HiOutlineMenuAlt1 />
                    <p>Menu</p> 
                </div>
        </div>
    )
}