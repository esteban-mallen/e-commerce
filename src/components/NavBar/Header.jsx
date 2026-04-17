import logo from '/logo.svg'
import "./NavBar.css"
import {Link} from "react-router-dom";

const Header = ({ children }) => {
    return (
        <Link className={"header-link"} to={"/"} aria-label={`${children} home`}>
            <span className={"header"}>
                <img src={logo} className={"navBarImg"} alt=""/>
                <h1 className={"brand"}>{children}</h1>
            </span>
        </Link>
    )
}

export default Header
