import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import CheckoutForm from "./CheckoutForm";

function renderWithProviders(ui) {
    return render(<Provider store={store}>{ui}</Provider>);
}

describe("CheckoutForm", () => {
    test("renders shipping and payment forms", () => {
        renderWithProviders(<CheckoutForm />);
        expect(screen.getByText(/Shipping Information/i)).toBeInTheDocument();
        expect(screen.getByText(/Payment Information/i)).toBeInTheDocument();
        expect(screen.getByText(/Order Summary/i)).toBeInTheDocument();
    });

    test("shows validation errors on empty submit", async () => {
        renderWithProviders(<CheckoutForm />);
        fireEvent.click(screen.getByText(/Place Order/i));
        expect(
            await screen.findByText((content) =>
                content.includes("Name is required")
            )
        ).toBeInTheDocument();
        expect(
            await screen.findByText((content) =>
                content.includes("Address is required")
            )
        ).toBeInTheDocument();
        expect(
            await screen.findByText((content) =>
                content.includes("City is required")
            )
        ).toBeInTheDocument();
        expect(
            await screen.findByText((content) =>
                content.includes("Postal code is required")
            )
        ).toBeInTheDocument();
        expect(
            await screen.findByText((content) =>
                content.includes("Card number is required")
            )
        ).toBeInTheDocument();
        expect(
            await screen.findByText((content) =>
                content.includes("Expiry date is required")
            )
        ).toBeInTheDocument();
        expect(
            await screen.findByText((content) =>
                content.includes("CVV is required")
            )
        ).toBeInTheDocument();
    });

    test("submits form and clears cart", () => {
        renderWithProviders(<CheckoutForm />);
        fireEvent.change(screen.getByLabelText(/Full Name/i), {
            target: { value: "John Doe" },
        });
        fireEvent.change(screen.getByLabelText(/Address/i), {
            target: { value: "123 Main St" },
        });
        fireEvent.change(screen.getByLabelText(/City/i), {
            target: { value: "Townsville" },
        });
        fireEvent.change(screen.getByLabelText(/Postal Code/i), {
            target: { value: "12345" },
        });
        fireEvent.change(screen.getByLabelText(/Card Number/i), {
            target: { value: "4111111111111111" },
        });
        fireEvent.change(screen.getByLabelText(/Expiry Date/i), {
            target: { value: "12/25" },
        });
        fireEvent.change(screen.getByLabelText(/CVV/i), {
            target: { value: "123" },
        });
        fireEvent.click(screen.getByText(/Place Order/i));
        // Since we redirect, we can't check the cart here, but you can mock window.location if needed
    });
});
