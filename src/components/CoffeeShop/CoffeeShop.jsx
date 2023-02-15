import React, { useState, useEffect, useRef } from "react";
import "./CoffeeShop.css"

const createItem = (item, itemQuanities, setQuantity) => {

    const updateItem = (value) => {
        const amount = itemQuanities[item.id] + value;
        if((itemQuanities[item.id] + amount) <= 0) return;
        setQuantity({ ...itemQuanities, [item.id]: amount})
        console.log(`${item.id}`)
    }


    return <div className="item-holder">
        <div className="item-desc">
            <p>{item.name}</p>
            <p>£{item.price.toFixed(2)}</p>
        </div>
        <div className="item-buttons">
            <div className="item-btn" onClick={() => {updateItem(1)}}><p>+</p></div>
            <div className="item-btn" onClick={() => {updateItem(-1)}}><p>-</p></div>
            <div className="item-quantity"><p>{itemQuanities[item.id]}</p></div>
        </div>
    </div>;
};

export default function CoffeeShop({ items }) {
    const itemsToDisplay = [];
    const [itemQuantity, setItemQuantity] = useState({});
    const [totalPrice, setTotalPrice] = useState(0);


    useEffect(() => {
        console.log("Mounted")
        setItemQuantity(items.reduce((obj, data) => ({
            ...obj,
            [data.id]: 0,
        }), {}))

        console.log(itemQuantity)
    }, [])

    const clickHandle = (newObj) => {
        setItemQuantity(newObj);

    }
    
    useEffect(() => {
        let _totalPrice = 0
        for (const id in itemQuantity) {
            const item = items.find(item => item.id == id)
            _totalPrice += item.price * itemQuantity[id]
        }
        setTotalPrice(_totalPrice);
    }, [itemQuantity])
    
    items.forEach(item => {
        itemsToDisplay.push(createItem(item, itemQuantity, clickHandle));
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
            <div>£{totalPrice.toFixed(2)}</div>
        </div>
    );


}

