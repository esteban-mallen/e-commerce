import "./ItemList.css"
import ItemCard from "../ItemCard/ItemCard.jsx";

const ItemList = ({ items = [] }) => {
    return (
        <div className={"list"}>
            {items.map((item) => (
                <ItemCard key={item.firebaseId || item.id} item={item}/>
            ))}
        </div>
    );
}

export default ItemList;
