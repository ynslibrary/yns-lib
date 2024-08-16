import React from "react";
import styled from "styled-components";

// Define the properties (props) for the Input component
export interface InputProps {
    value: string; 
    onChange: (value: string) => void; 
    placeholder?: string; 
    type?: "text" | "password" | "email" | "number"; 
    className?: string;
    disabled?: boolean; 
    borderColor?: string; 
    borderRadius?: number; 
    fontSize?: number;
    paddingY?: number;
    paddingX?: number; 
}

// Styled input component using styled-components
const StyledInput = styled.input<InputProps>`
    border: 1px solid ${(props) => props.borderColor || "#004B93"};
    border-radius: ${(props) => props.borderRadius || 4}px;
    font-size: ${(props) => props.fontSize || 14}px;
    padding: ${(props) => `${props.paddingY || 10}px ${props.paddingX || 7}px`};
    outline: none;
    cursor: ${(props) => (props.disabled ? "not-allowed" : "text")};
    background-color: ${(props) => (props.disabled ? "#f0f0f0" : "transparent")};
    box-sizing: border-box;
`;

// Functional component for the Input field
const Input: React.FC<InputProps> = ({
    value,
    onChange,
    placeholder = "", 
    type = "text", 
    className = "", 
    disabled = false,
    borderColor = "#004B93", 
    borderRadius = 4,
    fontSize = 14, 
    paddingY = 10,
    paddingX = 7,
}) => {
    // Handle the change event for the input field
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange(e.target.value); 
    };

    return (
        <StyledInput
            type={type} 
            value={value}
            onChange={handleChange as any}
            placeholder={placeholder}
            className={className} 
            disabled={disabled} 
            borderColor={borderColor} 
            borderRadius={borderRadius} 
            fontSize={fontSize} 
            paddingY={paddingY} 
            paddingX={paddingX} 
        />
    );
};

export default Input;
