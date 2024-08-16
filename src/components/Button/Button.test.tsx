import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Button from './Button';

// Test suite for the Button component
describe('Button', () => {
    // Test case for rendering the Button component with default props
    test('renders the Button component with default props', () => {
        render(<Button>Hello</Button>);
        const buttonElement = screen.getByText(/Hello/i);

        expect(buttonElement).toBeInTheDocument();
        expect(buttonElement.className.includes('button')).toBe(true);
        expect(buttonElement.className.includes('button-primary')).toBe(true);
        expect(buttonElement.style.borderRadius).toBe('10px');
        expect(buttonElement.style.fontFamily).toBe('sans-serif');
        expect(buttonElement.style.color).toBe('rgb(255, 255, 255)');
        expect(buttonElement.style.paddingTop).toBe('12px');
        expect(buttonElement.style.paddingBottom).toBe('12px');
        expect(buttonElement.style.paddingLeft).toBe('30px');
        expect(buttonElement.style.paddingRight).toBe('30px');
        expect(buttonElement.style.fontSize).toBe('16px');
        expect(buttonElement.style.height).toBe('40px');
    });

    // Test case for applying a custom className to the Button
    test('applies custom className', () => {
        render(<Button className="custom-class">Hello</Button>);
        const buttonElement = screen.getByText(/Hello/i);
        expect(buttonElement.className.includes('custom-class')).toBe(true);
    });

    // Test case for applying custom styles to the Button component
    test('applies custom styles', () => {
        render(
            <Button
                borderRadius={20}
                fontFamily="Arial"
                backgroundColor="blue"
                color="white"
                paddingY={15}
                paddingX={35}
                fontSize={18}
                height={50}
            >
                Hello
            </Button>
        );
        const buttonElement = screen.getByText(/Hello/i);
        expect(buttonElement.style.borderRadius).toBe('20px');
        expect(buttonElement.style.fontFamily).toBe('Arial');
        expect(buttonElement.style.backgroundColor).toBe('blue');
        expect(buttonElement.style.color).toBe('white');
        expect(buttonElement.style.paddingTop).toBe('15px');
        expect(buttonElement.style.paddingBottom).toBe('15px');
        expect(buttonElement.style.paddingLeft).toBe('35px');
        expect(buttonElement.style.paddingRight).toBe('35px');
        expect(buttonElement.style.fontSize).toBe('18px');
        expect(buttonElement.style.height).toBe('50px');
    });

    // Test case for handling the onClick event
    test('handles onClick event', () => {
        const handleClick = jest.fn();
        render(<Button onClick={handleClick}>Click me</Button>);
        const buttonElement = screen.getByText(/Click me/i);
        fireEvent.click(buttonElement);
        expect(handleClick).toHaveBeenCalledTimes(1);
    });

    // Test case for applying the button type attribute
    test('applies button type', () => {
        render(<Button type="submit">Submit</Button>);
        const buttonElement = screen.getByText(/Submit/i);
        expect(buttonElement.getAttribute('type')).toBe('submit');
    });

    // Test case for applying buttonType styles
    test('applies buttonType styles', () => {
        render(<Button buttonType="primary">Primary</Button>);
        const buttonElement = screen.getByText(/Primary/i);
        expect(buttonElement.className.includes('button-primary')).toBe(true);
    });

    // Test case for hover effect
    test('applies hover effect', () => {
        render(<Button>Hello</Button>);
        const buttonElement = screen.getByText(/Hello/i);

        // Use the `getComputedStyle` function to check hover styles
        const originalBgColor = getComputedStyle(buttonElement).backgroundColor;
        expect(originalBgColor).toBe('rgb(0, 75, 147)'); // Primary color default

        // Simulate hover effect
        fireEvent.mouseOver(buttonElement);

        // Check the background color after hover
        const hoverBgColor = getComputedStyle(buttonElement).backgroundColor;
        expect(hoverBgColor).toBe('rgb(0, 61, 122)'); // Darker color for hover
    });
});
