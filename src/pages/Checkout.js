import { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import Header from "../Components/Navbar/Header";
import CartProduct from "../Components/Product/CartProduct";
import { useSiteContext } from "../store/SiteProvider";
import classes from "./Checkout.module.css";

const formatPrice = (iprice) => {
    let price = iprice.toString();
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

const Checkout = () => {
    const navigate = useNavigate();
    const [state, dispatch] = useSiteContext();
    const totalPrice = state.cart.reduce((acc, item) => acc + item.price, 0);
    const totalAmount = state.cart.reduce((acc, item) => acc + item.amount, 0);
    const formattedTotalPrice = formatPrice(totalPrice);

    useEffect(() => {
        // Ensure cart is cleared
        console.log("Clearing cart...");
        dispatch({ type: "CLEAR" });
    }, [dispatch]);

    const handleProceedToBuy = () => {
        navigate('/thank-you');
    }

    return (
        <div>
            <Header />
            <div className={classes.page}>
                <div className={classes.items}>
                    <div className={classes.header}>
                        {(totalAmount > 0) ? <h1 className={classes.h1}>Shopping Cart</h1> : <h1 className={classes.h1}>Your Cart is Empty</h1>}
                        <p>Price</p>
                    </div>
                    {state.cart.map((item) => (
                        <CartProduct key={item.id} item={item} />
                    ))}
                    <div className={classes.footer}>
                        <p>
                            <span>{`Subtotal (${totalAmount} items): ₹`}</span>
                            <strong>{formattedTotalPrice}</strong>
                        </p>
                    </div>
                </div>
                {(totalAmount > 0) && <div className={classes.bill}>
                    <p>
                        <span>{`Subtotal (${totalAmount} items): ₹`}</span>
                        <strong>{formattedTotalPrice}</strong>
                    </p>
                    <button className={classes.button} onClick={handleProceedToBuy}>Proceed to Buy</button>
                </div>}
            </div>
        </div>
    );
}

export default Checkout;
