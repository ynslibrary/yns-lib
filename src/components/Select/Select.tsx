import React, { useState } from 'react';
import styled from 'styled-components';

export interface Option {
    value: string;
    label: string;
}

export interface SelectProps {
    options: Option[];
    value?: string;
    onChange?: (value: string) => void;
    placeholder?: string;
    borderColor?: string;
    fontFamily?: string;
    color?: string;
    backgroundColor?: string;
    backgroundColorHover?: string;
    className?: string;
}

const SelectContainer = styled.div<{ fontFamily?: string }>`
    font-family: ${props => props.fontFamily || 'sans-serif'};
    position: relative;
    display: inline-block;
`;

const SelectBox = styled.div<{ borderColor: string; color: string; backgroundColor: string }>`
    border: 1px solid ${props => props.borderColor || '#d9d9d9'};
    color: ${props => props.color || '#000'};
    background-color: ${props => props.backgroundColor || '#fff'};
    padding: 8px;
    cursor: pointer;
    position: relative;
    border-radius: 5px;
    display: flex;
    gap: 10px;
    align-items: center;
`;

const SelectOptions = styled.div<{ borderColor: string; backgroundColor: string }>`
    border: 1px solid ${props => props.borderColor || '#d9d9d9'};
    background-color: ${props => props.backgroundColor || '#fff'};
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    z-index: 1000;
    max-height: 200px;
    overflow-y: auto;
    margin-top: 5px;
    border-radius: 5px;
`;

const SelectOption = styled.div<{ color: string; backgroundColorHover: string }>`
    padding: 8px;
    cursor: pointer;

    &:hover {
        background-color: ${props => props.backgroundColorHover || '#f5f5f5'};
    }
`;

const Select: React.FC<SelectProps> = ({
    className,
    options,
    value,
    onChange,
    placeholder,
    borderColor = "#d9d9d9",
    fontFamily,
    color = "#000",
    backgroundColor = "#fff",
    backgroundColorHover = "#f5f5f5",
    ...props
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState(value || '');

    const handleSelect = (optionValue: string) => {
        setSelectedValue(optionValue);
        setIsOpen(false);
        if (onChange) {
            onChange(optionValue);
        }
    };

    return (
        <SelectContainer className={className} fontFamily={fontFamily} {...props}>
            <SelectBox
                borderColor={borderColor}
                color={color}
                backgroundColor={backgroundColor}
                onClick={() => setIsOpen(!isOpen)}
            >
                {selectedValue || placeholder}
                <span className="arrow">&#9660;</span>
            </SelectBox>
            {isOpen && (
                <SelectOptions borderColor={borderColor} backgroundColor={backgroundColor}>
                    {options.map((option) => (
                        <SelectOption
                            key={option.value}
                            color={color}
                            backgroundColorHover={backgroundColorHover}
                            onClick={() => handleSelect(option.value)}
                        >
                            {option.label}
                        </SelectOption>
                    ))}
                </SelectOptions>
            )}
        </SelectContainer>
    );
};

export default Select;
``