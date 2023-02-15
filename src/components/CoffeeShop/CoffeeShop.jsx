import React, { useState, useEffect, useRef } from "react";
import "./CoffeeShop.css"

const createItem = (item, itemQuanities, setQuantity) => {
    //  onClick={() => {const newData = itemQuanities; newData[item.id] = newData[item.id]++; clickHandle(newData)}}

    const updateItem = (value) => {
        const amount = itemQuanities[item.id] + value;
        setQuantity({ ...itemQuanities, [item.id]: amount})
        console.log(`${item.id}`)
    }


    return <div className="item-holder">
        <div className="item-desc">
            <p>{item.name}</p>
            <p>£{item.price.toFixed(2)}</p>
        </div>
        <div className="item-buttons">
            <p onClick={() => {updateItem(1)}}>+</p>
            <p onClick={() => {updateItem(-1)}}>-</p>
            <p>{itemQuanities[item.id]}</p>
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
        for (const quantity in itemQuantity) {
            const item = items.find(item => item.id == quantity)
            _totalPrice += item.price * itemQuantity[quantity]
        }
        setTotalPrice(_totalPrice);
    
        console.log(totalPrice);
    }, [itemQuantity])
    
    items.forEach(item => {
        itemsToDisplay.push(createItem(item, itemQuantity, clickHandle));
    });
    
    
    return (
        <div id="coffee-shop">
            <div id="img-wrapper">
                <img src="" />

            </div>
            <div id="item-list">
                {itemsToDisplay}
            </div>
            <div>{totalPrice.toFixed(2)}</div>
        </div>
    );


}

