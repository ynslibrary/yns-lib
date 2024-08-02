import React, { useCallback } from 'react';
import './Checkbox.css';

// Define the CheckboxProps interface for prop types
export interface CheckboxProps {
    className?: string; // Optional class name for custom styling
    label: string; // Label text for the checkbox
    checked: boolean; // Checked state of the checkbox
    disabled?: boolean; // Disabled state of the checkbox (default is false)
    onChange: (checked: boolean) => void; // Change event handler
    textColor?: string; // Optional text color for the label
    fontSize?: number; // Optional font size for the label
    fontWeight?: number; // Optional font weight for the label
    name?: string; // Optional name attribute for the input element
    onClick?: (event: React.MouseEvent<HTMLInputElement, MouseEvent>) => void; // Optional click event handler for the input element
}

// Define the Checkbox component as a functional component
const Checkbox: React.FC<CheckboxProps> = ({
    className,
    label,
    checked,
    disabled = false,
    onChange,
    textColor = '#000',
    fontSize = 16,
    fontWeight = 400,
    name,
    onClick,
}) => {
    // useCallback to memoize the handleChange function and avoid unnecessary re-renders
    const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        if (!disabled) {
            onChange(e.target.checked);
        }
    }, [onChange, disabled]);

    return (
        <label
            className={`checkbox ${disabled ? 'disabled' : ''} ${className}`} // Apply CSS classes conditionally
            style={{ color: textColor, fontSize: `${fontSize}px`, fontWeight }} // Apply inline styles
            htmlFor="checkbox-input" // Associate the label with the input element
        >
            <input
                id="checkbox-input"
                type="checkbox"
                checked={checked}
                disabled={disabled}
                onChange={handleChange}
                aria-checked={checked}
                name={name}
                onClick={onClick}
            />
            <span className="checkmark"></span> {/* Custom checkmark */}
            <span className="label">{label}</span> {/* Checkbox label */}
        </label>
    );
};

export default Checkbox;
