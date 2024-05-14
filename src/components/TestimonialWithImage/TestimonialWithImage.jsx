import imgDefault from "./assets/testimonial-image.jpg"
import PropTypes from "prop-types"
import "./TestimonialWithImage.css"

export default function TestimonialWithImage({children, img}) {
    return(
        <div className="twi-container">
            <div className="midhelper"></div>
            <div className="twi-img-container">
                <img className="twi-img" src={img ? img : imgDefault}/>
            </div>
            {children}
        </div>
    )
}

TestimonialWithImage.propTypes = {
    children: PropTypes.element, 
    img: PropTypes.string
}