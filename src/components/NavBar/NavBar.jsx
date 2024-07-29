import Header from "./Header.jsx";
import CartWidget from "../CartWidget/CartWidget.jsx";
import "./NavBar.css"
import {useEffect, useState} from "react";
import {getCategories} from "../../asyncMock.js";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner.jsx";
import ButtonLink from "../ButtonLink/ButtonLink.jsx";

const NavBar = (props) => {
    const { children } = props;
    const [isLoading, setIsLoading] = useState(true);
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        getCategories()
            .then((categories) => {
                setIsLoading(false);
                setCategories(categories);
            })
            .catch((err) => {
                console.log(err);
            })
    }, []);

    const categoryButtons = isLoading ? (<LoadingSpinner/>)
        : categories.map((category, index) => (<ButtonLink to={`/category/${category.id}`} key={category.id}>{category.name}</ButtonLink>))

    return(
        <>
            <nav>
                <div className={"mainNavBar"}>
                    <Header>{children}</Header>
                    <CartWidget/>
                </div>
                <div className={"categories"}>
                    {categoryButtons}
                </div>
            </nav>
        </>
    )
}

export default NavBar
