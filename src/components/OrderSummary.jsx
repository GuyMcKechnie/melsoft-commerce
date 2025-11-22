import React from "react";
import { useSelector } from "react-redux";
import { selectCartItems, selectCartTotalPrice } from "../redux/selectors";

const OrderSummary = () => {
    const items = useSelector(selectCartItems);
    const total = useSelector(selectCartTotalPrice);
    const shipping = items.length > 0 ? 6.99 : 0;
    const gst = items.length > 0 ? total * 0.13 : 0;
    const orderTotal = total + shipping + gst;

    return (
        <div className="mb-8 bg-white rounded-[13px] p-4 shadow-sm">
            <h2 className="text-[18px] font-semibold mb-4 text-[#1A1F16]">
                Order Summary
            </h2>
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
                    <div className="mt-4 space-y-2 text-sm">
                        <div className="flex justify-between">
                            <span className="text-[#1A1F16]">Items:</span>
                            <span>${total.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-[#1A1F16]">Shipping:</span>
                            <span>${shipping.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-[#1A1F16]">
                                Estimated GST:
                            </span>
                            <span>${gst.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-[#1A1F16]">Gift Card:</span>
                            <span>$0.00</span>
                        </div>
                        <hr className="my-2" />
                        <div className="flex justify-between font-semibold text-[#E5252C]">
                            <span>Order Total:</span>
                            <span>${orderTotal.toFixed(2)}</span>
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="mt-4 w-full bg-[#1A1F16] text-white py-2 rounded-[9px]"
                    >
                        Place your order
                    </button>
                </div>
            )}
        </div>
    );
};

export default OrderSummary;
