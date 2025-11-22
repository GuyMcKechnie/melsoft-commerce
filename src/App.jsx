import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Layout from "./components/Layout";
import CheckoutForm from "./components/CheckoutForm";
import OrderSuccess from "./components/OrderSuccess";
import ViewCart from "./components/ViewCart";
import Home from "./components/Home";
import ProductView from "./components/ProductView";
import AddPayment from "./components/AddPayment";

function App() {
    return (
        <Router>
            <Sidebar />
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/product/:id" element={<ProductView />} />
                    <Route path="/checkout" element={<CheckoutForm />} />
                    <Route path="/order-success" element={<OrderSuccess />} />
                    <Route path="/cart" element={<ViewCart />} />
                    <Route path="/add-payment" element={<AddPayment />} />
                </Routes>
            </Layout>
        </Router>
    );
}

export default App;
