import { useSiteContext } from "../../store/SiteProvider";
import { FaShoppingCart } from 'react-icons/fa';
import classes from "./CartIcon.module.css";

const Cart = () => {
    const ctx = useSiteContext()[0];

    const totalItems = ctx.cart.reduce((acc,item) => acc + parseInt(item.amount),0)

    return (
        <div className={classes.cartIcon}>
            {totalItems > 0 && <div className={classes.count}>{totalItems}</div>}
            <FaShoppingCart className={classes.cart} size={30} />
        </div>
    );
}

export default Cart;
