import {useEffect, useState} from "react";
import './ItemListContainer.css'
import ItemList from "../ItemList/ItemList.jsx";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner.jsx";
import {useParams, useSearchParams} from "react-router-dom";
import {getAllItems, getItems} from "../../services/items.js";

const ItemListContainer = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const [items, setItems] = useState([]);
    const {categoryId} = useParams();
    const [searchParams] = useSearchParams();
    const searchQuery = searchParams.get("search") || "";

    useEffect(() => {
        setIsLoading(true);
        setIsError(false);

        (categoryId ? getItems(categoryId) : getAllItems())
            .then((i) => setItems(i))
            .catch(() => setIsError(true))
            .finally(() => setIsLoading(false));
    }, [categoryId]);

    if (isLoading) return (<LoadingSpinner/>);
    if (isError) return (<h2>Failed to load products. Please try again later.</h2>);

    const filteredItems = searchQuery
        ? items.filter((item) =>
            item.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.description?.toLowerCase().includes(searchQuery.toLowerCase())
        )
        : items;

    return (
        <div>
            {searchQuery && (
                <p className="search-results-label">
                    {filteredItems.length > 0
                        ? `Showing ${filteredItems.length} result${filteredItems.length !== 1 ? 's' : ''} for "${searchQuery}"`
                        : `No results found for "${searchQuery}"`
                    }
                </p>
            )}
            <ItemList items={filteredItems}/>
        </div>
    );
};

export default ItemListContainer;
