import { Link } from "react-router-dom";

// Fixed: Changed from 'const Navbar = () => { ... }; export default Navbar;'
// to 'export default function Navbar() { ... }'
export default function Navbar() {
    return (
        <header className="bg-white shadow-md sticky top-0 z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex-shrink-0">
                        <Link
                            to="/"
                            className="text-2xl font-bold text-indigo-600"
                        >
                            MyApp Logo
                        </Link>
                    </div>
                    <nav className="flex space-x-4">
                        <Link
                            to="/"
                            className="text-gray-600 hover:text-indigo-600 transition duration-150"
                        >
                            Home
                        </Link>
                        <Link
                            to="/about"
                            className="text-gray-600 hover:text-indigo-600 transition duration-150"
                        >
                            About
                        </Link>
                        <Link
                            to="/contact"
                            className="px-3 py-1 rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition duration-150"
                        >
                            Contact
                        </Link>
                        <Link
                            to="/cart"
                            className="px-3 py-1 rounded-md text-white bg-green-600 hover:bg-green-700 transition duration-150"
                        >
                            Cart
                        </Link>
                    </nav>
                </div>
            </div>
        </header>
    );
}
