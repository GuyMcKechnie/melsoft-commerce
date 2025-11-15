import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { clearCart } from "../redux/cartSlice";
import OrderSummary from "./OrderSummary";

const ShippingForm = ({ values, onChange, errors, submitted }) => (
    <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Shipping Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
                <label htmlFor="name" className="block mb-1">
                    Full Name
                </label>
                <input
                    id="name"
                    name="name"
                    value={values.name}
                    onChange={onChange}
                    className="w-full border rounded p-2"
                    required
                />
                {submitted && errors.name && (
                    <span className="text-red-500 text-sm">
                        Name is required.
                    </span>
                )}
            </div>
            <div>
                <label htmlFor="address" className="block mb-1">
                    Address
                </label>
                <input
                    id="address"
                    name="address"
                    value={values.address}
                    onChange={onChange}
                    className="w-full border rounded p-2"
                    required
                />
                {submitted && errors.address && (
                    <span className="text-red-500 text-sm">
                        Address is required.
                    </span>
                )}
            </div>
            <div>
                <label htmlFor="city" className="block mb-1">
                    City
                </label>
                <input
                    id="city"
                    name="city"
                    value={values.city}
                    onChange={onChange}
                    className="w-full border rounded p-2"
                    required
                />
                {submitted && errors.city && (
                    <span className="text-red-500 text-sm">
                        City is required.
                    </span>
                )}
            </div>
            <div>
                <label htmlFor="postal" className="block mb-1">
                    Postal Code
                </label>
                <input
                    id="postal"
                    name="postal"
                    value={values.postal}
                    onChange={onChange}
                    className="w-full border rounded p-2"
                    required
                />
                {submitted && errors.postal && (
                    <span className="text-red-500 text-sm">
                        Postal code is required.
                    </span>
                )}
            </div>
        </div>
    </div>
);

const PaymentForm = ({ values, onChange, errors, submitted }) => (
    <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Payment Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
                <label htmlFor="card" className="block mb-1">
                    Card Number
                </label>
                <input
                    id="card"
                    name="card"
                    value={values.card}
                    onChange={onChange}
                    className="w-full border rounded p-2"
                    required
                />
                {submitted && errors.card && (
                    <span className="text-red-500 text-sm">
                        Card number is required.
                    </span>
                )}
            </div>
            <div>
                <label htmlFor="expiry" className="block mb-1">
                    Expiry Date
                </label>
                <input
                    id="expiry"
                    name="expiry"
                    value={values.expiry}
                    onChange={onChange}
                    className="w-full border rounded p-2"
                    required
                />
                {submitted && errors.expiry && (
                    <span className="text-red-500 text-sm">
                        Expiry date is required.
                    </span>
                )}
            </div>
            <div>
                <label htmlFor="cvv" className="block mb-1">
                    CVV
                </label>
                <input
                    id="cvv"
                    name="cvv"
                    value={values.cvv}
                    onChange={onChange}
                    className="w-full border rounded p-2"
                    required
                />
                {submitted && errors.cvv && (
                    <span className="text-red-500 text-sm">
                        CVV is required.
                    </span>
                )}
            </div>
        </div>
    </div>
);

const CheckoutForm = () => {
    const [shipping, setShipping] = useState({
        name: "",
        address: "",
        city: "",
        postal: "",
    });
    const [payment, setPayment] = useState({ card: "", expiry: "", cvv: "" });
    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);
    const dispatch = useDispatch();

    const handleShippingChange = (e) => {
        setShipping({ ...shipping, [e.target.name]: e.target.value });
    };
    const handlePaymentChange = (e) => {
        setPayment({ ...payment, [e.target.name]: e.target.value });
    };

    const validate = () => {
        const newErrors = {};
        if (!shipping.name) newErrors.name = "Name is required.";
        if (!shipping.address) newErrors.address = "Address is required.";
        if (!shipping.city) newErrors.city = "City is required.";
        if (!shipping.postal) newErrors.postal = "Postal code is required.";
        if (!payment.card) newErrors.card = "Card number is required.";
        if (!payment.expiry) newErrors.expiry = "Expiry date is required.";
        if (!payment.cvv) newErrors.cvv = "CVV is required.";
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = validate();
        setErrors(newErrors);
        setSubmitted(true);
        if (Object.keys(newErrors).length === 0) {
            dispatch(clearCart());
            window.location.href = "/order-success";
        }
    };

    return (
        <div className="max-w-3xl mx-auto p-8 bg-white rounded shadow">
            <h2 className="text-2xl font-bold mb-6">Checkout</h2>
            <form onSubmit={handleSubmit} noValidate>
                <ShippingForm
                    values={shipping}
                    onChange={handleShippingChange}
                    errors={errors}
                    submitted={submitted}
                />
                <PaymentForm
                    values={payment}
                    onChange={handlePaymentChange}
                    errors={errors}
                    submitted={submitted}
                />
                <OrderSummary />
                <button
                    type="submit"
                    className="mt-6 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
                >
                    Place Order
                </button>
            </form>
        </div>
    );
};

export default CheckoutForm;
