import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import Header from "../Components/Navbar/Header";
import './Payment.css'; 

const Payment = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        cardNumber: '',
        cardHolder: '',
        expirationDate: '',
        cvv: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/thank-you');
    };

    return (
        <div>
            <Header />
            <div className="paymentPage">
                <h1 className="title">Payment Details</h1>
                <form onSubmit={handleSubmit} className="form">
                    <div className="formGroup">
                        <label htmlFor="cardNumber">Card Number</label>
                        <input
                            type="text"
                            id="cardNumber"
                            name="cardNumber"
                            placeholder="1234 5678 9012 3456"
                            value={formData.cardNumber}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="formGroup">
                        <label htmlFor="cardHolder">Card Holder's Name</label>
                        <input
                            type="text"
                            id="cardHolder"
                            name="cardHolder"
                            placeholder="Atul Raj"
                            value={formData.cardHolder}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="formGroup">
                        <label htmlFor="expirationDate">Expiration Date</label>
                        <input
                            type="text"
                            id="expirationDate"
                            name="expirationDate"
                            placeholder="MM/YY"
                            value={formData.expirationDate}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="formGroup">
                        <label htmlFor="cvv">CVV</label>
                        <input
                            type="text"
                            id="cvv"
                            name="cvv"
                            placeholder="123"
                            value={formData.cvv}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <button type="submit" className="submitButton">Submit Payment</button>
                </form>
            </div>
        </div>
    );
};

export default Payment;
