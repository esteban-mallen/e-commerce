import {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import ItemView from "../ItemView/ItemView.jsx";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner.jsx";
import "./ItemViewContainer.css"
import {getItem} from "../../services/items.js";

const ItemViewContainer = () => {
    const [item, setItem] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const {itemId} = useParams();

    useEffect(() => {
        setIsLoading(true);
        setIsError(false);
        getItem(itemId)
            .then((response) => {
                if (!response || !response.name) {
                    setIsError(true);
                    return;
                }
                setItem(response);
            })
            .catch(() => setIsError(true))
            .finally(() => setIsLoading(false));
    }, [itemId]);

    if (isLoading) return <LoadingSpinner/>

    if (isError || !item) {
        return (
            <div className="item-view-container" role="alert">
                <h2>Product not found</h2>
                <p>This product may have been removed or the link is invalid.</p>
                <Link to="/">Back to shop</Link>
            </div>
        )
    }

    return (
        <div className={"item-view-container"}>
            <ItemView item={item}/>
        </div>
    )
}

export default ItemViewContainer;
