import {useEffect, useState} from "react";
import {useParams, useNavigate} from "react-router-dom";
import ItemView from "../ItemView/ItemView.jsx";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner.jsx";
import "./ItemViewContainer.css"
import {getItem} from "../../services/items.js";

const ItemViewContainer = () => {
    const [item, setItem] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const {itemId} = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        setIsLoading(true);
        getItem(itemId)
            .then(response => setItem(response))
            .catch(() => setIsError(true))
            .finally(() => setIsLoading(false));
    }, [itemId]);

    if (isLoading) return <LoadingSpinner/>;

    if (isError || !item) {
        return (
            <div className="item-view-container">
                <p>Product not found.</p>
                <button className="back-button" onClick={() => navigate(-1)}>&#8592; Back</button>
            </div>
        );
    }

    return (
        <div className="item-view-container">
            <button className="back-button" onClick={() => navigate(-1)} aria-label="Go back">
                &#8592; Back
            </button>
            <ItemView item={item}/>
        </div>
    );
};

export default ItemViewContainer;
