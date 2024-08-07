import "./ItemImage.css"
import {useState} from "react";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner.jsx";

const ItemImage = ({ image }) => {
    const [isLoading, setIsLoading] = useState(true);
    const onLoad = () => {
        setIsLoading(false);
    }

    return (
        <>
            <span className={"itemImage-spinner"}>{isLoading && <LoadingSpinner/>}</span>
            <img style={{display: isLoading ? "none" : "block"}} src={image} className={"itemImage"} onLoad={onLoad}/>
        </>
    )
}

export default ItemImage;
