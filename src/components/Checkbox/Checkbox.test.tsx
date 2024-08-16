import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Checkbox from './Checkbox';
import '@testing-library/jest-dom';

describe('Checkbox', () => {
    // Test case for rendering Checkbox component with default props
    test('renders the Checkbox component with default props', () => {
        const handleChange = jest.fn();
        render(<Checkbox label="This is a label" checked={false} onChange={handleChange} />);
        const labelElement = screen.getByText(/This is a label/i);
        expect(labelElement).toBeInTheDocument(); // Check if the label is in the document
    });

    // Test case for verifying checkbox is checked when checked prop is true
    test('checkbox is checked when checked prop is true', () => {
        const handleChange = jest.fn();
        render(<Checkbox label="This is a label" checked={true} onChange={handleChange} />);
        const inputElement = screen.getByRole('checkbox') as HTMLInputElement;
        expect(inputElement.checked).toBe(true); // Check if the checkbox is checked
    });

    // Test case for verifying checkbox is not checked when checked prop is false
    test('checkbox is not checked when checked prop is false', () => {
        const handleChange = jest.fn();
        render(<Checkbox label="This is a label" checked={false} onChange={handleChange} />);
        const inputElement = screen.getByRole('checkbox') as HTMLInputElement;
        expect(inputElement.checked).toBe(false); // Check if the checkbox is not checked
    });

    // Test case for verifying checkbox calls onChange when clicked
    test('checkbox calls onChange when clicked', () => {
        const handleChange = jest.fn();
        render(<Checkbox label="This is a label" checked={false} onChange={handleChange} />);
        const inputElement = screen.getByRole('checkbox');
        fireEvent.click(inputElement); // Simulate a click event on the checkbox
        expect(handleChange).toHaveBeenCalledTimes(1); // Check if onChange was called exactly once
        expect(handleChange).toHaveBeenCalledWith(true); // Check if onChange was called with 'true'
    });

    // Test case for verifying checkbox does not call onChange when disabled
    test('checkbox does not call onChange when disabled', () => {
        const handleChange = jest.fn();
        render(<Checkbox label="This is a label" checked={false} onChange={handleChange} disabled />);
        const inputElement = screen.getByRole('checkbox');
        fireEvent.click(inputElement); // Simulate a click event on the disabled checkbox
        expect(handleChange).not.toHaveBeenCalled(); // Check if onChange was not called
    });

    // Test case for verifying checkbox has disabled class when disabled
    test('checkbox has disabled class when disabled', () => {
        const handleChange = jest.fn();
        render(<Checkbox label="This is a label" checked={false} onChange={handleChange} disabled />);
        const labelElement = screen.getByText(/This is a label/i).closest('label');
        expect(labelElement?.className).toContain('disabled'); // Check if the label contains 'disabled' class
    });

    // Test case for verifying checkbox label styling with custom text color, font size, and font weight
    test('checkbox label has custom text color, font size, and font weight', () => {
        const handleChange = jest.fn();
        render(
            <Checkbox
                label="Styled Label"
                checked={false}
                onChange={handleChange}
                textColor="#FF0000"
                fontSize={18}
                fontWeight={700}
            />
        );
        const labelElement = screen.getByText(/Styled Label/i);
        expect(labelElement).toHaveStyle({ color: '#FF0000', fontSize: '18px', fontWeight: '700' });
    });
});
