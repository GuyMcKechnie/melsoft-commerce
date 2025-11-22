import Sidebar from "./Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar } from "../redux/uiSlice";

export default function Layout({ children }) {
    const dispatch = useDispatch();
    const sidebarOpen = useSelector((s) => s.ui.sidebarOpen);
    return (
        <div className="min-h-screen flex bg-gray-200">
            {sidebarOpen && <Sidebar />}
            <main
                className={`flex-1 p-4 transition-all duration-300 ${
                    sidebarOpen ? "ml-20" : "ml-4"
                }`}
            >
                <button
                    type="button"
                    onClick={() => dispatch(toggleSidebar())}
                    className="mb-4 inline-flex items-center px-3 py-2 rounded-md bg-[#1a1f16] text-white text-sm hover:bg-black"
                    aria-label={
                        sidebarOpen ? "Hide navigation" : "Show navigation"
                    }
                >
                    {sidebarOpen ? "Hide Menu" : "Show Menu"}
                </button>
                {children}
            </main>
        </div>
    );
}
