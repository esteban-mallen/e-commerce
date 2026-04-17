import Header from "./Header.jsx";
import CartWidget from "../CartWidget/CartWidget.jsx";
import "./NavBar.css"
import {useEffect, useState} from "react";
import {getCategories} from "../../services/categories";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner.jsx";
import ButtonLink from "../ButtonLink/ButtonLink.jsx";

const NavBar = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        let active = true;
        getCategories()
            .then((fetched) => {
                if (!active) return;
                setCategories(fetched);
            })
            .catch(() => {
                if (!active) return;
                setCategories([]);
            })
            .finally(() => {
                if (!active) return;
                setIsLoading(false);
            });
        return () => { active = false; };
    }, []);

    const categoryButtons = isLoading
        ? <LoadingSpinner/>
        : categories.map((category) => (
            <ButtonLink to={`/category/${category.id}`} key={category.id}>
                {category.name}
            </ButtonLink>
        ));

    return (
        <nav aria-label="Main navigation">
            <div className={"mainNavBar"}>
                <Header>{children}</Header>
                <CartWidget/>
            </div>
            <div className={"categories"}>
                <ButtonLink to="/">All</ButtonLink>
                {categoryButtons}
            </div>
        </nav>
    )
}

export default NavBar
