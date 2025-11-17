import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import OrderSummary from "./OrderSummary";

function renderWithProviders(ui) {
    return render(<Provider store={store}>{ui}</Provider>);
}

describe("OrderSummary", () => {
    test("shows empty cart message", () => {
        renderWithProviders(<OrderSummary />);
        expect(screen.getByText(/Your cart is empty/i)).toBeInTheDocument();
    });

    test("shows cart items and total", () => {
        // Add items to cart
        store.dispatch({
            type: "cart/addToCart",
            payload: { id: 1, name: "Product A", price: 10, quantity: 2 },
        });
        store.dispatch({
            type: "cart/addToCart",
            payload: { id: 2, name: "Product B", price: 5, quantity: 1 },
        });
        renderWithProviders(<OrderSummary />);
        expect(screen.getByText(/Product A x 2/i)).toBeInTheDocument();
        expect(screen.getByText(/Product B x 1/i)).toBeInTheDocument();
        expect(screen.getByText(/Total:/i)).toBeInTheDocument();
        expect(screen.getByText("$25.00")).toBeInTheDocument();
    });
});
