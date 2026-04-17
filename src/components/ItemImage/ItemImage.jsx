import "./ItemImage.css"
import {useState} from "react";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner.jsx";

const ItemImage = ({ image, alt = "" }) => {
    const [isLoading, setIsLoading] = useState(true);

    return (
        <>
            {isLoading && (
                <span className={"itemImage-spinner"}>
                    <LoadingSpinner/>
                </span>
            )}
            <img
                style={{ display: isLoading ? "none" : "block" }}
                src={image}
                alt={alt}
                loading="lazy"
                className={"itemImage"}
                onLoad={() => setIsLoading(false)}
                onError={() => setIsLoading(false)}
            />
        </>
    )
}

export default ItemImage;
