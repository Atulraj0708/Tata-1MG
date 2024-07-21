

import classes from "./Product.module.css";
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { useSiteContext } from "../../store/SiteProvider";

const formatPrice = (price) => {
    const len = price.length;
    let formattedPrice = "";

    let pos = 3;
    let temp = 0;

    for(let i = len-1 ; i >= 0 ; i--){
        temp++;

        if(temp === pos){
            formattedPrice = price.charAt(i) + formattedPrice;
            formattedPrice = "" + formattedPrice;
            temp = 0;

            if(temp === 3){
                pos = 2;
            }
        }
        else {
            formattedPrice = price.charAt(i) + formattedPrice;
        }

    }

    return formattedPrice;
}

const Product = ({id,image,description,rating,price}) => {

    const dispatch = useSiteContext()[1];

    const addToCartHandler = () => {
        dispatch({
            type: "ADD",
            item: {
                id,
                image,
                description,
                rating,
                price,
                amount: 1
            }
        })
    }

    return (
        <div className = {classes.card}>
            <div className = {classes.imgContainer}>
                <img src= {image} alt="description" />
            </div>            
            <div>
                <p className = {classes.description}>{description}</p>
                <div className = {classes.rating}>
                    {
                        Array(5)
                        .fill()
                        .map((ele,i) => {
                            if(i < rating){
                                return <StarIcon key = {i}/>
                            }
                            else{
                                return <StarBorderIcon key = {i}/>
                            }
                        })
                    }
                </div>
                <p className = {classes.price}>
                    <small><sup>₹</sup></small>
                    <strong>{formatPrice(price)}</strong>
                </p>
            </div>
            <button onClick={addToCartHandler}>Add to Cart</button>
        </div>
    );
}

export default Product;