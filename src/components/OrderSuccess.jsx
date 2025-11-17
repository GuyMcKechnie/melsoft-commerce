import React from "react";

const OrderSuccess = () => {
    return (
        <div className="p-8 text-center">
            <h2 className="text-3xl font-bold mb-4 text-green-600">
                Order Successful!
            </h2>
            <p className="mb-4">
                Thank you for your purchase. Your order has been placed
                successfully.
            </p>
            <a href="/" className="text-blue-500 underline">
                Return to Home
            </a>
        </div>
    );
};

export default OrderSuccess;
