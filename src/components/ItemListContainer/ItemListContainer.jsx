import {useEffect, useState} from "react";
import './ItemListContainer.css'
import {getAllItems, getItems} from "../../asyncMock.js";
import ItemList from "../ItemList/ItemList.jsx";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner.jsx";
import {useParams} from "react-router-dom";

const ItemListContainer = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const [items, setItems] = useState([]);

    const {categoryId} = useParams();

    useEffect(() => {
        setIsLoading(true);

        (categoryId ? getItems(categoryId) : getAllItems())
            .then((i) => setItems(i))
            .catch(() => setIsError(true))
            .finally(() => setIsLoading(false));
    }, [categoryId]);

    if (isLoading) return (<LoadingSpinner/>)
    if (isError) return (<h2>FAILED LOADING PRODUCTS</h2>)

    return (
        <>
            <div>
                <ItemList items={items}/>
            </div>
        </>
    )
}

export default ItemListContainer
