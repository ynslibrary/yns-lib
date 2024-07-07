import React from "react";
import "./Button.css";

export interface ButtonProps {
    children?: React.ReactNode;
    className?: string;
    onClick?: () => void;
    type?: "button" | "submit" | "reset";
    ButtonType?: "secondary" | "primary";
}

const Button: React.FC<ButtonProps> = ({
    children,
    className,
    onClick,
    type,
    ButtonType
}) => {
    const buttonClass = ButtonType === "primary" ? "button-primary" : "button-secondary";
    return (
        <button
            className={`button ${buttonClass} ${className}`}
            onClick={onClick}
            type={type || "button"}
        >
            {children}
        </button>
    );
};

export default Button;
