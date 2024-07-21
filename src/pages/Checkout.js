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
    const totalPrice = state.cart.reduce((acc, item) => acc + item.price * item.amount, 0);
    const totalAmount = state.cart.reduce((acc, item) => acc + item.amount, 0);
    const formattedTotalPrice = formatPrice(totalPrice);

    const handleProceedToBuy = () => {
        navigate('/payment');
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
                    {state.cart.length > 0 ? (
                        state.cart.map((item) => (
                            <div key={item.id} className={classes.cartProduct}>
                                <img src={item.image} alt={item.description} />
                                <div className={classes.cartProductDetails}>
                                    <p>{item.description}</p>
                                    <div className={classes.quantityControl}>
                                        <button className={classes.quantityButton} onClick={() => dispatch({ type: "DECREASE", id: item.id })}>-</button>
                                        <span className={classes.quantity}>{item.amount}</span>
                                        <button className={classes.quantityButton} onClick={() => dispatch({ type: "INCREASE", id: item.id })}>+</button>
                                    </div>
                                    <button className={classes.removeButton} onClick={() => dispatch({ type: "REMOVE", id: item.id })}>Remove from Cart</button>
                                </div>
                                <p className={classes.price}>
                                    <small><sup>₹</sup></small>
                                    <strong>{item.price * item.amount}</strong>
                                </p>
                            </div>
                        ))
                    ) : (
                        <p>Your cart is empty.</p>
                    )}
                </div>
                {totalAmount > 0 && (
                    <div className={classes.bill}>
                        <p>
                            <span>{`Subtotal (${totalAmount} items): ₹`}</span>
                            <strong>{formattedTotalPrice}</strong>
                        </p>
                        <button className={classes.button} onClick={handleProceedToBuy}>Proceed to Buy</button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Checkout;
