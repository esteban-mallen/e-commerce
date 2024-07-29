import {useEffect, useState} from "react";
import {getItem} from "../../asyncMock.js";
import {useParams} from "react-router-dom";
import ItemView from "../ItemView/ItemView.jsx";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner.jsx";
import "./ItemViewContainer.css"

const ItemViewContainer = (props) => {
    const [item, setItem] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const {itemId} = useParams();

    useEffect(() => {
        setIsLoading(true)
        getItem(itemId)
            .then(response => {setItem(response)})
            .catch(() => setIsError(true))
            .finally(() => setIsLoading(false));
    }, [itemId]);

    if (isLoading) return <LoadingSpinner/>

    return(
        <>
            <div className={"item-view-container"}>
                {item && <ItemView item={item}/>}
            </div>
        </>
    )
}

export default ItemViewContainer;
