import { Link } from "react-router-dom";
import {
    Home,
    Info,
    Mail,
    ShoppingCart,
    LogOut,
    ShoppingBag,
} from "lucide-react";

export default function Sidebar() {
    return (
        <aside className="fixed top-0 left-0 h-screen w-20 bg-white flex flex-col justify-between items-center py-2 px-4 gap-2 shadow-lg z-20 rounded-lg">
            <div className="flex flex-col items-center gap-4 mt-2">
                <img
                    src="/src/assets/logo.png"
                    alt="Logo"
                    className="w-full h-full object-contain"
                />
            </div>
            <nav className="flex flex-col items-center gap-8 mt-8 flex-1">
                <Link
                    to="/"
                    className="rounded-lg flex items-center justify-center group"
                >
                    <img
                        src="/src/assets/menu-icon.png"
                        alt="Home"
                        className="w-10 h-10"
                    />
                </Link>
                <Link
                    to="/"
                    className="rounded-lg flex items-center justify-center group"
                >
                    <img
                        src="/src/assets/market-icon.png"
                        alt="Market"
                        className="w-10 h-10"
                    />
                </Link>
                <Link
                    to="/cart"
                    className=" rounded-lg flex items-center justify-center group"
                >
                    <img
                        src="/src/assets/shopping-bag-icon.png"
                        alt="Cart"
                        className="w-10 h-10 text-white group-hover:text-gray-900 transition"
                    />
                </Link>
            </nav>
            <div className="mb-4">
                <button className="bg-red-600 rounded-lg w-10 h-10 flex items-center justify-center group">
                    <img src="/src/assets/sign-out-icon.png" alt="Sign Out" />
                </button>
            </div>
        </aside>
    );
}
