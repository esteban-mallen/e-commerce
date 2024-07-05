import logo from '../../assets/logo.svg'
import "./NavBar.css"

const Header = ({ children }) => {
    return(
        <>
            <span className={"header"}>
                <img src={logo} className={"navBarImg"}/>
                <h3 className={"brand"}>{children}</h3>
            </span>
        </>
    )
}

export default Header
