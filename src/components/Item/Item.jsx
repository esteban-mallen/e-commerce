import "./Item.css"
import flower from "../../assets/placeholder-flower.png"
import ItemDescription from "../ItemDescription/ItemDescription.jsx";
import ItemImage from "../ItemImage/ItemImage.jsx";
import {useState} from "react";

const Item = ({ item, fullView }) => {
    const [image, setImage] = useState(flower);
    loadImage(item.category, item.id).then((itemImagePath) => setImage(itemImagePath));

    return (
        <>
            <div className={"item"}>
                <div className={"itemDisplay"}>
                    <ItemImage image={image}/>
                    <ItemDescription item={item} showDescriptionText={fullView}/>
                </div>
            </div>
        </>
    )
}

const loadImage = async (itemCategory, itemId) => {
    const imgPath = `/src/assets/products/${itemId}.png`;
    await import(`../../assets/products/${itemId}.png`);
    return imgPath;
}

export default Item
