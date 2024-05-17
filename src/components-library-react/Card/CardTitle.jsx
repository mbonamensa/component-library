import { HiOutlineCloudUpload } from "react-icons/hi"
import PropTypes from "prop-types"
import "./Card.css"

export default function CardTitle({children, styles}) {
    return (
        <p className={`title`} style={styles}>{children}</p>
    )
}

CardTitle.propTypes = {
    children: PropTypes.string,
    styles: PropTypes.object
}