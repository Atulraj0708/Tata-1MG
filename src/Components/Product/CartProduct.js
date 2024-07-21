import React, { useState } from 'react';
import { useSiteContext } from "../../store/SiteProvider";
import "./CartProduct.css";

const CartProduct = (props) => {
    const dispatch = useSiteContext()[1];
    const [quantity, setQuantity] = useState(props.item.amount);

    const removeItemHandler = () => {
        dispatch({
            type: "REMOVE",
            id: props.item.id
        });
    };

    const increaseQuantity = () => {
        const newQuantity = quantity + 1;
        setQuantity(newQuantity);

        dispatch({
            type: "ADD",
            item: {
                ...props.item,
                amount: newQuantity
            }
        });
    };

    const decreaseQuantity = () => {
        if (quantity > 1) {
            const newQuantity = quantity - 1;
            setQuantity(newQuantity);

            dispatch({
                type: "ADD",
                item: {
                    ...props.item,
                    amount: newQuantity
                }
            });
        }
    };

    return (
        <div className="card">
            <img className="img" src={props.item.image} alt="" />
            <div className="desc">
                <p>{props.item.description}</p>
                <div className="quantityControl">
                    <button onClick={decreaseQuantity} className="quantityButton">-</button>
                    <span className="quantity">{quantity}</span>
                    <button onClick={increaseQuantity} className="quantityButton">+</button>
                </div>
                <button onClick={removeItemHandler} className="button">Remove from Cart</button>
            </div>
            <p className="price">
                <small><sup>₹</sup></small>
                <strong>{props.item.price * quantity}</strong>
            </p>
        </div>
    );
};

export default CartProduct;
