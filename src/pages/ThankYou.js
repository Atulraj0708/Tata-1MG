import React from 'react';
import { Link } from 'react-router-dom';
import './ThankYou.css';

const ThankYou = () => {
    return (
        <div className="thank-you-container">
            <h1 className="thank-you-heading">Thanks for shopping from Tata 1MG. Visit again!</h1>
            <Link to="/" className="shop-again-link">Shop Again</Link>
        </div>
    );
}

export default ThankYou;
