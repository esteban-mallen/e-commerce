import "./ItemView.css"
import Item from "../Item/Item.jsx";
import ItemCounter from "../ItemCounter/ItemCounter.jsx";

const ItemView = ({item}) => {
    return(
        <>
            <div className="itemView">
                <Item key={item.id} item={item} fullView={true}/>
                <ItemCounter item={item}/>
            </div>
        </>
    )
}

export default ItemView;
