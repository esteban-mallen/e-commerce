import "./ButtonLink.css"
import {Link } from "react-router-dom"

const ButtonLink = props => {
    return (
        <>
            <Link className={"link"} to={props.to}>{props.children}</Link>
        </>
    )
}

export default ButtonLink;
