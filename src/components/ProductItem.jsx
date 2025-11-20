import React from "react";
import { useDispatch } from "react-redux";
import { Plus, Lock } from "lucide-react";
import { addToCart } from "../redux/cartSlice";

const ProductItem = ({ product }) => {
    const dispatch = useDispatch();
    const { id, name, description, price, image, bgRed } = product;

    const handleAddToCart = () => {
        dispatch(addToCart({ ...product, quantity: 1 }));
        alert(`Added ${name} to cart!`);
    };

    return (
        <div className="flex flex-col rounded-[22px] bg-gray-100/10 p-4 hover:shadow-md transition-shadow duration-300 w-full max-w-60 h-full max-h-[400px">
            <div className="bg-white h-[200px] flex items-center justify-center rounded-[22px] mb-2 overflow-hidden relative">
                <img
                    src={image}
                    alt={name}
                    className="object-contain h-full w-full mix-blend-multiply"
                />
            </div>

            <div className="flex flex-col gap-1 mb-4 px-2">
                <h3 className="font-medium text-xl text-[#1a1f16] leading-6">
                    {name}
                </h3>
                <p className="text-sm text-[#60695c] font-normal">
                    {description}
                </p>
            </div>

            <div className="flex justify-between items-center mt-auto px-2">
                <span className="font-medium text-xl text-[#1a1f16]">
                    $ {price}
                </span>

                <button
                    onClick={handleAddToCart}
                    className="bg-[#1a1f16] hover:bg-black text-white w-[34px] h-[34px] rounded-[9px] flex items-center justify-center transition-colors"
                >
                    <img
                        src="/src/assets/add-to-cart.png"
                        alt="Add to cart"
                        className="w-5 h-5"
                    />
                </button>
            </div>
        </div>
    );
};

export default ProductItem;
