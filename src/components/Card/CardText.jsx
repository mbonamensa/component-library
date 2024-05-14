import PropTypes from "prop-types"
import "./Card.css"

export default function CardText({children, styles}) {
    return (
        <p className={`text`} style={styles}>{children}</p>
    )
}

CardText.propTypes = {
    children: PropTypes.string,
    styles: PropTypes.object
}