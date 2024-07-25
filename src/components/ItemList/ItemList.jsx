import "./ItemList.css"
import Item from "../Item/Item.jsx";
import ItemCard from "../ItemCard/ItemCard.jsx";

const ItemList = ({ items }) => {
    return (
        <>
            <div className={"list"}>
                {
                    items.map((item) => (<ItemCard key={item.id} item={item}/>))
                }
            </div>
        </>
    );
}

export default ItemList;
