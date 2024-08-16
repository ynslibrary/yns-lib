import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Input from "./Input";

describe("Input", () => {
    // Test rendering the Input component with default props
    test("renders the Input component with default props", () => {
        render(<Input value="Default Value" onChange={() => { }} />);
        const inputElement = screen.getByDisplayValue("Default Value") as HTMLInputElement;
        expect(inputElement).toBeInTheDocument(); 
        expect(inputElement.type).toBe("text"); 
        expect(inputElement.style.borderColor).toBe("rgb(0, 75, 147)"); 
        expect(inputElement.style.borderRadius).toBe("4px"); 
        expect(inputElement.style.fontSize).toBe("14px"); 
    });

    // Test applying custom className
    test("applies custom className", () => {
        render(<Input value="Value" onChange={() => { }} className="custom-class" />);
        const inputElement = screen.getByDisplayValue("Value") as HTMLInputElement;
        expect(inputElement.className).toContain("custom-class"); 
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
        expect(inputElement.style.borderColor).toBe("red"); 
        expect(inputElement.style.borderRadius).toBe("8px");
        expect(inputElement.style.fontSize).toBe("18px"); 
        expect(inputElement.style.paddingTop).toBe("12px"); 
        expect(inputElement.style.paddingBottom).toBe("12px"); 
        expect(inputElement.style.paddingLeft).toBe("10px"); 
        expect(inputElement.style.paddingRight).toBe("10px"); 
    });

    // Test handling the onChange event
    test("handles onChange event", () => {
        const handleChange = jest.fn(); 
        render(<Input value="Change me" onChange={handleChange} />);
        const inputElement = screen.getByDisplayValue("Change me") as HTMLInputElement;
        fireEvent.change(inputElement, { target: { value: "New Value" } }); 
        expect(handleChange).toHaveBeenCalledTimes(1); 
        expect(handleChange).toHaveBeenCalledWith("New Value"); 
    });

    // Test applying the disabled state
    test("applies disabled state", () => {
        render(<Input value="Disabled" onChange={() => { }} disabled />);
        const inputElement = screen.getByDisplayValue("Disabled") as HTMLInputElement;
        expect(inputElement).toBeDisabled(); 
    });
});
