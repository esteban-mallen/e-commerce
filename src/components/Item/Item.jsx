import "./Item.css"
import ItemDescription from "../ItemDescription/ItemDescription.jsx";
import ItemImage from "../ItemImage/ItemImage.jsx";

const Item = ({ item, fullView }) => {
    const imagePath = `https://res.cloudinary.com/dsx9cbedb/image/upload/c_thumb,w_300/${item.id}.png`;

    return (
        <>
            <div className={"item"}>
                <div className={"itemDisplay"}>
                    <ItemImage image={imagePath}/>
                    <ItemDescription item={item} showDescriptionText={fullView}/>
                </div>
            </div>
        </>
    )
}

export default Item
