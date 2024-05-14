import { BiSolidQuoteAltLeft } from "react-icons/bi"

export default function TestimonialContent({children}) {
    return (
        <div className="twi-content">
            <BiSolidQuoteAltLeft className="twi-icon"/>
            {children}
        </div>
    )
}