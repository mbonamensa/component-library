import PropTypes from "prop-types"
import logoDefault from "./assets/logo.svg"
import pattern from "./assets/pattern.png"
import "./TestimonialPlain.css"

export default function TestimonialPlain({children, logo}) {
    return(
        <div className="tp-container">
            <div className="tp-img-container">
                <img className="tp-img" src={logo ? logo : logoDefault} alt="logo" />
            </div>
            {children}
            <div className="pattern-container">
                <img src={pattern} alt="pattern" />
            </div>
        </div>
    )
}

TestimonialPlain.propTypes = {
    children: PropTypes.element, 
    logo: PropTypes.string
}