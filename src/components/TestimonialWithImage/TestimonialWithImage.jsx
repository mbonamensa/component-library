import imgDefault from "./testimonial-image.jpg"
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