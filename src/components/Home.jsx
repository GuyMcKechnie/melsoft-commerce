import ProductItem from "./ProductItem";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ShoppingBag } from "lucide-react";

const PRODUCTS = [
    {
        id: 1,
        name: "Apple Watch",
        description: "Series 5 SE",
        price: "529.99",
        image: "/src/assets/apple-watch.png",
    },
    {
        id: 2,
        name: "Sony ZX330BT",
        description: "Light Grey",
        price: "39.99",
        image: "/src/assets/sony-zx330bt.png",
    },
    {
        id: 3,
        name: "Iphone 11",
        description: "Serious Black",
        price: "619.99",
        image: "/src/assets/iphone-11-black.png",
    },
    {
        id: 4,
        name: "Iphone 11",
        description: "Subway Blue",
        price: "619.99",
        image: "/src/assets/iphone-11-blue.png",
    },
    {
        id: 5,
        name: "Iphone 11",
        description: "Product RED",
        price: "619.99",
        image: "/src/assets/iphone-11-red.png",
    },
    {
        id: 6,
        name: "Iphone 11",
        description: "Milky White",
        price: "619.99",
        image: "/src/assets/iphone-11-white.png",
    },
    {
        id: 7,
        name: "Iphone 13",
        description: "Product RED",
        price: "619.99",
        image: "/src/assets/iphone-13-red.png",
    },
    {
        id: 8,
        name: "Iphone 14",
        description: "Product RED",
        price: "619.99",
        image: "/src/assets/iphone-14-red.png",
    },
];
export default function Home() {
    const cartItems = useSelector((state) => state.cart.items);
    const navigate = useNavigate();

    return (
        <div className="flex-1 flex px-10 py-12 gap-8 h-full">
            <div className="flex-1 flex flex-col h-full overflow-hidden justify-between">
                <div className="mb-8 w-[507px]">
                    <label className="block text-[#60695c] text-sm mb-2 font-normal">
                        Search Item
                    </label>
                    <div className="bg-white rounded-[13px] shadow-sm px-6 py-4 w-full max-w-[507px]">
                        <input
                            type="text"
                            placeholder="Apple Watch, Samsung S21, Macbook Pro, ..."
                            className="w-full outline-none text-[#1a1f16] text-lg placeholder:text-gray-400 font-medium"
                        />
                    </div>
                </div>

                <div className="flex-1 overflow-y-auto pr-4 pb-4 scrollbar-hide">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center lg:justify-items-start">
                        {PRODUCTS.map((product) => (
                            <ProductItem key={product.id} product={product} />
                        ))}
                    </div>
                </div>
            </div>

            <div className="flex flex-col w-[300px] items-center justify-start text-center h-full border-gray-400 border-l-4 pl-6 pt-12 gap-4">
                <h2 className="text-4xl font-medium text-[#1a1f16] mb-8">
                    Bag
                </h2>

                <div className="flex flex-wrap gap-4  content-start">
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
                            <div className="w-20 h-20 bg-white rounded-xl shadow-sm"></div>
                            <div className="w-20 h-20 bg-white rounded-xl shadow-sm"></div>
                            <div className="w-20 h-20 bg-white rounded-xl shadow-sm"></div>
                            <div className="w-20 h-20 bg-white rounded-xl shadow-sm"></div>
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
