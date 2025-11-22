import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
    addAddress,
    selectAddress,
    setDefaultAddress,
} from "../redux/addressSlice";
import { Lock } from "lucide-react";

const AddAddress = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { addresses, selectedAddressId } = useSelector((s) => s.address);

    const [shippingName, setShippingName] = useState("");
    const [streetName, setStreetName] = useState("");
    const [city, setCity] = useState("");
    const [stateProvince, setStateProvince] = useState("");
    const [country, setCountry] = useState("");
    const [isDefault, setIsDefault] = useState(false);
    const [errors, setErrors] = useState({});

    const validate = () => {
        const errs = {};
        if (!shippingName.trim())
            errs.shippingName = "Shipping name is required.";
        if (!streetName.trim()) errs.streetName = "Street name is required.";
        if (!city.trim()) errs.city = "City is required.";
        if (!stateProvince.trim())
            errs.stateProvince = "State/Province is required.";
        if (!country.trim()) errs.country = "Country is required.";
        return errs;
    };

    const onSubmit = (e) => {
        e.preventDefault();
        const errs = validate();
        setErrors(errs);
        if (Object.keys(errs).length > 0) return;

        const newAddress = {
            shippingName: shippingName.trim(),
            streetName: streetName.trim(),
            city: city.trim(),
            stateProvince: stateProvince.trim(),
            country: country.trim(),
            isDefault,
        };

        dispatch(addAddress(newAddress));
        navigate("/checkout");
    };

    const handleSelect = (id) => {
        dispatch(selectAddress(id));
    };

    const handleSetDefault = (id) => {
        dispatch(setDefaultAddress(id));
    };

    return (
        <div className="min-h-screen bg-[#F5F5F5] flex items-center justify-center p-8">
            <div className="w-full max-w-[676px] bg-white rounded-[15px] p-8 flex flex-col gap-4">
                <h2 className="text-[31.25px] leading-[38px] tracking-[0.25em] uppercase text-[#1A1F16] text-center mb-4">
                    Add New Address
                </h2>

                <form onSubmit={onSubmit} className="flex flex-col gap-4">
                    <div className="flex flex-col items-start p-2 gap-2.5">
                        <div className="flex flex-col justify-center items-start w-full gap-2">
                            <div className="flex flex-row items-center px-2 gap-2.5">
                                <label
                                    htmlFor="shippingName"
                                    className="font-cabin font-normal text-[16px] leading-[19px] tracking-[-0.02em] text-[rgba(26,31,22,0.5)]"
                                >
                                    Shipping Name
                                </label>
                            </div>
                            <div className="flex flex-row items-center px-4 py-2 gap-2 w-full h-[56px] bg-white shadow-[0px_4px_16px_rgba(26,31,22,0.15)] rounded-[13px]">
                                <div className="flex flex-row items-center p-2 gap-2.5 flex-1">
                                    <input
                                        id="shippingName"
                                        type="text"
                                        value={shippingName}
                                        onChange={(e) =>
                                            setShippingName(e.target.value)
                                        }
                                        placeholder="John Maker"
                                        className="flex-1 font-cabin font-medium text-[20px] leading-[24px] text-[#1A1F16] placeholder:text-[rgba(26,31,22,0.5)] outline-none"
                                    />
                                </div>
                            </div>
                        </div>
                        {errors.shippingName && (
                            <span className="text-red-500 text-sm px-2">
                                {errors.shippingName}
                            </span>
                        )}
                    </div>

                    <div className="flex flex-col items-start p-2 gap-2.5">
                        <div className="flex flex-col justify-center items-start w-full gap-2">
                            <div className="flex flex-row items-center px-2 gap-2.5">
                                <label
                                    htmlFor="streetName"
                                    className="font-cabin font-normal text-[16px] leading-[19px] tracking-[-0.02em] text-[rgba(26,31,22,0.5)]"
                                >
                                    Street Name
                                </label>
                            </div>
                            <div className="flex flex-row items-center px-4 py-2 gap-2 w-full h-[56px] bg-white shadow-[0px_4px_16px_rgba(26,31,22,0.15)] rounded-[13px]">
                                <div className="flex flex-row items-center p-2 gap-2.5 flex-1">
                                    <input
                                        id="streetName"
                                        type="text"
                                        value={streetName}
                                        onChange={(e) =>
                                            setStreetName(e.target.value)
                                        }
                                        placeholder="123 Plae Grond Stret"
                                        className="flex-1 font-cabin font-normal text-[20px] leading-[24px] text-[#1A1F16] placeholder:text-[rgba(26,31,22,0.5)] outline-none"
                                    />
                                </div>
                            </div>
                        </div>
                        {errors.streetName && (
                            <span className="text-red-500 text-sm px-2">
                                {errors.streetName}
                            </span>
                        )}
                    </div>

                    <div className="flex flex-col items-start p-2 gap-2.5">
                        <div className="flex flex-col justify-center items-start w-full gap-2">
                            <div className="flex flex-row items-center px-2 gap-2.5">
                                <label
                                    htmlFor="city"
                                    className="font-cabin font-normal text-[16px] leading-[19px] tracking-[-0.02em] text-[rgba(26,31,22,0.5)]"
                                >
                                    City
                                </label>
                            </div>
                            <div className="flex flex-row items-center px-4 py-2 gap-2 w-full h-[56px] bg-white shadow-[0px_4px_16px_rgba(26,31,22,0.15)] rounded-[13px]">
                                <div className="flex flex-row items-center p-2 gap-2.5 flex-1">
                                    <input
                                        id="city"
                                        type="text"
                                        value={city}
                                        onChange={(e) =>
                                            setCity(e.target.value)
                                        }
                                        placeholder="Vermont"
                                        className="flex-1 font-cabin font-normal text-[20px] leading-[24px] text-[#1A1F16] placeholder:text-[rgba(26,31,22,0.5)] outline-none"
                                    />
                                </div>
                            </div>
                        </div>
                        {errors.city && (
                            <span className="text-red-500 text-sm px-2">
                                {errors.city}
                            </span>
                        )}
                    </div>

                    <div className="flex flex-col items-start p-2 gap-2.5">
                        <div className="flex flex-col justify-center items-start w-full gap-2">
                            <div className="flex flex-row items-center px-2 gap-2.5">
                                <label
                                    htmlFor="stateProvince"
                                    className="font-cabin font-normal text-[16px] leading-[19px] tracking-[-0.02em] text-[rgba(26,31,22,0.5)]"
                                >
                                    State / Province
                                </label>
                            </div>
                            <div className="flex flex-row items-center px-4 py-2 gap-2 w-full h-[56px] bg-white shadow-[0px_4px_16px_rgba(26,31,22,0.15)] rounded-[13px]">
                                <div className="flex flex-row items-center p-2 gap-2.5 flex-1">
                                    <input
                                        id="stateProvince"
                                        type="text"
                                        value={stateProvince}
                                        onChange={(e) =>
                                            setStateProvince(e.target.value)
                                        }
                                        placeholder="California"
                                        className="flex-1 font-cabin font-normal text-[20px] leading-[24px] text-[#1A1F16] placeholder:text-[rgba(26,31,22,0.5)] outline-none"
                                    />
                                </div>
                            </div>
                        </div>
                        {errors.stateProvince && (
                            <span className="text-red-500 text-sm px-2">
                                {errors.stateProvince}
                            </span>
                        )}
                    </div>

                    <div className="flex flex-col items-start p-2 gap-2.5">
                        <div className="flex flex-col justify-center items-start w-full gap-2">
                            <div className="flex flex-row items-center px-2 gap-2.5">
                                <label
                                    htmlFor="country"
                                    className="font-cabin font-normal text-[16px] leading-[19px] tracking-[-0.02em] text-[rgba(26,31,22,0.5)]"
                                >
                                    Country
                                </label>
                            </div>
                            <div className="flex flex-row items-center px-4 py-2 gap-2 w-full h-[56px] bg-white shadow-[0px_4px_16px_rgba(26,31,22,0.15)] rounded-[13px]">
                                <div className="flex flex-row items-center p-2 gap-2.5 flex-1">
                                    <input
                                        id="country"
                                        type="text"
                                        value={country}
                                        onChange={(e) =>
                                            setCountry(e.target.value)
                                        }
                                        placeholder="United States of America"
                                        className="flex-1 font-cabin font-normal text-[20px] leading-[24px] text-[#1A1F16] placeholder:text-[rgba(26,31,22,0.5)] outline-none"
                                    />
                                </div>
                            </div>
                        </div>
                        {errors.country && (
                            <span className="text-red-500 text-sm px-2">
                                {errors.country}
                            </span>
                        )}
                    </div>

                    <div className="flex items-center gap-3 p-2 text-[#1A1F16]">
                        <label className="flex items-center gap-3 cursor-pointer select-none">
                            <span className="relative inline-block w-4 h-4 border border-[#60695C] rounded-xs">
                                {isDefault && (
                                    <span className="absolute inset-0.5 bg-[#12805D]"></span>
                                )}
                            </span>
                            <input
                                type="checkbox"
                                checked={isDefault}
                                onChange={(e) => setIsDefault(e.target.checked)}
                                className="sr-only"
                            />
                            <span className="font-cabin font-normal text-[20px] leading-[24px]">
                                Save this as your default address
                            </span>
                        </label>
                    </div>

                    <button
                        type="submit"
                        className="w-full h-14 bg-[#1A1F16] text-white rounded-[13px] font-cabin font-medium text-[20px] leading-6 hover:bg-[#2a3426] transition-colors mt-4"
                    >
                        Add Address
                    </button>
                </form>

                {addresses.length > 0 && (
                    <div className="mt-8 border-t pt-6">
                        <h3 className="text-[25px] leading-[30px] tracking-[0.2em] uppercase text-[#1A1F16] mb-4">
                            Saved Addresses
                        </h3>
                        <div className="flex flex-col gap-4">
                            {addresses.map((addr) => (
                                <div
                                    key={addr.id}
                                    className={`p-4 rounded-[13px] border-2 cursor-pointer transition-colors ${
                                        selectedAddressId === addr.id
                                            ? "border-[#12805D] bg-[#F0FDF4]"
                                            : "border-[#E5E7EB] hover:border-[#60695C]"
                                    }`}
                                    onClick={() => handleSelect(addr.id)}
                                >
                                    <div className="flex justify-between items-start">
                                        <div className="flex-1">
                                            <p className="font-cabin font-medium text-[20px] leading-6 text-[#1A1F16]">
                                                {addr.shippingName}
                                            </p>
                                            <p className="font-cabin text-[16px] leading-[19px] text-[#60695C] mt-1">
                                                {addr.streetName}
                                            </p>
                                            <p className="font-cabin text-[16px] leading-[19px] text-[#60695C]">
                                                {addr.city},{" "}
                                                {addr.stateProvince}
                                            </p>
                                            <p className="font-cabin text-[16px] leading-[19px] text-[#60695C]">
                                                {addr.country}
                                            </p>
                                            {addr.isDefault && (
                                                <span className="inline-block mt-2 px-3 py-1 bg-[#12805D] text-white text-[14px] rounded-lg">
                                                    Default
                                                </span>
                                            )}
                                        </div>
                                        {!addr.isDefault && (
                                            <button
                                                type="button"
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    handleSetDefault(addr.id);
                                                }}
                                                className="px-4 py-2 border border-[#1A1F16] rounded-[11px] text-[14px] text-[#1A1F16] hover:bg-[#1A1F16] hover:text-white transition-colors"
                                            >
                                                Set Default
                                            </button>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

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
            </div>
        </div>
    );
};

export default AddAddress;
