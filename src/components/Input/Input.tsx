import React from "react";
import "./Input.css";
import classNames from "classnames";

// Define the properties (props) for the Input component
export interface InputProps {
    value: string; // The current value of the input field
    onChange: (value: string) => void; // Callback function to handle value changes
    placeholder?: string; // Placeholder text for the input field
    type?: "text" | "password" | "email" | "number"; // Type of the input field
    className?: string; // Additional custom class names for styling
    disabled?: boolean; // Boolean to disable the input field
    borderColor?: string; // Custom border color for the input field
    borderRadius?: number; // Custom border radius for rounded corners
    fontSize?: number; // Custom font size for the input text
    paddingY?: number; // Vertical padding (top and bottom) in pixels
    paddingX?: number; // Horizontal padding (left and right) in pixels
}

// Functional component for the Input field
const Input: React.FC<InputProps> = ({
    value,
    onChange,
    placeholder = "", // Default placeholder is an empty string
    type = "text", // Default type is "text"
    className = "", // Default className is an empty string
    disabled = false, // Default disabled state is false
    borderColor = "#004B93", // Default border color is #004B93
    borderRadius = 4, // Default border radius is 4 pixels
    fontSize = 14, // Default font size is 14 pixels
    paddingY = 10, // Default vertical padding is 10 pixels
    paddingX = 7, // Default horizontal padding is 7 pixels
}) => {
    // Handle the change event for the input field
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange(e.target.value); // Call the onChange prop with the new input value
    };

    // Combine custom class names with default "text-input" class
    const inputClass = classNames("text-input", className, {
        "text-input-disabled": disabled, // Apply "text-input-disabled" class if disabled
    });

    // Inline styles for the input field
    const inputStyle: React.CSSProperties = {
        borderColor, // Set the border color
        borderRadius: `${borderRadius}px`, // Set the border radius
        fontSize: `${fontSize}px`, // Set the font size
        paddingTop: `${paddingY}px`, // Apply top padding
        paddingBottom: `${paddingY}px`, // Apply bottom padding
        paddingLeft: `${paddingX}px`, // Apply left padding
        paddingRight: `${paddingX}px`, // Apply right padding
    };

    return (
        <input
            type={type} // Set the type of the input field
            value={value} // Set the current value of the input field
            onChange={handleChange} // Attach the change event handler
            placeholder={placeholder} // Set the placeholder text
            className={inputClass} // Apply the combined class names
            style={inputStyle} // Apply inline styles
            disabled={disabled} // Disable the input field if disabled is true
        />
    );
};

export default Input;
