import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CheckoutForm from "./components/CheckoutForm";
import OrderSuccess from "./components/OrderSuccess";
import Dashboard from "./components/Dashboard";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/checkout" element={<CheckoutForm />} />
                <Route path="/order-success" element={<OrderSuccess />} />
                <Route path="/" element={<Dashboard />} />
            </Routes>
        </Router>
    );
}

export default App;
