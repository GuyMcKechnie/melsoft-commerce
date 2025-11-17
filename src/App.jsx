import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Layout from "./components/Layout";
import CheckoutForm from "./components/CheckoutForm";
import OrderSuccess from "./components/OrderSuccess";
import ViewCart from "./components/ViewCart";
import Home from "./components/Home";

function App() {
  return (
    <Router>
      <Sidebar />

      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/checkout" element={<CheckoutForm />} />
          <Route path="/order-success" element={<OrderSuccess />} />
          <Route path="/cart" element={<ViewCart />} />
          <Route path="/sidebar" element={<Sidebar />} /> //
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
