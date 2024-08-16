import React, { useCallback } from 'react';
import styled from 'styled-components';

// Define the CheckboxProps interface for prop types
export interface CheckboxProps {
    className?: string;
    label: string;
    checked: boolean;
    disabled?: boolean;
    onChange: (checked: boolean) => void;
    textColor?: string;
    fontSize?: number;
    fontWeight?: number;
    name?: string;
    onClick?: (event: React.MouseEvent<HTMLInputElement, MouseEvent>) => void;
}

// Styled components
const Label = styled.label<{ disabled: boolean; textColor: string; fontSize: number; fontWeight: number }>`
    display: flex;
    align-items: center;
    cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
    color: ${({ textColor }) => textColor};
    font-size: ${({ fontSize }) => `${fontSize}px`};
    font-weight: ${({ fontWeight }) => fontWeight};
    opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
`;

const Input = styled.input`
    display: none;
`;

const Checkmark = styled.span<{ disabled: boolean }>`
    width: 20px;
    height: 20px;
    border: 1px solid #ccc;
    margin-right: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    border-radius: 4px;
    background-color: #fff;

    &::after {
        content: "✔";
        font-size: 16px;
        color: white;
        background-color: #004B93;
        display: flex;
        justify-content: center;
        align-items: center;
        opacity: 0;
        width: 100%;
        height: 100%;
        border-radius: 4px;
        transform: scale(0);
        transition: opacity 0.2s, transform 0.2s;
    }

    ${Input}:checked + &::after {
        opacity: 1;
        transform: scale(1);
    }

    ${Input}:disabled + & {
        border-color: #ccc;
    }
    
    ${({ disabled }) => disabled && `
        background-color: #ccc;
    `}
`;

const LabelText = styled.span`
    display: inline-block;
`;

// Define the Checkbox component as a functional component
const Checkbox: React.FC<CheckboxProps> = ({
    className = '',
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
        <Label
            className={className}
            disabled={disabled}
            textColor={textColor}
            fontSize={fontSize}
            fontWeight={fontWeight}
        >
            <Input
                type="checkbox"
                checked={checked}
                disabled={disabled}
                onChange={handleChange}
                aria-checked={checked}
                name={name}
                onClick={onClick}
            />
            <Checkmark disabled={disabled} />
            <LabelText>{label}</LabelText>
        </Label>
    );
};

export default Checkbox;
