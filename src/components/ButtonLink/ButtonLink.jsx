import "./ButtonLink.css"
import {Link} from "react-router-dom"

const ButtonLink = ({ to, children, ariaLabel }) => {
    return (
        <Link className={"link"} to={to} aria-label={ariaLabel}>
            {children}
        </Link>
    )
}

export default ButtonLink;
