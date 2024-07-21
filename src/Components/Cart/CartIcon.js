import { useSiteContext } from "../../store/SiteProvider";
import { FaShoppingCart } from 'react-icons/fa';
import "./CartIcon.css";

const Cart = () => {
    const ctx = useSiteContext()[0];

    const totalItems = ctx.cart.reduce((acc,item) => acc + parseInt(item.amount),0)

    return (
        <div className="cartIcon">
            {totalItems > 0 && <div className="count">{totalItems}</div>}
            <FaShoppingCart className="cart" size={30} />
        </div>
    );
}

export default Cart;
