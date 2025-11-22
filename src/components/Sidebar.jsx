import { LogOut, Menu, ShoppingBag, Store } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Sidebar() {
    const location = useLocation();

    const isHome = location.pathname === "/";
    const isProducts = location.pathname === "/products";
    const isCart = location.pathname.startsWith("/cart");

    const iconClass = (active) =>
        `w-10 h-10 p-2 rounded-lg transition ${
            active
                ? "text-white bg-gray-700 "
                : "text-gray-600 group-hover:text-gray-900"
        }`;

    const linkClass = (active) =>
        `rounded-lg flex items-center justify-center group ${
            active ? "bg-gray-100" : ""
        }`;

    return (
        <aside className="fixed top-0 left-0 h-screen w-20 bg-white flex flex-col justify-between items-center py-2 px-4 gap-2 shadow-lg z-20 rounded-lg">
            <div className="flex flex-col items-center gap-4 mt-2">
                <img
                    src={logo}
                    alt="Logo"
                    className="w-full h-full object-contain"
                    loading="lazy"
                />
            </div>
            <nav className="flex flex-col items-center gap-8 mt-8 flex-1">
                <Menu className={iconClass(isHome)} />
                <Link to="/products" className={linkClass(isProducts)}>
                    <Store className={iconClass(isProducts)} />
                </Link>
                <Link to="/cart" className={linkClass(isCart)}>
                    <ShoppingBag className={iconClass(isCart)} />
                </Link>
            </nav>
            <div className="mb-4">
                <button className="bg-red-600 rounded-lg w-10 h-10 flex items-center justify-center group">
                    <LogOut className="w-6 h-6 text-white group-hover:text-gray-200 transition" />
                </button>
            </div>
        </aside>
    );
}
