import { useSelector, useDispatch } from "react-redux";
import {
    Star,
    StarHalf,
    StarIcon,
    Trash2,
    Minus,
    Plus,
    ShoppingBag,
} from "lucide-react";
import Navbar from "./Navbar";
import { removeFromCart, updateQuantity } from "../redux/cartSlice";
import { Link } from "react-router-dom";

const ViewCart = () => {
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart);
    const items = cart.items || [];

    const bagTotal = items.reduce(
        (total, item) => total + (item.price || 0) * (item.quantity || 0),
        0
    );

    const renderStars = (rating) => {
        if (!rating) return null;
        const stars = [];
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 !== 0;

        for (let i = 0; i < fullStars; i++) {
            stars.push(<Star key={`full-${i}`} className="w-4 h-4" />);
        }
        if (hasHalfStar) {
            stars.push(<StarHalf key="half" className="w-4 h-4" />);
        }
        const emptyStars = 5 - Math.ceil(rating);
        for (let i = 0; i < emptyStars; i++) {
            stars.push(<StarIcon key={`empty-${i}`} className="w-4 h-4" />);
        }
        return stars;
    };

    return (
        <div className="min-h-screen w-full flex justify-center items-start bg-[#e3e5ea] py-6 px-4">
            <div className="relative w-full max-w-6xl bg-[#ededed] rounded-[24px] overflow-hidden font-sans shadow-sm">
                <Navbar />

                <div className="flex flex-col lg:flex-row">
                    <main className="flex-1 px-8 lg:px-12 pt-12 pb-20">
                        <header className="pb-6">
                            <h2 className="text-[2.8rem] leading-tight font-normal text-[#1a1f16]">
                                Check your Bag Items
                            </h2>
                        </header>

                        {items.length === 0 ? (
                            <div className="mt-10 flex flex-col items-center justify-center rounded-2xl bg-white/70 border border-dashed border-gray-300 py-16">
                                <p className="text-lg text-gray-600">
                                    Your bag is currently empty.
                                </p>
                                <p className="text-sm text-gray-400 mt-2">
                                    Add some products to see them here.
                                </p>
                            </div>
                        ) : (
                            <div className="flex flex-col gap-6">
                                {items.map((item, idx) => (
                                    <section
                                        key={item.id || idx}
                                        className="flex items-stretch gap-6 rounded-[21px] bg-white px-6 py-5 shadow-[0_18px_40px_rgba(0,0,0,0.03)]"
                                    >
                                        <div className="flex items-center justify-center w-32">
                                            {item.image ? (
                                                <img
                                                    src={item.image}
                                                    alt={item.name || "Product"}
                                                    className={`max-h-28 object-contain ${
                                                        idx === 0
                                                            ? "scale-110 -translate-y-2"
                                                            : ""
                                                    }`}
                                                />
                                            ) : (
                                                <div className="flex h-24 w-24 items-center justify-center rounded-2xl bg-gray-100 text-xs text-gray-400">
                                                    No Image
                                                </div>
                                            )}
                                        </div>

                                        <div className="flex flex-1 flex-col gap-3">
                                            <div>
                                                <p className="text-[1.1rem] leading-6 text-[#60695c]">
                                                    Demo Product
                                                </p>
                                                <h3 className="text-[1.9rem] leading-8 text-[#1a1f16]">
                                                    {item.name ||
                                                        "Product Name"}
                                                </h3>
                                            </div>

                                            {item.description && (
                                                <p className="text-[1rem] leading-6 text-[#1a1f16]/80 max-w-xl">
                                                    {item.description}
                                                </p>
                                            )}

                                            <div className="flex items-center gap-3 text-[#12805d] mt-1">
                                                <span className="flex items-center gap-1">
                                                    {renderStars(
                                                        item.rating || 4.0
                                                    )}
                                                </span>
                                                <span className="text-[1rem] tracking-tight">
                                                    {(
                                                        item.rating || 4.0
                                                    ).toFixed(1)}{" "}
                                                    / 5
                                                </span>
                                            </div>

                                            <div className="mt-auto flex items-center justify-between pt-4">
                                                <p className="text-[1.05rem] text-[#1a1f16]">
                                                    ${" "}
                                                    {(item.price || 0).toFixed(
                                                        2
                                                    )}{" "}
                                                    x {item.quantity || 0}
                                                </p>

                                                <div className="flex items-center gap-4">
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
                                                        disabled={
                                                            (item.quantity ||
                                                                1) <= 1
                                                        }
                                                        className="flex h-7 w-7 items-center justify-center rounded-full border border-[#e5252c]/40 text-[#e5252c] disabled:opacity-40"
                                                    >
                                                        <Minus size={16} />
                                                    </button>

                                                    <span className="min-w-[1.5rem] text-center text-[1.05rem] text-[#1a1f16]">
                                                        {item.quantity || 1}
                                                    </span>

                                                    <button
                                                        onClick={() =>
                                                            dispatch(
                                                                updateQuantity({
                                                                    id: item.id,
                                                                    quantity:
                                                                        (item.quantity ||
                                                                            0) +
                                                                        1,
                                                                })
                                                            )
                                                        }
                                                        className="flex h-7 w-7 items-center justify-center rounded-full border border-[#02d693]/40 text-[#02d693]"
                                                    >
                                                        <Plus size={16} />
                                                    </button>

                                                    <button
                                                        onClick={() =>
                                                            dispatch(
                                                                removeFromCart(
                                                                    item.id
                                                                )
                                                            )
                                                        }
                                                        className="ml-2 text-gray-500 hover:text-red-500"
                                                    >
                                                        <Trash2 size={18} />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                ))}
                            </div>
                        )}
                    </main>

                    <aside className="w-full lg:w-[320px] border-t lg:border-t-0 lg:border-l border-black/5 bg-transparent px-6 pt-10 pb-8 flex flex-col items-center gap-6">
                        <h2 className="text-[2.1rem] leading-tight font-medium text-[#1a1f16]">
                            Bag
                        </h2>

                        <div className="flex w-full flex-wrap justify-start gap-3 px-2 min-h-[5rem]">
                            {items.map((item, index) => (
                                <div
                                    key={item.id || index}
                                    className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-sm"
                                >
                                    {item.image ? (
                                        <img
                                            src={item.image}
                                            alt={item.name || "product"}
                                            className="max-h-12 max-w-12 object-contain"
                                        />
                                    ) : (
                                        <span className="text-[0.6rem] text-gray-400">
                                            product
                                        </span>
                                    )}
                                </div>
                            ))}
                        </div>

                        <div className="mt-auto flex w-full flex-col items-center gap-6">
                            <div className="flex items-center gap-3 text-[#1a1f16]">
                                <span className="text-lg font-medium">
                                    Bag Total:
                                </span>
                                <span className="text-lg font-medium">
                                    ${" "}
                                    {bagTotal.toLocaleString("en-US", {
                                        minimumFractionDigits: 2,
                                        maximumFractionDigits: 2,
                                    })}
                                </span>
                            </div>

                            <Link
                                to={"/checkout"}
                                className="flex items-center justify-center gap-2 rounded-[14px] bg-[#1a1f16] px-6 py-2 text-white shadow-md hover:bg-black"
                            >
                                <ShoppingBag size={20} />
                                <span className="text-base font-medium">
                                    Checkout
                                </span>
                            </Link>
                        </div>
                    </aside>
                </div>
            </div>
        </div>
    );
};

export default ViewCart;
