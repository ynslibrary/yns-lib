import React from "react";
import "./Button.css"; // Importing CSS styles for the Button component
import classNames from "classnames"; // Importing classNames library for conditional class management

// Define the props interface for the Button component
export interface ButtonProps {
    children?: React.ReactNode; // Content to be displayed inside the button
    className?: string; // Additional custom class names to be added to the button
    onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void; // Optional click event handler
    type?: "button" | "submit" | "reset"; // Type of the button, default is "button"
    buttonType?: "primary" | "secondary" | "success"; // Defines the button style based on its type
    borderRadius?: number; // Radius for rounded corners, in pixels
    fontFamily?: string; // Font family for the button text
    backgroundColor?: string; // Background color of the button
    color?: string; // Text color of the button
    paddingY?: number; // Vertical padding (top and bottom) in pixels
    paddingX?: number; // Horizontal padding (left and right) in pixels
    fontSize?: number; // Font size of the button text in pixels
    height?: number; // Height of the button in pixels
}

// Functional Button component with default props and conditional styling
const Button: React.FC<ButtonProps> = ({
    children,
    className = "", // Default to an empty string if no className is provided
    onClick,
    type = "button", // Default button type is "button"
    buttonType = "primary", // Default button type is "primary"
    borderRadius = 10, // Default border radius is 10 pixels
    fontFamily = "sans-serif", // Default font family is sans-serif
    backgroundColor, // Default background color if not provided
    color = "#fff", // Default text color is white
    paddingY = 12, // Default vertical padding is 12 pixels
    paddingX = 30, // Default horizontal padding is 30 pixels
    fontSize = 16, // Default font size is 16 pixels
    height = 40 // Default height if not provided
}) => {
    // Use classNames to conditionally apply classes based on the buttonType prop
    const buttonClass = classNames("button", {
        "button-primary": buttonType === "primary",
        "button-secondary": buttonType === "secondary",
        "button-success": buttonType === "success",
    }, className); // Include any additional classes passed via className prop

    // Define inline styles for the button
    const buttonStyle: React.CSSProperties = {
        borderRadius: `${borderRadius}px`, // Convert borderRadius to pixels
        fontFamily: fontFamily, // Apply the font family
        backgroundColor: backgroundColor, // Apply the background color
        color: color, // Apply the text color
        paddingTop: `${paddingY}px`, // Apply top padding
        paddingBottom: `${paddingY}px`, // Apply bottom padding
        paddingLeft: `${paddingX}px`, // Apply left padding
        paddingRight: `${paddingX}px`, // Apply right padding
        fontSize: `${fontSize}px`, // Convert fontSize to pixels
        height: `${height}px` // Apply height if provided
    };

    return (
        <button
            className={buttonClass} // Apply the conditional class names
            onClick={onClick} // Attach the click event handler
            type={type} // Set the button type (button, submit, or reset)
            style={buttonStyle} // Apply the inline styles
        >
            {children} {/* Render the button's children (text or elements inside the button) */}
        </button>
    );
};

export default Button; // Export the Button component for use in other parts of the application
