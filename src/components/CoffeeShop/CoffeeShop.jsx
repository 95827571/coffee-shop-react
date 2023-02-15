import React, { useState, useEffect, useRef } from "react";
import "./CoffeeShop.css"
import ItemButton from "./Items/ItemButton";
import ReceiptItem from "./Items/ReceiptItem";

export default function CoffeeShop({ items }) {
    const itemsToDisplay = [];
    const [receiptItems, setReceiptItems] = useState([]);
    const [itemQuantity, setItemQuantity] = useState({});
    const [totalPrice, setTotalPrice] = useState(0);


    // On first render we create the item quantities object
    useEffect(() => {
        setItemQuantity(items.reduce((obj, data) => ({
            ...obj,
            [data.id]: 0,
        }), {}))
    }, [])

    // click handle, just incase i wanted to log anything
    const clickHandle = (newObj) => {
        setItemQuantity(newObj);
    }
    
    // Every time item quantities is updated, update the receipt
    useEffect(() => {
        let _totalPrice = 0
        let newArr = []
        for (const id in itemQuantity) {
            const item = items.find(item => item.id == id)
            _totalPrice += item.price * itemQuantity[id]

            if(itemQuantity[id] > 0) {
                newArr.push(<ReceiptItem itemObject={item} quantity={itemQuantity[id]} price={item.price} itemQuantities={itemQuantity} setFunc={clickHandle}/>);
            }
            setReceiptItems(newArr)
        }
        setTotalPrice(_totalPrice);
    }, [itemQuantity])
    
    // Creates each button :D
    items.forEach(item => {
        itemsToDisplay.push((<ItemButton itemObject={item} itemQuantities={itemQuantity} setFunc={clickHandle}/>));
    });
    
    return (
        <div>
            <div id="coffee-shop">
                <div id="img-wrapper">
                    <img src="./images/menu.png" />

                </div>
                <div id="item-list">
                    {itemsToDisplay}
                </div>
            </div>
            <div id="bottom-wrapper">
                <div id="receipt-wrapper">
                    {receiptItems}
                    <div id="receipt-total-price">£{totalPrice.toFixed(2)}</div>
                </div>
            </div>
        </div>
    );


}

