import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../redux/cartSlice";
import OrderSummary from "./OrderSummary";
import { Link } from "react-router-dom";
import { CreditCard, Gift } from "lucide-react";

const ShippingForm = ({ values, onChange, errors, submitted }) => (
    <div className="flex flex-col items-start p-4 gap-2 bg-white rounded-[13px]">
        <div className="w-full flex items-center justify-between px-2 py-2">
            <h3 className="text-[31.25px] leading-[38px] tracking-[0.25em] uppercase text-[#1A1F16]">
                Shipping Address
            </h3>
            <button
                type="button"
                className="box-border inline-flex justify-center items-center px-6 py-2 gap-2 border border-[#1A1F16] rounded-[11px] text-[16px] leading-[19px] text-[#1A1F16]"
            >
                Change
            </button>
        </div>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
                <label
                    htmlFor="name"
                    className="block mb-1 text-[20px] leading-6 text-[#1A1F16]"
                >
                    Full Name
                </label>
                <input
                    id="name"
                    name="name"
                    value={values.name}
                    onChange={onChange}
                    className="w-full border border-[#60695C] rounded-[9px] p-2 text-[20px] leading-6 text-[#1A1F16]"
                    required
                />
                {submitted && errors.name && (
                    <span className="text-red-500 text-sm">
                        Name is required.
                    </span>
                )}
            </div>
            <div>
                <label
                    htmlFor="address"
                    className="block mb-1 text-[20px] leading-6 text-[#1A1F16]"
                >
                    Address
                </label>
                <input
                    id="address"
                    name="address"
                    value={values.address}
                    onChange={onChange}
                    className="w-full border border-[#60695C] rounded-[9px] p-2 text-[20px] leading-6 text-[#1A1F16]"
                    required
                />
                {submitted && errors.address && (
                    <span className="text-red-500 text-sm">
                        Address is required.
                    </span>
                )}
            </div>
            <div>
                <label
                    htmlFor="city"
                    className="block mb-1 text-[20px] leading-6 text-[#1A1F16]"
                >
                    City
                </label>
                <input
                    id="city"
                    name="city"
                    value={values.city}
                    onChange={onChange}
                    className="w-full border border-[#60695C] rounded-[9px] p-2 text-[20px] leading-6 text-[#1A1F16]"
                    required
                />
                {submitted && errors.city && (
                    <span className="text-red-500 text-sm">
                        City is required.
                    </span>
                )}
            </div>
            <div>
                <label
                    htmlFor="postal"
                    className="block mb-1 text-[20px] leading-6 text-[#1A1F16]"
                >
                    Postal Code
                </label>
                <input
                    id="postal"
                    name="postal"
                    value={values.postal}
                    onChange={onChange}
                    className="w-full border border-[#60695C] rounded-[9px] p-2 text-[20px] leading-6 text-[#1A1F16]"
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

const PaymentForm = ({ submitted, errors }) => {
    const { methods, defaultMethodId, selectedMethodId } = useSelector(
        (state) => state.payment
    );
    const effectiveId = defaultMethodId || selectedMethodId || null;
    const method = methods.find((m) => m.id === effectiveId);
    const [billingSame, setBillingSame] = useState(true);
    return (
        <div className="flex flex-col bg-white rounded-[13px] p-4">
            <div className="flex items-start justify-between px-2 py-2">
                <h3 className="text-[31.25px] leading-[38px] tracking-[0.25em] uppercase text-[#1A1F16]">
                    Payment Method
                </h3>
                <Link
                    to="/add-payment"
                    className="inline-flex justify-center items-center px-6 py-2 border border-[#1A1F16] rounded-[11px] text-[16px] leading-[19px] text-[#1A1F16]"
                >
                    Change
                </Link>
            </div>
            <div className="flex flex-col gap-4 px-2 pt-2">
                {method ? (
                    <>
                        <div className="flex items-center gap-3 text-[#1A1F16]">
                            <span className="w-6 h-6 inline-flex items-center justify-center text-[#1A1F16]">
                                <CreditCard size={20} />
                            </span>
                            <span className="text-[20px] leading-6">
                                {method.brand} ending in {method.last4}
                            </span>
                        </div>
                        <div className="flex items-center gap-3 text-[#60695C]">
                            <span className="w-6 h-6 inline-flex items-center justify-center">
                                <Gift size={20} />
                            </span>
                            <span className="text-[20px] leading-6">
                                $ 53.21{" "}
                                <span className="text-[#1A1F16]">
                                    gift card balance
                                </span>
                            </span>
                        </div>
                    </>
                ) : (
                    <div className="text-[#60695C] text-[16px]">
                        No payment method selected. Please add one.
                    </div>
                )}
                <div className="flex items-center gap-3 text-[#1A1F16]">
                    <label className="flex items-center gap-3 cursor-pointer select-none">
                        <span className="relative inline-block w-4 h-4 border border-[#60695C] rounded-xs">
                            {billingSame && (
                                <span className="absolute inset-0.5 bg-[#12805D]"></span>
                            )}
                        </span>
                        <input
                            type="checkbox"
                            checked={billingSame}
                            onChange={(e) => setBillingSame(e.target.checked)}
                            className="sr-only"
                        />
                        <span className="text-[20px] leading-6">
                            Billing address same as Shipping Address
                        </span>
                    </label>
                </div>
            </div>
            {submitted && errors.payment && (
                <span className="text-red-500 text-sm mt-2 px-2">
                    {errors.payment}
                </span>
            )}
        </div>
    );
};

const CheckoutForm = () => {
    const [shipping, setShipping] = useState({
        name: "",
        address: "",
        city: "",
        postal: "",
    });
    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);
    const dispatch = useDispatch();
    const items = useSelector((state) => state.cart.items);
    const paymentState = useSelector((state) => state.payment);

    const handleShippingChange = (e) => {
        setShipping({ ...shipping, [e.target.name]: e.target.value });
    };

    const validate = () => {
        const newErrors = {};
        if (!shipping.name) newErrors.name = "Name is required.";
        if (!shipping.address) newErrors.address = "Address is required.";
        if (!shipping.city) newErrors.city = "City is required.";
        if (!shipping.postal) newErrors.postal = "Postal code is required.";
        // Require at least one payment method
        const methodExists =
            paymentState.defaultMethodId || paymentState.selectedMethodId;
        if (!methodExists) newErrors.payment = "No payment method selected.";
        return newErrors;
    };

    const handleSubmit = (e) => {
        console.debug("Order placed: " + e);

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
        <div className="relative w-full min-h-screen overflow-y-auto bg-[#EDEDED]">
            <div className="mx-auto max-w-[1200px] px-4 sm:px-6 py-10">
                <form onSubmit={handleSubmit} noValidate>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        <div className="lg:col-span-2 flex flex-col gap-6">
                            <ShippingForm
                                values={shipping}
                                onChange={handleShippingChange}
                                errors={errors}
                                submitted={submitted}
                            />
                            <PaymentForm
                                submitted={submitted}
                                errors={errors}
                            />
                            <div className="flex flex-col justify-center items-start p-4 gap-2 bg-white rounded-[13px]">
                                <div className="px-2 pb-6">
                                    <h2 className="text-[31.25px] leading-[38px] tracking-[0.25em] uppercase text-[#1A1F16]">
                                        Review Your Bag
                                    </h2>
                                </div>
                                <div className="w-full flex flex-col px-2 pb-4 text-[#60695C] text-[16px]">
                                    {items.length === 0 ? (
                                        <span>Your bag is empty.</span>
                                    ) : (
                                        <ul className="divide-y divide-gray-200">
                                            {items.map((item, idx) => (
                                                <li
                                                    key={item.id || idx}
                                                    className="py-2 flex justify-between items-center"
                                                >
                                                    <div>
                                                        <span className="font-semibold text-[#1A1F16]">
                                                            {item.name}
                                                        </span>
                                                        {item.quantity && (
                                                            <span className="ml-2 text-[#60695C]">
                                                                x{item.quantity}
                                                            </span>
                                                        )}
                                                    </div>
                                                    <span className="text-[#1A1F16]">
                                                        $
                                                        {item.price?.toFixed
                                                            ? item.price.toFixed(
                                                                  2
                                                              )
                                                            : item.price}
                                                    </span>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="lg:col-span-1 flex flex-col gap-3">
                            <OrderSummary />
                            <button
                                type="button"
                                onClick={() => window.history.back()}
                                className="self-start inline-flex items-center justify-center px-4 py-2 border border-[#1A1F16] rounded-[11px] text-[#1A1F16]"
                            >
                                Back
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CheckoutForm;
