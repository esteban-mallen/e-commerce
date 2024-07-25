import "./ItemImage.css"

const ItemImage = ({ image }) => {
    return (
        <>
            <img src={image} className={"itemImage"}/>
        </>
    )
}

export default ItemImage;
