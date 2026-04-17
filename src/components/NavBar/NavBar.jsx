import Header from "./Header.jsx";
import CartWidget from "../CartWidget/CartWidget.jsx";
import "./NavBar.css"
import {useEffect, useState} from "react";
import {getCategories} from "../../services/categories";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner.jsx";
import ButtonLink from "../ButtonLink/ButtonLink.jsx";
import SearchBar from "./SearchBar.jsx";

const NavBar = ({ children }) => {
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
                setIsLoading(false);
            });
    }, []);

    const categoryButtons = isLoading
        ? (<LoadingSpinner/>)
        : categories.map((category) => (
            <ButtonLink to={`/category/${category.id}`} key={category.id}>{category.name}</ButtonLink>
        ));

    return (
        <nav aria-label="Main navigation">
            <div className="mainNavBar">
                <Header>{children}</Header>
                <SearchBar/>
                <CartWidget/>
            </div>
            <div className="categories">
                {categoryButtons}
            </div>
        </nav>
    );
};

export default NavBar;
