import { useNavigate } from 'react-router-dom';
import Header from "../Components/Navbar/Header";
import CartProduct from "../Components/Product/CartProduct";
import { useSiteContext } from "../store/SiteProvider";
import  "./Checkout.css";

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
            <div className="page">
                <div className="items">
                    <div className="header">
                        {(totalAmount > 0) ? <h1 className="h1">Shopping Cart</h1> : <h1 className="h1">Your Cart is Empty</h1>}
                        <p>Price</p>
                    </div>
                    {state.cart.length > 0 ? (
                        state.cart.map((item) => (
                            <div key={item.id} className="cartProduct">
                                <img src={item.image} alt={item.description} />
                                <div className="cartProductDetails">
                                    <p>{item.description}</p>
                                    <div className="quantityControl">
                                        <button className="quantityButton" onClick={() => dispatch({ type: "DECREASE", id: item.id })}>-</button>
                                        <span className="quantity">{item.amount}</span>
                                        <button className="quantityButton" onClick={() => dispatch({ type: "INCREASE", id: item.id })}>+</button>
                                    </div>
                                    <button className="removeButton" onClick={() => dispatch({ type: "REMOVE", id: item.id })}>Remove from Cart</button>
                                </div>
                                <p className="price">
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
                    <div className="bill">
                        <p>
                            <span>{`Subtotal (${totalAmount} items): ₹`}</span>
                            <strong>{formattedTotalPrice}</strong>
                        </p>
                        <button className="button" onClick={handleProceedToBuy}>Proceed to Buy</button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Checkout;
