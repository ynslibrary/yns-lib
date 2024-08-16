import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Select, { SelectProps } from './Select';

const defaultProps: SelectProps = {
    options: [
        { value: 'option1', label: 'Option 1' },
        { value: 'option2', label: 'Option 2' },
        { value: 'option3', label: 'Option 3' },
    ],
    placeholder: 'Select an option',
};

describe('Select Component', () => {
    // Test rendering with placeholder
    test('renders with placeholder', () => {
        render(<Select {...defaultProps} />);
        expect(screen.getByText('Select an option')).toBeInTheDocument();
    });

    // Test opening options list when clicked
    test('opens options list when clicked', () => {
        render(<Select {...defaultProps} />);
        fireEvent.click(screen.getByText('Select an option'));
        expect(screen.getByText('Option 1')).toBeInTheDocument();
    });

    // Test selecting an option and calling onChange
    test('selects an option and calls onChange', () => {
        const onChange = jest.fn();
        render(<Select {...defaultProps} onChange={onChange} />);
        fireEvent.click(screen.getByText('Select an option'));
        fireEvent.click(screen.getByText('Option 1'));
        expect(onChange).toHaveBeenCalledWith('option1');
        expect(screen.getByText('Option 1')).toBeInTheDocument();
    });

    // Test applying custom styles
    test('applies custom styles', () => {
        const customProps: SelectProps = {
            ...defaultProps,
            borderColor: '#1890ff',
            fontFamily: 'Arial, sans-serif',
            color: '#000',
            backgroundColor: '#fff',
            backgroundColorHover: '#e6f7ff',
        };
        render(<Select {...customProps} />);
        fireEvent.click(screen.getByText('Select an option'));
        const selectBox = screen.getByRole('combobox');
        expect(selectBox).toHaveStyle('border: 1px solid #1890ff');
        expect(selectBox).toHaveStyle('font-family: Arial, sans-serif');
        expect(selectBox).toHaveStyle('color: #000');
        expect(selectBox).toHaveStyle('background-color: #fff');
    });

    // Test displaying disabled state
    test('displays disabled state', () => {
        const disabledProps: SelectProps = {
            ...defaultProps,
            disabled: true,
        };
        render(<Select {...disabledProps} />);
        expect(screen.getByText('Select an option')).toBeDisabled();
    });

    // Test handling keyboard navigation
    test('handles keyboard navigation', () => {
        render(<Select {...defaultProps} />);
        fireEvent.click(screen.getByText('Select an option'));
        fireEvent.keyDown(screen.getByRole('combobox'), { key: 'ArrowDown' });
        fireEvent.keyDown(screen.getByRole('combobox'), { key: 'Enter' });
        expect(screen.getByText('Option 1')).toBeInTheDocument();
    });
});
