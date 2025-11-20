import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import { ChevronLeft, Star } from "lucide-react";
import { getProductById, products } from "../data/products";

const ProductView = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [product, setProduct] = useState(null);

    useEffect(() => {
        const found = getProductById(id) || products[0];
        if (found) {
            setProduct(found);
        }
    }, [id]);

    if (!product) return <div>Loading...</div>;

    const handleAddToCart = () => {
        dispatch(
            addToCart({
                id: product.id,
                name: product.name,
                price: product.price,
                image: product.images[0],
            })
        );
        alert(`Added ${product.name} to cart!`);
    };

    // Helper to render stars based on rating
    const renderStars = (rating) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            stars.push(
                <Star
                    key={i}
                    size={24}
                    className={
                        i <= rating
                            ? "fill-[#12805d] text-[#12805d]"
                            : "fill-transparent text-[#12805d]"
                    }
                />
            );
        }
        return stars;
    };

    return (
        <div className="flex flex-col w-full h-full overflow-y-auto pr-4 pb-8 scrollbar-hide">
            <button
                onClick={() => navigate(-1)}
                className="flex items-center gap-2 text-[#1a1f16] text-xl mb-8 hover:underline w-fit"
            >
                <div className="rounded-lg p-1">
                    <ChevronLeft size={20} />
                </div>
                <span>Back</span>
            </button>

            <div className="flex flex-col lg:flex-row gap-12 mb-12">
                <div className="flex flex-row gap-4">
                    <div className="flex flex-col gap-4">
                        {product.images.slice(1, 4).map((img, idx) => (
                            <div
                                key={idx}
                                className="w-[50px] h-[58px] bg-white rounded-[13px] flex items-center justify-center cursor-pointer border-2 transition-all border-transparent hover:border-gray-200"
                            >
                                <img
                                    src={img}
                                    alt="thumb"
                                    className="w-[34px] object-contain mix-blend-multiply"
                                />
                            </div>
                        ))}
                    </div>

                    <div className="w-[258px] h-[318px] bg-white rounded-[13px] flex items-center justify-center p-4">
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-contain mix-blend-multiply"
                        />
                    </div>
                </div>

                <div className="flex-1 flex flex-col">
                    <div className="mb-2">
                        <h1 className="text-[#1a1f16] font-bold text-[61px] leading-tight">
                            {product.name}
                        </h1>
                        <h2 className="text-[#1a1f16]/50 font-medium text-[31px]">
                            {product.subtitle}
                        </h2>
                    </div>
                    <div className="flex flex-wrap items-center gap-4 mb-4">
                        <div className="flex gap-2 items-center">
                            {renderStars(Math.floor(product.rating))}
                            <span className="text-[#12805d] text-xl font-normal ml-2">
                                {product.rating}/5
                            </span>
                        </div>
                    </div>

                    <div className="mb-6">
                        <span className="text-[#1a1f16] font-medium text-[31px]">
                            $ {product.price}
                        </span>
                    </div>

                    <div className="text-[#1a1f16] text-xl leading-6 font-normal mb-8 max-w-[525px]">
                        {product.description}
                    </div>

                    <div className="flex max-w-[525px] justify-end">
                        <button
                            onClick={handleAddToCart}
                            className="bg-[#1a1f16] text-white rounded-[14px] px-6 py-2 h-10 flex items-center justify-center gap-2 hover:bg-black transition-colors shadow-lg"
                            aria-label={`Add ${product.name} to bag`}
                        >
                            <img
                                src="/src/assets/add-to-cart.png"
                                alt="Add to cart"
                                className="w-5 h-5"
                            />
                            <span className="text-lg font-medium">
                                Add to Bag
                            </span>
                        </button>
                    </div>
                </div>
            </div>

            <div className="w-full max-w-[905px]">
                <div className="w-full border-t-[3px] border-[#1a1f16]/50 mb-8"></div>

                <div className="px-2">
                    <h3 className="text-[#1a1f16] font-medium text-[31px] mb-4">
                        Description
                    </h3>
                    <p className="text-[#60695c] text-xl leading-6 font-normal tracking-tight">
                        {product.longDescription}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ProductView;
