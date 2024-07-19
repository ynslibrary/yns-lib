import React from "react";
import "./Button.css";
import classNames from "classnames";

export interface ButtonProps {
    children?: React.ReactNode;
    className?: string;
    onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    type?: "button" | "submit" | "reset";
    buttonType?: "primary" | "secondary" | "success";
    borderRadius?: number;
    fontFamily?: string;
    backgroundColor?: string;
    color?: string;
    paddingY?: number;
    paddingX?: number;
    fontSize?: number
}

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
    fontSize = 16
}) => {
    const buttonClass = classNames("button", {
        "button-primary": buttonType === "primary",
        "button-secondary": buttonType === "secondary",
        "button-success": buttonType === "success",
    }, className);

    const buttonStyle: React.CSSProperties = {
        borderRadius: `${borderRadius}px`,
        fontFamily: fontFamily,
        backgroundColor: backgroundColor,
        color: color,
        paddingTop: `${paddingY}px`,
        paddingBottom: `${paddingY}px`,
        paddingLeft: `${paddingX}px`,
        paddingRight: `${paddingX}px`,
        fontSize: fontSize
    };

    return (
        <button
            className={buttonClass}
            onClick={onClick}
            type={type}
            style={buttonStyle}
        >
            {children}
        </button>
    );
};

export default Button;
