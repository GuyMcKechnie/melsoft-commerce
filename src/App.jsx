import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";
import Layout from "./components/Layout";
import CheckoutForm from "./components/CheckoutForm";
import OrderSuccess from "./components/OrderSuccess";
import ViewCart from "./components/ViewCart";
import Home from "./components/Home";
import ProductView from "./components/ProductView";
import AddPayment from "./components/AddPayment";
import AddAddress from "./components/AddAddress";

function App() {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route
                        path="/"
                        element={<Navigate to="/products" replace />}
                    />
                    <Route path="/products" element={<Home />} />
                    <Route path="/product/:id" element={<ProductView />} />
                    <Route path="/checkout" element={<CheckoutForm />} />
                    <Route path="/order-success" element={<OrderSuccess />} />
                    <Route path="/cart" element={<ViewCart />} />
                    <Route path="/add-payment" element={<AddPayment />} />
                    <Route path="/add-address" element={<AddAddress />} />
                </Routes>
            </Layout>
        </Router>
    );
}

export default App;
