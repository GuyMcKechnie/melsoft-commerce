import React from "react";
import { useSelector } from "react-redux";

const OrderSummary = () => {
    const items = useSelector((state) => state.cart.items);
    const total = items.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );

    return (
        <div className="mb-8">
            <h2 className="text-xl font-bold mb-4">Order Summary</h2>
            {items.length === 0 ? (
                <p className="text-gray-500">Your cart is empty.</p>
            ) : (
                <div>
                    <ul className="divide-y divide-gray-200 mb-4">
                        {items.map((item) => (
                            <li
                                key={item.id}
                                className="py-2 flex justify-between"
                            >
                                <span>
                                    {item.name} x {item.quantity}
                                </span>
                                <span>
                                    ${(item.price * item.quantity).toFixed(2)}
                                </span>
                            </li>
                        ))}
                    </ul>
                    <div className="flex justify-between font-semibold">
                        <span>Total:</span>
                        <span>${total.toFixed(2)}</span>
                    </div>
                </div>
            )}
        </div>
    );
};

export default OrderSummary;
