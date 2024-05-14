import { HiOutlineCloudUpload } from "react-icons/hi"
import PropTypes from "prop-types"
import "./Card.css"


export default function Card({
    children,
    bgColor, 
    width, 
    height
    }) {

    const userStyles = {
        backgroundColor: bgColor,
        width: width,
        height: height
    }

    console.log(children)

    return (

        <div className={`card-container`} style={userStyles}>
            <div className="card">
                {children}
            </div>
        </div>
    )
}

Card.propTypes = {
    bgColor: PropTypes.string,    
    height: PropTypes.string,
    width: PropTypes.string,
}

Card.defaultProps = {
    bgColor: "#f8f8ff",     
    height: "auto",
    width: "25rem"
}