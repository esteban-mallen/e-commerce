import logo from '/logo.svg'
import "./NavBar.css"
import {Link} from "react-router-dom";

const Header = ({ children }) => {
    return(
        <>
            <Link className={"header-link"} to={"/"}>
                <span className={"header"}>
                    <img src={logo} className={"navBarImg"}/>
                    <h3 className={"brand"}>{children}</h3>
                </span>
            </Link>
        </>
    )
}

export default Header
