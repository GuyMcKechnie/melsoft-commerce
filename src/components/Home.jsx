import ProductItem from "./ProductItem";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ShoppingBag, Search } from "lucide-react";
import { products } from "../data/products";
import React, { useState, useMemo } from "react";

export default function Home() {
    const cartItems = useSelector((state) => state.cart.items);
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState("");

    const filteredProducts = useMemo(() => {
        const term = searchTerm.trim().toLowerCase();
        if (!term) return products;
        return products.filter((p) => {
            return [p.name, p.subtitle, p.description, p.longDescription]
                .filter(Boolean)
                .some((field) => field.toLowerCase().includes(term));
        });
    }, [searchTerm]);

    return (
        <div className="flex-1 flex px-10 py-12 gap-8 h-full">
            <div className="flex-1 flex flex-col h-full overflow-hidden justify-between">
                <div className="mb-8 w-full max-w-[507px]">
                    <label className="block text-[#60695c] text-sm mb-2 font-normal">
                        Search Items
                    </label>
                    <div className="bg-white rounded-[13px] shadow-sm px-4 py-3 w-full flex items-center gap-3">
                        <Search className="text-gray-400 w-5 h-5" />
                        <input
                            type="text"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            placeholder="Search products..."
                            className="flex-1 outline-none text-[#1a1f16] text-lg placeholder:text-gray-400 font-medium"
                            aria-label="Search products"
                        />
                        {searchTerm && (
                            <button
                                type="button"
                                onClick={() => setSearchTerm("")}
                                className="text-sm text-[#60695c] hover:text-[#1a1f16]"
                                aria-label="Clear search"
                            >
                                Clear
                            </button>
                        )}
                    </div>
                    {searchTerm && filteredProducts.length === 0 && (
                        <div className="mt-2 text-sm text-[#60695c]">
                            No products match "{searchTerm}".
                        </div>
                    )}
                </div>

                <div className="flex-1 overflow-y-auto pr-4 pb-4 scrollbar-hide">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center lg:justify-items-start">
                        {filteredProducts.map((product) => (
                            <ProductItem key={product.id} product={product} />
                        ))}
                    </div>
                </div>
            </div>

            <div className="flex flex-col w-[300px] items-center justify-start text-center h-full border-gray-400 border-l-4 pl-6 pt-12 gap-4">
                <h2 className="text-4xl font-medium text-[#1a1f16] mb-8">
                    Bag
                </h2>

                <div
                    className="flex flex-wrap gap-4  content-start"
                    aria-label="Cart item thumbnails"
                >
                    {cartItems.length > 0 ? (
                        cartItems.map((item, idx) => (
                            <div
                                key={`${item.id}-${idx}`}
                                className="w-20 h-20 bg-white rounded-xl p-2 flex items-center justify-center shadow-sm"
                            >
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="object-contain h-full w-full"
                                />
                            </div>
                        ))
                    ) : (
                        <>
                            <div className="w-20 h-20 bg-white rounded-xl shadow-sm" />
                            <div className="w-20 h-20 bg-white rounded-xl shadow-sm" />
                            <div className="w-20 h-20 bg-white rounded-xl shadow-sm" />
                            <div className="w-20 h-20 bg-white rounded-xl shadow-sm" />
                        </>
                    )}
                </div>

                <button
                    onClick={() => navigate("/cart")}
                    className="bg-[#1a1f16] text-white rounded-2xl mt-8 py-6 px-6 flex items-center justify-center gap-3 w-40 h-10 hover:bg-black transition-colors mb-8 shadow-lg"
                >
                    <ShoppingBag size={20} />
                    <span className="text-lg font-medium">View Bag</span>
                </button>
            </div>
        </div>
    );
}
