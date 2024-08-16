import React from 'react';
import styled from 'styled-components';
import classNames from 'classnames';

// Define the props interface for the Button component
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children?: React.ReactNode;
    className?: string;
    buttonType?: "primary" | "secondary" | "success";
    borderRadius?: number;
    fontFamily?: string;
    backgroundColor?: string;
    color?: string;
    paddingY?: number;
    paddingX?: number;
    fontSize?: number;
    height?: number;
    isLoading?: boolean;
    [key: string]: any;
}

// Styled components
const StyledButton = styled.button<{
    buttonType: string;
    borderRadius: number;
    fontFamily: string;
    backgroundColor?: string;
    color: string;
    paddingY: number;
    paddingX: number;
    fontSize: number;
    height: number;
    isLoading?: boolean;
}>`
    border: none;
    cursor: pointer;
    border-radius: ${({ borderRadius }) => `${borderRadius}px`};
    font-family: ${({ fontFamily }) => fontFamily};
    background-color: ${({ backgroundColor, buttonType }) =>
        backgroundColor ||
        (buttonType === 'primary' ? '#004B93' :
            buttonType === 'secondary' ? '#79B2E1' :
                buttonType === 'success' ? '#24C18F' : '#004B93')};
    color: ${({ color }) => color};
    padding: ${({ paddingY, paddingX }) => `${paddingY}px ${paddingX}px`};
    font-size: ${({ fontSize }) => `${fontSize}px`};
    height: ${({ height }) => `${height}px`};
    transition: background-color 0.3s, transform 0.2s;

    &:hover {
        background-color: ${({ backgroundColor, buttonType }) =>
        backgroundColor ?
            (backgroundColor !== '#004B93' ? '#004B93' : backgroundColor) :
            (buttonType === 'primary' ? '#003d7a' :
                buttonType === 'secondary' ? '#68a3c1' :
                    buttonType === 'success' ? '#1f9e76' : '#003d7a')};
        transform: scale(1.05);
    }

    &:disabled, &[aria-disabled="true"] {
        cursor: not-allowed;
        opacity: 0.5;
    }

    ${({ isLoading }) =>
        isLoading &&
        `
        cursor: wait;
        opacity: 0.8;
        pointer-events: none;
    `}
`;

// Functional Button component with default props and conditional styling
const Button: React.FC<ButtonProps> = ({
    children,
    className = "",
    onClick,
    type = "button",
    buttonType = "primary",
    borderRadius = 10,
    fontFamily = "sans-serif",
    backgroundColor,
    color = "#fff",
    paddingY = 12,
    paddingX = 30,
    fontSize = 16,
    height = 40,
    isLoading = false,
    ...rest
}) => {
    return (
        <StyledButton
            className={classNames("button", className)}
            onClick={onClick}
            type={type}
            buttonType={buttonType}
            borderRadius={borderRadius}
            fontFamily={fontFamily}
            backgroundColor={backgroundColor}
            color={color}
            paddingY={paddingY}
            paddingX={paddingX}
            fontSize={fontSize}
            height={height}
            isLoading={isLoading}
            disabled={isLoading}
            {...rest} // spread the rest props to the button
        >
            {isLoading ? "Loading..." : children}
        </StyledButton>
    );
};

export default Button;
