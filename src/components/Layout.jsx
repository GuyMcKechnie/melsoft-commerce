import Sidebar from "./Sidebar";

export default function Layout({ children }) {
    return (
        <div className="min-h-screen flex">
            <Sidebar />
            <main className="flex-1 ml-20">{children}</main>
        </div>
    );
}
