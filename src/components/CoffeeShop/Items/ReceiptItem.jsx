// read the function name
const removeItem = (itemObject, itemQuantities, setFunc) => {
    setFunc({ ...itemQuantities, [itemObject.id]: 0 });
}

export default function ReceiptItem({ quantity, price, itemObject, itemQuantities, setFunc }) {
    const priceAfterQuantity = quantity * price;

    return (
        <div className="receipt-item-wrapper">
            <p className="fixed-rcpt">{itemObject.name}</p>
            <p className="fixed-rcpt">{quantity}</p>
            <p className="fixed-rcpt">£{price.toFixed(2)}</p>
            <p className="fixed-rcpt">£{priceAfterQuantity.toFixed(2)}</p>
            <p className="fixed-rcpt text-btn" onClick={() => {removeItem(itemObject, itemQuantities, setFunc)}} >X</p>
        </div>
    );
}
