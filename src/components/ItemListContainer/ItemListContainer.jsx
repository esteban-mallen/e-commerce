import {useCallback, useEffect, useState} from "react";
import './ItemListContainer.css'
import ItemList from "../ItemList/ItemList.jsx";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner.jsx";
import {useParams} from "react-router-dom";
import {getAllItems, getItems} from "../../services/items.js";
import Button from "../Button/Button.jsx";

const ItemListContainer = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const [items, setItems] = useState([]);

    const {categoryId} = useParams();

    const fetchItems = useCallback(() => {
        setIsLoading(true);
        setIsError(false);

        (categoryId ? getItems(categoryId) : getAllItems())
            .then((i) => setItems(i))
            .catch(() => setIsError(true))
            .finally(() => setIsLoading(false));
    }, [categoryId]);

    useEffect(() => {
        fetchItems();
    }, [fetchItems]);

    if (isLoading) return <LoadingSpinner/>

    if (isError) {
        return (
            <div className="items-error" role="alert">
                <h2>We couldn&apos;t load the products</h2>
                <p>Please check your connection and try again.</p>
                <Button onClick={fetchItems}>Retry</Button>
            </div>
        )
    }

    if (items.length === 0) {
        return (
            <div className="items-empty">
                <h2>No products available</h2>
                <p>There are no products in this category yet. Check back soon!</p>
            </div>
        )
    }

    return (
        <div>
            <ItemList items={items}/>
        </div>
    )
}

export default ItemListContainer
