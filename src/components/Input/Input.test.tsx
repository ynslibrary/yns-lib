import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Input from "./Input";

describe("Input", () => {
    // Test rendering the Input component with default props
    test("renders the Input component with default props", () => {
        render(<Input value="Default Value" onChange={() => { }} />);
        const inputElement = screen.getByDisplayValue("Default Value") as HTMLInputElement;
        expect(inputElement).toBeInTheDocument(); // Ensure the input is rendered
        expect(inputElement.type).toBe("text"); // Verify default input type
        expect(inputElement.style.borderColor).toBe("#004b93"); // Verify default border color
        expect(inputElement.style.borderRadius).toBe("4px"); // Verify default border radius
        expect(inputElement.style.fontSize).toBe("14px"); // Verify default font size
    });

    // Test applying custom className
    test("applies custom className", () => {
        render(<Input value="Value" onChange={() => { }} className="custom-class" />);
        const inputElement = screen.getByDisplayValue("Value") as HTMLInputElement;
        expect(inputElement.className).toContain("custom-class"); // Verify custom class is applied
    });

    // Test applying custom styles
    test("applies custom styles", () => {
        render(
            <Input
                value="Styled Value"
                onChange={() => { }}
                borderColor="red"
                borderRadius={8}
                fontSize={18}
                paddingY={12}
                paddingX={10}
            />
        );
        const inputElement = screen.getByDisplayValue("Styled Value") as HTMLInputElement;
        expect(inputElement.style.borderColor).toBe("red"); // Verify custom border color
        expect(inputElement.style.borderRadius).toBe("8px"); // Verify custom border radius
        expect(inputElement.style.fontSize).toBe("18px"); // Verify custom font size
        expect(inputElement.style.paddingTop).toBe("12px"); // Verify custom top padding
        expect(inputElement.style.paddingBottom).toBe("12px"); // Verify custom bottom padding
        expect(inputElement.style.paddingLeft).toBe("10px"); // Verify custom left padding
        expect(inputElement.style.paddingRight).toBe("10px"); // Verify custom right padding
    });

    // Test handling the onChange event
    test("handles onChange event", () => {
        const handleChange = jest.fn(); // Mock function for change event
        render(<Input value="Change me" onChange={handleChange} />);
        const inputElement = screen.getByDisplayValue("Change me") as HTMLInputElement;
        fireEvent.change(inputElement, { target: { value: "New Value" } }); // Simulate change event
        expect(handleChange).toHaveBeenCalledTimes(1); // Verify onChange handler was called
        expect(handleChange).toHaveBeenCalledWith("New Value"); // Verify onChange handler was called with correct value
    });

    // Test applying the disabled state
    test("applies disabled state", () => {
        render(<Input value="Disabled" onChange={() => { }} disabled />);
        const inputElement = screen.getByDisplayValue("Disabled") as HTMLInputElement;
        expect(inputElement).toBeDisabled(); // Verify input is disabled
    });
});
