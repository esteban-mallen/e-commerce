import "./ItemCard.css"
import Item from "../Item/Item.jsx";
import ButtonLink from "../ButtonLink/ButtonLink.jsx";

const ItemCard = ({item}) => {
    return (
        <>
            <div className="itemCard">
                <Item key={item.id} item={item}/>
                <ButtonLink to={`/item/${item.firebaseId}`}>See more</ButtonLink>
            </div>
        </>
    )
}

export default ItemCard;
