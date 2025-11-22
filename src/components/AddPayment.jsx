import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    addMethod,
    selectMethod,
    setDefaultMethod,
} from "../redux/paymentSlice";
import { Calendar, CreditCard, EyeClosed, Lock } from "lucide-react";
import { useNavigate } from "react-router-dom";

// Basic helpers
const digitsOnly = (v) => v.replace(/[^0-9]/g, "");

const AddPayment = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { methods, selectedMethodId, defaultMethodId } = useSelector(
        (s) => s.payment
    );

    const [cardholderName, setCardholderName] = useState("");
    const [cardNumber, setCardNumber] = useState("");
    const [expiry, setExpiry] = useState(""); // MM/YYYY
    const [cvc, setCvc] = useState("");
    const [isDefault, setIsDefault] = useState(false);
    const [errors, setErrors] = useState({});

    const validate = () => {
        const e = {};
        if (!cardholderName.trim()) e.cardholderName = "Required";
        const raw = digitsOnly(cardNumber);
        if (raw.length < 12) e.cardNumber = "Invalid";
        if (!/^\d{2}\/\d{4}$/.test(expiry)) e.expiry = "Format MM/YYYY";
        if (!/^\d{3,4}$/.test(cvc)) e.cvc = "3-4 digits";
        return e;
    };

    const onSubmit = (e) => {
        e.preventDefault();
        const eMap = validate();
        setErrors(eMap);
        if (Object.keys(eMap).length) return;
        const raw = digitsOnly(cardNumber);
        const last4 = raw.slice(-4);
        const brandGuess = raw.startsWith("4")
            ? "VISA"
            : raw.startsWith("5")
            ? "MasterCard"
            : "Card";
        const id = Date.now().toString();
        dispatch(
            addMethod({
                id,
                brand: brandGuess,
                cardholderName: cardholderName.trim(),
                last4,
                expiry,
                isDefault,
            })
        );
        if (isDefault) dispatch(setDefaultMethod(id));
        // Clear form
        setCardholderName("");
        setCardNumber("");
        setExpiry("");
        setCvc("");
        setIsDefault(false);
    };

    const handleSelect = (id) => {
        dispatch(selectMethod(id));
    };

    return (
        <div className="min-h-screen bg-[#EDEDED] flex flex-col items-center py-12 px-4">
            <div className="w-full max-w-2xl space-y-10">
                <div className="bg-white rounded-[15px] p-6 shadow-sm">
                    <h2 className="text-[31.25px] leading-[38px] tracking-[0.25em] uppercase text-[#1A1F16] mb-4">
                        Select a Card
                    </h2>
                    {methods.length === 0 && (
                        <p className="text-[#60695C] text-sm">
                            No saved cards yet.
                        </p>
                    )}
                    <ul className="space-y-2">
                        {methods.map((m) => (
                            <li
                                key={m.id}
                                className={`flex items-center gap-3 p-2 rounded cursor-pointer ${
                                    selectedMethodId === m.id
                                        ? "bg-gray-100"
                                        : ""
                                }`}
                                onClick={() => handleSelect(m.id)}
                            >
                                <CreditCard
                                    size={20}
                                    className="text-gray-600"
                                />
                                <span className="text-[20px] leading-6 text-gray-600">
                                    {m.brand} ending in {m.last4}
                                </span>
                                {defaultMethodId === m.id && (
                                    <span className="ml-auto text-xs px-2 py-1 rounded bg-emerald-100 text-emerald-700">
                                        Default
                                    </span>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>

                <form
                    onSubmit={onSubmit}
                    className="bg-white rounded-[15px] p-6 shadow-sm space-y-6"
                >
                    <h2 className="text-[31.25px] leading-[38px] tracking-[0.25em] uppercase text-[#1A1F16]">
                        Add a New Card
                    </h2>
                    <div className="space-y-4">
                        <div>
                            <label className="block text-[20px] leading-6 text-[#1A1F16] mb-1">
                                Cardholder Name
                            </label>
                            <input
                                value={cardholderName}
                                onChange={(e) =>
                                    setCardholderName(e.target.value)
                                }
                                className="w-full h-14 px-4 rounded-[13px] shadow focus:outline-none border border-transparent bg-white text-[20px]"
                                placeholder="John Maker"
                            />
                            {errors.cardholderName && (
                                <p className="text-red-500 text-sm mt-1">
                                    {errors.cardholderName}
                                </p>
                            )}
                        </div>
                        <div>
                            <label className="block text-[20px] leading-6 text-[#1A1F16] mb-1">
                                Card Number
                            </label>
                            <div className="flex items-center h-14 px-4 rounded-[13px] shadow bg-white">
                                <CreditCard
                                    size={20}
                                    className="text-gray-500 mr-3"
                                />
                                <input
                                    value={cardNumber}
                                    onChange={(e) =>
                                        setCardNumber(e.target.value)
                                    }
                                    className="flex-1 focus:outline-none text-[20px]"
                                    placeholder="5126-5987-2214-7621"
                                />
                            </div>
                            {errors.cardNumber && (
                                <p className="text-red-500 text-sm mt-1">
                                    {errors.cardNumber}
                                </p>
                            )}
                        </div>
                        <div className="flex flex-col sm:flex-row gap-6">
                            <div className="flex-1">
                                <label className="block text-[20px] leading-6 text-[#1A1F16] mb-1">
                                    Expiry Date
                                </label>
                                <div className="flex items-center h-14 px-4 rounded-[13px] shadow bg-white">
                                    <span className="text-gray-500 mr-3">
                                        <Calendar size={20} />
                                    </span>
                                    <input
                                        value={expiry}
                                        onChange={(e) =>
                                            setExpiry(e.target.value)
                                        }
                                        className="flex-1 focus:outline-none text-[20px]"
                                        placeholder="MM/YYYY"
                                    />
                                </div>
                                {errors.expiry && (
                                    <p className="text-red-500 text-sm mt-1">
                                        {errors.expiry}
                                    </p>
                                )}
                            </div>
                            <div className="w-40">
                                <label className="block text-[20px]  leading-6 text-[#1A1F16] mb-1">
                                    CVC
                                </label>
                                <div className="flex items-center h-14 px-4 rounded-[13px] shadow bg-white">
                                    <input
                                        value={cvc}
                                        onChange={(e) =>
                                            setCvc(digitsOnly(e.target.value))
                                        }
                                        className="flex-1 focus:outline-none text-[20px]"
                                        placeholder="123"
                                        maxLength={4}
                                    />
                                </div>
                                {errors.cvc && (
                                    <p className="text-red-500 text-sm mt-1">
                                        {errors.cvc}
                                    </p>
                                )}
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <input
                                type="checkbox"
                                checked={isDefault}
                                onChange={(e) => setIsDefault(e.target.checked)}
                                className="w-4 h-4 border border-[#60695C] rounded"
                            />
                            <span className="text-[20px] leading-6 text-[#1A1F16]">
                                Save this as your default payment method
                            </span>
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="w-full h-14 bg-[#1A1F16] text-white rounded-[10px] flex items-center justify-center gap-2 text-[20px]"
                    >
                        <CreditCard size={20} /> Add Payment Method
                    </button>
                    <div className="flex items-center justify-between pt-2 text-sm">
                        <button
                            type="button"
                            onClick={() => navigate(-1)}
                            className="underline text-[#1A1F16]"
                        >
                            Back
                        </button>
                        <div className="flex items-center gap-2 text-emerald-600">
                            <Lock size={16} /> <span>Secure Connection</span>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddPayment;
