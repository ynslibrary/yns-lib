import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

// Define the structure of the options for the Select component
export interface Option {
    value: string;
    label: string;
}

// Define the props that the Select component will accept
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
    disabled?: boolean;
}

// Styled container for the select component
const SelectContainer = styled.div<{ fontFamily?: string; disabled?: boolean }>`
    font-family: ${props => props.fontFamily || 'sans-serif'};
    position: relative;
    display: inline-block;
    opacity: ${props => props.disabled ? 0.5 : 1};
    cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
`;

// Styled box that displays the selected value or placeholder
const SelectBox = styled.div<{ borderColor: string; color: string; backgroundColor: string; disabled?: boolean }>`
    border: 1px solid ${props => props.borderColor || '#d9d9d9'};
    color: ${props => props.color || '#000'};
    background-color: ${props => props.backgroundColor || '#fff'};
    padding: 8px;
    cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
    position: relative;
    border-radius: 5px;
    display: flex;
    gap: 10px;
    align-items: center;
`;

// Styled dropdown options container
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

// Styled individual option in the dropdown
const SelectOption = styled.div<{ color: string; backgroundColorHover: string; isFocused: boolean }>`
    padding: 8px;
    cursor: pointer;
    background-color: ${props => props.isFocused ? props.backgroundColorHover : 'inherit'};

    &:hover {
        background-color: ${props => props.backgroundColorHover || '#f5f5f5'};
    }
`;

// Main Select component
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
    disabled = false,
    ...props
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState(value || '');
    const [focusedIndex, setFocusedIndex] = useState(-1);
    const selectBoxRef = useRef<HTMLDivElement>(null);

    // Synchronize selectedValue with the value prop
    useEffect(() => {
        setSelectedValue(value || '');
    }, [value]);

    // Effect to focus on the selected option when the dropdown is opened
    useEffect(() => {
        if (isOpen) {
            setFocusedIndex(options.findIndex(option => option.value === selectedValue));
        }
    }, [isOpen, options, selectedValue]);

    // Close the dropdown if a click occurs outside the select box
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (selectBoxRef.current && !selectBoxRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    // Handle the selection of an option
    const handleSelect = (optionValue: string) => {
        if (disabled) return;
        setSelectedValue(optionValue);
        setIsOpen(false);
        if (onChange) {
            onChange(optionValue);
        }
    };

    // Handle keyboard navigation within the dropdown
    const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
        if (!isOpen || disabled) return;

        if (event.key === 'ArrowDown') {
            setFocusedIndex((prev) => (prev + 1) % options.length);
        } else if (event.key === 'ArrowUp') {
            setFocusedIndex((prev) => (prev - 1 + options.length) % options.length);
        } else if (event.key === 'Enter' && focusedIndex >= 0) {
            handleSelect(options[focusedIndex].value);
        } else if (event.key === 'Escape') {
            setIsOpen(false);
        }
    };

    return (
        <SelectContainer
            className={className}
            fontFamily={fontFamily}
            disabled={disabled}
            onKeyDown={handleKeyDown}
            tabIndex={0}
            ref={selectBoxRef}
            aria-expanded={isOpen}
            aria-haspopup="listbox"
            aria-disabled={disabled}
        >
            <SelectBox
                borderColor={borderColor}
                color={color}
                backgroundColor={backgroundColor}
                onClick={() => !disabled && setIsOpen(!isOpen)}
                aria-label={selectedValue || placeholder}
                disabled={disabled}
            >
                {selectedValue || placeholder}
                <span>
                    <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 6L8 10L12 6" stroke="#0F172A" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </span>
            </SelectBox>
            {isOpen && (
                <SelectOptions
                    borderColor={borderColor}
                    backgroundColor={backgroundColor}
                    role="listbox"
                    aria-activedescendant={options[focusedIndex]?.value}
                >
                    {options.map((option, index) => (
                        <SelectOption
                            key={option.value}
                            color={color}
                            backgroundColorHover={backgroundColorHover}
                            onClick={() => handleSelect(option.value)}
                            aria-selected={selectedValue === option.value}
                            role="option"
                            tabIndex={-1}
                            isFocused={focusedIndex === index}
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
