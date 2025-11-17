import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import Sidebar from "./Navbar";
import Footer from "./Footer";
import Main from "./Main";

const Dashboard = () => {
    const dispatch = useDispatch();

    const demoProduct = {
        id: "demo-1",
        name: "Demo Product",
        price: 49.99,
        quantity: 1,
    };

    const handleAddDemoToCart = () => {
        dispatch(addToCart(demoProduct));
    };

    return (
        <div className="min-h-screen flex">
            <Sidebar />
            <main className="flex-1 ml-20">
                <section className="mx-auto w-full max-w-5xl px-4 py-6">
                    <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800">
                        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
                            <div>
                                <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                                    {demoProduct.name}
                                </h2>
                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                    A simple demo item to test checkout.
                                </p>
                            </div>
                            <div className="flex items-center gap-4">
                                <span className="text-base font-medium text-gray-900 dark:text-gray-100">
                                    ${demoProduct.price.toFixed(2)}
                                </span>
                                <button
                                    type="button"
                                    onClick={handleAddDemoToCart}
                                    className="inline-flex items-center rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                >
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
                <Main />
            </main>
            <Footer />
        </div>
    );
};

export default Dashboard;
