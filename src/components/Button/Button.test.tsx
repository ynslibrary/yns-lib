import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Button from "./Button";

describe("Button", () => {
    test("renders the Button component with default props", () => {
        render(<Button>Hello</Button>);
        const buttonElement = screen.getByText(/Hello/i);
        expect(buttonElement).not.toBeNull();
        expect(buttonElement.className.includes("button")).toBe(true);
        expect(buttonElement.className.includes("button-secondary")).toBe(true);
        expect(buttonElement.style.borderRadius).toBe("10px");
        expect(buttonElement.style.fontFamily).toBe("sans-serif");
        expect(buttonElement.style.color).toBe("rgb(255, 255, 255)");
        expect(buttonElement.style.paddingTop).toBe("12px");
        expect(buttonElement.style.paddingBottom).toBe("12px");
        expect(buttonElement.style.paddingLeft).toBe("30px");
        expect(buttonElement.style.paddingRight).toBe("30px");
        expect(buttonElement.style.fontSize).toBe("16px");
    });

    test("applies custom className", () => {
        render(<Button className="custom-class">Hello</Button>);
        const buttonElement = screen.getByText(/Hello/i);
        expect(buttonElement.className.includes("custom-class")).toBe(true);
    });

    test("applies custom styles", () => {
        render(
            <Button
                borderRadius={20}
                fontFamily="Arial"
                backgroundColor="blue"
                color="white"
                paddingY={15}
                paddingX={35}
                fontSize={18}
            >
                Hello
            </Button>
        );
        const buttonElement = screen.getByText(/Hello/i);
        expect(buttonElement.style.borderRadius).toBe("20px");
        expect(buttonElement.style.fontFamily).toBe("Arial");
        expect(buttonElement.style.backgroundColor).toBe("blue");
        expect(buttonElement.style.color).toBe("white");
        expect(buttonElement.style.paddingTop).toBe("15px");
        expect(buttonElement.style.paddingBottom).toBe("15px");
        expect(buttonElement.style.paddingLeft).toBe("35px");
        expect(buttonElement.style.paddingRight).toBe("35px");
        expect(buttonElement.style.fontSize).toBe("18px");
    });

    test("handles onClick event", () => {
        const handleClick = jest.fn();
        render(<Button onClick={handleClick}>Click me</Button>);
        const buttonElement = screen.getByText(/Click me/i);
        fireEvent.click(buttonElement);
        expect(handleClick).toHaveBeenCalledTimes(1);
    });

    test("applies button type", () => {
        render(<Button type="submit">Submit</Button>);
        const buttonElement = screen.getByText(/Submit/i);
        expect(buttonElement.getAttribute("type")).toBe("submit");
    });

    test("applies buttonType styles", () => {
        render(<Button buttonType="primary">Primary</Button>);
        const buttonElement = screen.getByText(/Primary/i);
        expect(buttonElement.className.includes("button-primary")).toBe(true);
    });
});
