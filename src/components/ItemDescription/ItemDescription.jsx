import "./ItemDescription.css"

const ItemDescription = ({ item, showDescriptionText }) => {
    return(
        <>
            <div className="item-description">
                <span className="item-name"><h2>{item.name}</h2></span>
                {showDescriptionText && (<span className="item-description-text">{item.description}</span>)}
            </div>
        </>
    )
}

export default ItemDescription;
