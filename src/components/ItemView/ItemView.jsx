import "./ItemView.css"
import Item from "../Item/Item.jsx";
import Button from "../Button/Button.jsx";
import ItemCounter from "../ItemCounter/ItemCounter.jsx";

const ItemView = ({item}) => {
    return(
        <>
            <div className="itemView">
                <Item key={item.id} item={item} fullView={true}/>
                <ItemCounter itemStock={item.stock} itemPrice={item.price}/>
            </div>
        </>
    )
}

export default ItemView;
