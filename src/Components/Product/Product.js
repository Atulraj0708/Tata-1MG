import React from 'react';
import { useSiteContext } from "../../store/SiteProvider";
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import Swal from 'sweetalert2'; 
import './Product.css';

const formatPrice = (price) => {
    const len = price.length;
    let formattedPrice = "";
    let pos = 3;
    let temp = 0;
    for (let i = len - 1; i >= 0; i--) {
        temp++;
        if (temp === pos) {
            formattedPrice = price.charAt(i) + formattedPrice;
            formattedPrice = "" + formattedPrice;
            temp = 0;
            if (temp === 3) {
                pos = 2;
            }
        } else {
            formattedPrice = price.charAt(i) + formattedPrice;
        }
    }
    return formattedPrice;
}

const Product = ({ id, image, description, rating, price }) => {
    const [state, dispatch] = useSiteContext();
    const { user } = state;

    const addToCartHandler = () => {
        if (user) {
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
            });

            Swal.fire({
                icon: 'success',
                title: 'Item Added to Cart',
                text: 'The item has been added to your cart successfully!',
                confirmButtonText: 'OK'
            });
        } else {
            Swal.fire({
                icon: 'warning',
                title: 'Please Login',
                text: 'You need to be logged in to add items to your cart!',
                confirmButtonText: 'OK'
            });
        }
    };

    return (
        <div className="card">
            <div className="imgContainer">
                <img src={image} alt="description" />
            </div>
            <div>
                <p className="description">{description}</p>
                <div className="rating">
                    {
                        Array(5)
                        .fill()
                        .map((ele, i) => {
                            if (i < rating) {
                                return <StarIcon key={i} />
                            } else {
                                return <StarBorderIcon key={i} />
                            }
                        })
                    }
                </div>
                <p className="price">
                    <small><sup>₹</sup></small>
                    <strong>{formatPrice(price)}</strong>
                </p>
            </div>
            <button onClick={addToCartHandler}>Add to Cart</button>
        </div>
    );
}

export default Product;