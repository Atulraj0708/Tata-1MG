import React from 'react';
import { Link } from 'react-router-dom';
import './ThankYou.css';
import { useEffect } from "react";

import { useSiteContext } from "../store/SiteProvider";
const ThankYou = () => {
    
    const [state, dispatch] = useSiteContext();
    useEffect(() => {
        // Ensure cart is cleared
        console.log("Clearing cart...");
        dispatch({ type: "CLEAR" });
    }, [dispatch]);
    return (
        <div className="thank-you-container">
            <h1 className="thank-you-heading">Thanks for shopping from Tata 1MG. Visit again!</h1>
            <Link to="/" className="shop-again-link">Shop Again</Link>
        </div>
    );
}

export default ThankYou;
