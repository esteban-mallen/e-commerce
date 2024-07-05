import Button from "../Button/Button.jsx";
import Header from "./Header.jsx";
import CartWidget from "../CartWidget/CartWidget.jsx";
import "./NavBar.css"

const NavBar = (props) => {
    const {
        children,
        categories = [],
    } = props;

    return(
        <>
            <nav>
                <div className={"mainNavBar"}>
                    <Header>{children}</Header>
                    <CartWidget/>
                </div>
                <div className={"categories"}>
                    {categories.map((category, index) => (<Button key={index}>{category}</Button>))}
                </div>
            </nav>
        </>
    )
}

export default NavBar
