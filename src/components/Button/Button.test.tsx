import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Button from "./Button";

// Test suite for the Button component
describe("Button", () => {
    // Test case for rendering the Button component with default props
    test("renders the Button component with default props", () => {
        // Render the Button component with default props
        render(<Button>Hello</Button>);
        // Select the button element by its text
        const buttonElement = screen.getByText(/Hello/i);

        // Assert that the button is present in the document
        expect(buttonElement).not.toBeNull();
        // Assert that the button has the default "button" class applied
        expect(buttonElement.className.includes("button")).toBe(true);
        // Assert that the button has the default "button-primary" class applied
        expect(buttonElement.className.includes("button-primary")).toBe(true);
        // Assert that the button has the default border radius
        expect(buttonElement.style.borderRadius).toBe("10px");
        // Assert that the button has the default font family
        expect(buttonElement.style.fontFamily).toBe("sans-serif");
        // Assert that the button has the default text color
        expect(buttonElement.style.color).toBe("rgb(255, 255, 255)");
        // Assert that the button has the default top padding
        expect(buttonElement.style.paddingTop).toBe("12px");
        // Assert that the button has the default bottom padding
        expect(buttonElement.style.paddingBottom).toBe("12px");
        // Assert that the button has the default left padding
        expect(buttonElement.style.paddingLeft).toBe("30px");
        // Assert that the button has the default right padding
        expect(buttonElement.style.paddingRight).toBe("30px");
        // Assert that the button has the default font size
        expect(buttonElement.style.fontSize).toBe("16px");
        // Assert that the button has the default height
        expect(buttonElement.style.height).toBe("40px");
    });

    // Test case for applying a custom className to the Button
    test("applies custom className", () => {
        // Render the Button component with a custom className
        render(<Button className="custom-class">Hello</Button>);
        // Select the button element by its text
        const buttonElement = screen.getByText(/Hello/i);
        // Assert that the custom class name is applied to the button
        expect(buttonElement.className.includes("custom-class")).toBe(true);
    });

    // Test case for applying custom styles to the Button component
    test("applies custom styles", () => {
        // Render the Button component with custom styles
        render(
            <Button
                borderRadius={20} // Custom border radius
                fontFamily="Arial" // Custom font family
                backgroundColor="blue" // Custom background color
                color="white" // Custom text color
                paddingY={15} // Custom vertical padding
                paddingX={35} // Custom horizontal padding
                fontSize={18} // Custom font size
                height={50} // Custom height
            >
                Hello
            </Button>
        );
        // Select the button element by its text
        const buttonElement = screen.getByText(/Hello/i);
        // Assert that the custom border radius is applied
        expect(buttonElement.style.borderRadius).toBe("20px");
        // Assert that the custom font family is applied
        expect(buttonElement.style.fontFamily).toBe("Arial");
        // Assert that the custom background color is applied
        expect(buttonElement.style.backgroundColor).toBe("blue");
        // Assert that the custom text color is applied
        expect(buttonElement.style.color).toBe("white");
        // Assert that the custom top padding is applied
        expect(buttonElement.style.paddingTop).toBe("15px");
        // Assert that the custom bottom padding is applied
        expect(buttonElement.style.paddingBottom).toBe("15px");
        // Assert that the custom left padding is applied
        expect(buttonElement.style.paddingLeft).toBe("35px");
        // Assert that the custom right padding is applied
        expect(buttonElement.style.paddingRight).toBe("35px");
        // Assert that the custom font size is applied
        expect(buttonElement.style.fontSize).toBe("18px");
        // Assert that the custom height is applied
        expect(buttonElement.style.height).toBe("50px");
    });

    // Test case for handling the onClick event
    test("handles onClick event", () => {
        // Create a mock function for the onClick event
        const handleClick = jest.fn();
        // Render the Button component with the mock onClick function
        render(<Button onClick={handleClick}>Click me</Button>);
        // Select the button element by its text
        const buttonElement = screen.getByText(/Click me/i);
        // Simulate a click event on the button
        fireEvent.click(buttonElement);
        // Assert that the onClick function was called once
        expect(handleClick).toHaveBeenCalledTimes(1);
    });

    // Test case for applying the button type attribute
    test("applies button type", () => {
        // Render the Button component with the type attribute set to "submit"
        render(<Button type="submit">Submit</Button>);
        // Select the button element by its text
        const buttonElement = screen.getByText(/Submit/i);
        // Assert that the button's type attribute is "submit"
        expect(buttonElement.getAttribute("type")).toBe("submit");
    });

    // Test case for applying buttonType styles
    test("applies buttonType styles", () => {
        // Render the Button component with buttonType set to "primary"
        render(<Button buttonType="primary">Primary</Button>);
        // Select the button element by its text
        const buttonElement = screen.getByText(/Primary/i);
        // Assert that the "button-primary" class is applied
        expect(buttonElement.className.includes("button-primary")).toBe(true);
    });
});
