import { PiWarningFill } from "react-icons/pi"
import { HiMiniXCircle } from "react-icons/hi2"
import { HiInformationCircle } from "react-icons/hi"
import { HiCheckCircle } from "react-icons/hi"
import PropTypes from "prop-types"
import "./Banner.css"

export default function Banner({
    children,
    label, 
    status, 
    subLabel, 
    height, 
    width
    }) {

    let mainLabelColor
    switch(status) {
        case "neutral":
        mainLabelColor = "neutralMainLabel"
        break
        case "success":
        mainLabelColor = "sucessMainLabel"
        break
        case "warning":
        mainLabelColor = "warningMainLabel"
        break
        case "error":
        mainLabelColor = "errorMainLabel"
        break
    }

    let statusColor
    switch(status) {
        case "neutral":
        statusColor = "neutral"
        break
        case "success":
        statusColor = "success"
        break
        case "warning":
        statusColor = "warning"
        break
        case "error":
        statusColor = "error"
        break
    }

    let bannerIcon
    switch(status) {
        case "neutral":
        bannerIcon = <HiInformationCircle className="icon neutralIcon" />
        break;
        case "success":
        bannerIcon = <HiCheckCircle className="icon successIcon" />
        break;
        case "warning":
        bannerIcon = <PiWarningFill className="icon warningIcon" />
        break;
        case "error":
        bannerIcon = <HiMiniXCircle className="icon erroIcon" />
        break;
    }

    const userStyles = {
        width: width,
        height: height
    }
    
    return (
        <>
        <div className={`banner ${statusColor}`} style={userStyles}>
            <div className="flex">
                {bannerIcon}
                <div>
                    <p className={`${mainLabelColor} mainLabel`}>{children || label ? children || label : "Update available" }</p>
                    {subLabel && <p className="subLabel">{subLabel}</p>}
                </div>
            </div>
        </div>
        </>
    )
}

Banner.propTypes = {
    label: PropTypes.string, 
    status: PropTypes.string, 
    subLabel: PropTypes.string, 
    height: PropTypes.string,
    width: PropTypes.string,
}

Banner.defaultProps = {
    label: "", 
    status: "neutral", 
    subLabel: "", 
    height: "",
    width: ""
}