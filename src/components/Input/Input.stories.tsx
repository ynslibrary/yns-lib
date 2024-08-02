import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import Input, { InputProps } from "./Input";

export default {
    title: 'Components/Input', // Title for the Storybook section
    component: Input, // The component being documented
    argTypes: {
        value: { control: 'text' }, // Control for input value
        onChange: { action: 'changed' }, // Action for change event
        placeholder: { control: 'text' }, // Control for placeholder text
        type: { control: { type: 'select', options: ['text', 'password', 'email', 'number'] } }, // Control for input type
        className: { control: 'text' }, // Control for custom class names
        disabled: { control: 'boolean' }, // Control for disabling the input
        borderColor: { control: 'color' }, // Control for border color
        borderRadius: { control: 'number' }, // Control for border radius
        fontSize: { control: 'number' }, // Control for font size
        paddingY: { control: 'number' }, // Control for vertical padding
        paddingX: { control: 'number' }, // Control for horizontal padding
    },
} as Meta;

const Template: StoryFn<InputProps> = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
    value: '', // Default value is an empty string
    onChange: (value: string) => { }, // No-op function for onChange
    placeholder: 'Enter text here', // Default placeholder text
    type: 'text', // Default type is text
    className: '', // No additional class name
    disabled: false, // Input is not disabled by default
    borderColor: '#ccc', // Default border color
    borderRadius: 4, // Default border radius
    fontSize: 14, // Default font size
    paddingY: 10, // Default vertical padding
    paddingX: 7, // Default horizontal padding
};

export const WithPlaceholder = Template.bind({});
WithPlaceholder.args = {
    value: '', // Empty value
    onChange: (value: string) => { }, // No-op function for onChange
    placeholder: 'Type something...', // Custom placeholder text
    type: 'text', // Type is text
    className: '', // No additional class name
    disabled: false, // Input is not disabled
    borderColor: '#ccc', // Default border color
    borderRadius: 4, // Default border radius
    fontSize: 14, // Default font size
    paddingY: 10, // Default vertical padding
    paddingX: 7, // Default horizontal padding
};

export const Disabled = Template.bind({});
Disabled.args = {
    value: '', // Empty value
    onChange: (value: string) => { }, // No-op function for onChange
    placeholder: 'Disabled', // Placeholder text
    type: 'text', // Type is text
    className: '', // No additional class name
    disabled: true, // Input is disabled
    borderColor: '#ccc', // Default border color
    borderRadius: 4, // Default border radius
    fontSize: 14, // Default font size
    paddingY: 10, // Default vertical padding
    paddingX: 7, // Default horizontal padding
};

export const CustomStyles = Template.bind({});
CustomStyles.args = {
    value: 'Custom Styles', // Custom value
    onChange: (value: string) => { }, // No-op function for onChange
    placeholder: 'Styled Input', // Placeholder text
    type: 'text', // Type is text
    className: '', // No additional class name
    disabled: false, // Input is not disabled
    borderColor: '#004B93', // Custom border color
    borderRadius: 8, // Custom border radius
    fontSize: 18, // Custom font size
    paddingY: 12, // Custom vertical padding
    paddingX: 10, // Custom horizontal padding
};
