import { render, screen } from "@testing-library/react";
import OrderSuccess from "./OrderSuccess";

describe("OrderSuccess", () => {
    test("renders success message and link", () => {
        render(<OrderSuccess />);
        expect(screen.getByText(/Order Successful!/i)).toBeInTheDocument();
        expect(
            screen.getByText(/Thank you for your purchase/i)
        ).toBeInTheDocument();
        expect(screen.getByText(/Return to Home/i)).toBeInTheDocument();
    });
});
