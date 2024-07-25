import logo from '/logo.svg'
import "./NavBar.css"

const Header = ({ children }) => {
    return(
        <>
            <a href={"/"}>
                <span className={"header"}>
                    <img src={logo} className={"navBarImg"}/>
                    <h3 className={"brand"}>{children}</h3>
                </span>
            </a>
        </>
    )
}

export default Header
