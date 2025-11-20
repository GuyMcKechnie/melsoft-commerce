import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Star, StarHalf, Minus, Plus, ShoppingBag, Trash2 } from "lucide-react";
import { removeFromCart, updateQuantity } from "../redux/cartSlice"; // Adjust path as needed
import { Link } from "react-router-dom";

const ViewCart = () => {
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart);
    const items = cart.items || [];

    const bagTotal = items.reduce(
        (total, item) =>
            total + (parseFloat(item.price) || 0) * (item.quantity || 0),
        0
    );

    // Helper to render stars
    const renderStars = (rating) => {
        const validRating = rating || 4.5;
        const stars = [];
        const fullStars = Math.floor(validRating);
        const hasHalfStar = validRating % 1 !== 0;

        for (let i = 0; i < fullStars; i++) {
            stars.push(
                <Star
                    key={`full-${i}`}
                    size={24}
                    className="fill-[#12805d] text-[#12805d]"
                />
            );
        }
        if (hasHalfStar) {
            stars.push(
                <StarHalf
                    key="half"
                    size={24}
                    className="fill-transparent text-[#12805d]"
                />
            );
        }
        return stars;
    };

    return (
        <div className="flex-1 p-6 lg:p-12 h-screen overflow-y-auto scrollbar-hide">
            <div className="flex flex-col lg:flex-row gap-8 h-full">
                <main className="flex-1 flex flex-col gap-6">
                    <header className="pb-2">
                        <h2 className="text-[48px] leading-[59px] font-normal text-[#1a1f16]">
                            Check your Bag Items
                        </h2>
                    </header>

                    {items.length === 0 ? (
                        <div className="mt-10 flex flex-col items-center justify-center rounded-[21px] bg-white py-20 shadow-sm">
                            <p className="text-[31px] text-[#1a1f16] font-normal">
                                Your bag is currently empty.
                            </p>
                            <Link
                                to="/"
                                className="mt-4 text-[#12805d] hover:underline text-xl"
                            >
                                Go Shopping
                            </Link>
                        </div>
                    ) : (
                        <div className="flex flex-col gap-6 pb-20">
                            {items.map((item, idx) => (
                                <section
                                    key={item.id || idx}
                                    className="flex flex-col md:flex-row items-start gap-6 rounded-[21px] bg-white px-6 py-6 shadow-sm min-h-72"
                                >
                                    <div className="flex items-center justify-center w-full md:w-[200px] h-[250px] shrink-0 bg-white rounded-xl">
                                        {item.image ? (
                                            <img
                                                src={item.image}
                                                alt={item.name}
                                                className="w-full h-full object-contain mix-blend-multiply"
                                            />
                                        ) : (
                                            <div className="flex h-full w-full items-center justify-center bg-gray-50 text-gray-300">
                                                No Image
                                            </div>
                                        )}
                                    </div>

                                    <div className="flex flex-1 flex-col h-full justify-between py-2 w-full">
                                        <div className="flex flex-col gap-1">
                                            <h3 className="text-[31px] leading-[38px] text-[#1a1f16] font-normal">
                                                {item.name}
                                            </h3>
                                            <p className="text-[20px] leading-6 text-[#60695c] font-normal">
                                                {item.subtitle || "Milky White"}{" "}
                                            </p>
                                        </div>

                                        <p className="text-[20px] leading-6 text-[#1a1f16] font-normal tracking-tight max-w-xl my-2">
                                            {item.description ||
                                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam"}
                                        </p>

                                        <div className="flex items-center gap-4 mt-1 mb-4">
                                            <div className="flex gap-2">
                                                {renderStars(item.rating)}
                                            </div>
                                            <span className="text-[20px] text-[#12805d] font-normal">
                                                {item.rating || 4.5} / 5
                                            </span>
                                        </div>

                                        <div className="flex flex-wrap items-center justify-between mt-auto pt-2 gap-4">
                                            <p className="text-[20px] text-[#1a1f16] font-normal">
                                                ${" "}
                                                {parseFloat(item.price).toFixed(
                                                    2
                                                )}
                                                <span className="mx-2">x</span>
                                                {item.quantity || 1}
                                            </p>

                                            <div className="flex items-center gap-6">
                                                <button
                                                    onClick={() =>
                                                        dispatch(
                                                            updateQuantity({
                                                                id: item.id,
                                                                quantity:
                                                                    Math.max(
                                                                        1,
                                                                        (item.quantity ||
                                                                            1) -
                                                                            1
                                                                    ),
                                                            })
                                                        )
                                                    }
                                                    className="flex w-[34px] h-[34px] items-center justify-center rounded-[9px] border-2 border-[#e5252c] text-[#e5252c] hover:bg-red-50 transition-colors"
                                                >
                                                    <Minus
                                                        size={18}
                                                        strokeWidth={3}
                                                    />
                                                </button>

                                                <span className="w-5 text-center text-[20px] text-[#1a1f16] font-normal">
                                                    {item.quantity || 1}
                                                </span>

                                                <button
                                                    onClick={() =>
                                                        dispatch(
                                                            updateQuantity({
                                                                id: item.id,
                                                                quantity:
                                                                    (item.quantity ||
                                                                        0) + 1,
                                                            })
                                                        )
                                                    }
                                                    className="flex w-[34px] h-[34px] items-center justify-center rounded-[9px] border-2 border-[#02d693] text-[#02d693] hover:bg-green-50 transition-colors"
                                                >
                                                    <Plus
                                                        size={18}
                                                        strokeWidth={3}
                                                    />
                                                </button>

                                                <button
                                                    onClick={() =>
                                                        dispatch(
                                                            removeFromCart(
                                                                item.id
                                                            )
                                                        )
                                                    }
                                                    className="ml-4 text-gray-400 hover:text-[#e5252c]"
                                                    title="Remove Item"
                                                >
                                                    <Trash2 size={20} />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            ))}
                        </div>
                    )}
                </main>

                <aside className="hidden xl:flex flex-col w-[320px] border-l border-black/5 pl-8 pt-4 pb-8 gap-6">
                    <h2 className="text-[39px] leading-[47px] font-medium text-[#1a1f16]">
                        Bag
                    </h2>

                    {/* Thumbnails Grid */}
                    <div className="flex flex-wrap gap-4 content-start">
                        {items.map((item, index) => (
                            <div
                                key={item.id || index}
                                className="flex h-20 w-20 items-center justify-center rounded-xl bg-white shadow-sm p-2"
                            >
                                <img
                                    src={item.image}
                                    alt="thumbnail"
                                    className="h-full w-full object-contain"
                                />
                            </div>
                        ))}
                        {items.length < 4 &&
                            Array(4 - items.length)
                                .fill(0)
                                .map((_, i) => (
                                    <div
                                        key={`empty-${i}`}
                                        className=" h-20 w-20  rounded-xl bg-white opacity-50"
                                    ></div>
                                ))}
                    </div>

                    <div className="mt-auto w-full flex flex-col gap-6">
                        <div className="flex justify-between items-center text-[#1a1f16] px-1">
                            <span className="text-xl font-medium">Total</span>
                            <span className="text-2xl font-bold">
                                ${" "}
                                {bagTotal.toLocaleString("en-US", {
                                    minimumFractionDigits: 2,
                                })}
                            </span>
                        </div>

                        <Link
                            to={"/checkout"}
                            className="flex items-center justify-center gap-2 rounded-[14px] bg-[#1a1f16] w-full h-[50px] text-white shadow-md hover:bg-black transition-colors"
                        >
                            <ShoppingBag size={20} />
                            <span className="text-[20px] font-medium">
                                Checkout
                            </span>
                        </Link>
                    </div>
                </aside>
            </div>
        </div>
    );
};

export default ViewCart;
