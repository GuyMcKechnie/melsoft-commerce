import { Link } from "react-router-dom";
import { Home, Info, Mail, ShoppingCart, LogOut } from "lucide-react";
import Sidebar from "./component/Sidebar";

export default function Sidebar() {
    return (
        <aside className="fixed top-0 left-0 h-screen w-20 bg-white flex flex-col justify-between items-center py-2 px-4 gap-2 shadow-lg z-20 rounded-lg">
         
            <div className="flex flex-col items-center gap-4 mt-2">
                <div className="bg-white rounded-md p-2 flex items-center justify-center w-10 h-10 shadow">
                    <span className="text-green-700 font-bold text-xl">G5</span>
                </div>
            </div>
          
            <nav className="flex flex-col items-center gap-8 mt-8 flex-1">
                <Link
                    to="/"
                    className="bg-gray-900 rounded-lg w-10 h-10 flex items-center justify-center group"
                >
                    <Home
                        className="text-white group-hover:text-green-700 transition"
                        size={24}
                    />
                </Link>
                <Link
                    to="/about"
                    className="bg-gray-900 rounded-lg w-10 h-10 flex items-center justify-center group"
                >
                    <Info
                        className="text-white group-hover:text-green-700 transition"
                        size={24}
                    />
                </Link>
                <Link
                    to="/contact"
                    className="bg-gray-900 rounded-lg w-10 h-10 flex items-center justify-center group"
                >
                    <Mail
                        className="text-white group-hover:text-green-700 transition"
                        size={24}
                    />
                </Link>
                <Link
                    to="/cart"
                    className="bg-green-600 rounded-lg w-10 h-10 flex items-center justify-center group"
                >
                    <ShoppingCart
                        className="text-white group-hover:text-white transition"
                        size={24}
                    />
                </Link>
            </nav>
          
            <div className="mb-4">
                <button className="bg-red-600 rounded-lg w-10 h-10 flex items-center justify-center group">
                    <LogOut
                        className="text-white group-hover:text-gray-900 transition"
                        size={24}
                    />
                </button>
            </div>
        </aside>
    );
}
