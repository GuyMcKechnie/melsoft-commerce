import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Main from "./Main";

const Dashboard = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1">
                <Main />
            </main>
            <Footer />
        </div>
    );
};

export default Dashboard;
