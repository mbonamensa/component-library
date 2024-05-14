import PropTypes from "prop-types"
import "./Badge.css"

export default function Badge({
    children, 
    color, 
    shape, 
    textColor, 
    bgColor,
    width,
    height
}) {

    const colorStyles = {
        gray: "gray",
        red: "red",
        amber: "amber",
        emerald: "emerald",
        blue: "blue",
        indigo: "indigo",
        purple: "purple",
        pink: "pink",
    }

    const shapeStyles = {
        pill: "pill",
        roundedSquare: "roundedSquare",
    }

    function chosenStyles() {
        let styles = ""

        const shapeStylesArr = Object.keys(shapeStyles)
        const colorStylesArr = Object.keys(colorStyles)

        shapeStylesArr.forEach(shapeStyle => {
            shape === shapeStyle ? styles += (shapeStyles[shape]) : undefined
        })

        colorStylesArr.forEach(colorStyle => {
            color === colorStyle ? styles += ` ${(colorStyles[color])}` : undefined
        })

        return styles
    }

    const userStyles = {
        width: width,
        height: height,
        backgroundColor: bgColor,
        color: textColor
    }

    return (
        <div 
            className={`
                defaults
                ${chosenStyles()} 
            `.trim()}
            style={userStyles}
        >
            {children}
        </div>
    )
}

Badge.propTypes = {
    children: PropTypes.string, 
    color: PropTypes.string, 
    shape: PropTypes.string, 
    textColor: PropTypes.string, 
    bgColor: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string 
}

Badge.defaultProps = {
    children: "Badge", 
    color: "gray", 
    shape: "", 
    textColor: "", 
    bgColor: "",
    width: "5rem",
    height: "auto"
}