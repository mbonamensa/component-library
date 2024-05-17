import { HiOutlineCloudUpload } from "react-icons/hi"
import PropTypes from "prop-types"
import "./Card.css"

export default function CardIcon({children, iconBgColor, iconColor}) {

    return (
        <div className={`icon-container`} style={{backgroundColor: iconBgColor}}>
            {children ? children : <HiOutlineCloudUpload className={`card-icon`} style={{color: iconColor}}/>}
        </div>
    )
}

CardIcon.propTypes = {
    children: PropTypes.element,
    iconColor: PropTypes.string, 
    iconBgColor: PropTypes.string,  
}

CardIcon.defaultProps = {
    iconColor: "#f8f8ff",     
    iconBgColor: "#3b82f6",
}