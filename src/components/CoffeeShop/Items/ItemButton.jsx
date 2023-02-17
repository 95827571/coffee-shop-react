// updates the original quantities list with the new item amount
const updateItem = (itemObject, itemQuantities, setFunc, value) => {
    const amount = itemQuantities[itemObject.id] + value;
    if (itemQuantities[itemObject.id] + amount <= 0) return;
    setFunc({ ...itemQuantities, [itemObject.id]: amount });
    console.log(`${itemObject.id}`);
};

export default function ItemButton({ itemObject, itemQuantities, setFunc }) {

    return (
        <div className="item-holder">
            <div className="item-desc">
                <p>{itemObject.name}</p>
                <p>£{itemObject.price.toFixed(2)}</p>
            </div>
            <div className="item-buttons">
                <div
                    className="item-btn"
                    onClick={() => {
                        updateItem(itemObject, itemQuantities, setFunc, 1);
                    }}
                >
                    <p>+</p>
                </div>
                <div
                    className="item-btn"
                    onClick={() => {
                        updateItem(itemObject, itemQuantities, setFunc, -1);
                    }}
                >
                    <p>-</p>
                </div>
                <div className="item-quantity">
                    <p>{itemQuantities[itemObject.id]}</p>
                </div>
            </div>
        </div>
    );
}
