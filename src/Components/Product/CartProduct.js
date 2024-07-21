import { useSiteContext } from "../../store/SiteProvider";

import classes from "./CartProduct.module.css";

// const formatPrice = (iprice) => {

//     let price = iprice + "";

//     const len = price.length;
//     let formattedPrice = "";

//     let pos = 3;
//     let temp = 0;

//     for(let i = len-1 ; i >= 0 ; i--){
//         temp++;

//         if(temp === pos){
//             formattedPrice = price.charAt(i) + formattedPrice;
//             formattedPrice = "," + formattedPrice;
//             temp = 0;

//             if(temp === 3){
//                 pos = 2;
//             }
//         }
//         else {
//             formattedPrice = price.charAt(i) + formattedPrice;
//         }

//     }

//     return formattedPrice;
// }

const CartProduct = (props) => {

    const dispatch = useSiteContext()[1];

    const removeItemHandler = () => {

        dispatch({
            type: "REMOVE",
            id: props.item.id
        })
    }

    return (
        <div className = {classes.card}>
            <img className = {classes.img} src= {props.item.image} alt="" />
            <div className = {classes.desc}>
                <p>{props.item.description}</p>
                <p className = {classes.qty}>{`Qty: ${props.item.amount}`}</p>
                <button onClick={removeItemHandler} className = {classes.button}>Remove from Cart</button>
            </div>
            <p className = {classes.price}>
                <small><sup>₹</sup></small>
                <strong>{(props.item.price)}</strong>
            </p>
        </div>
    );

}

export default CartProduct;