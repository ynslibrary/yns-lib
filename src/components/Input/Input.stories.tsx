import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import Input, { InputProps } from "./Input";

export default {
    title: 'Components/Input',
    component: Input,
    argTypes: {
        value: { control: 'text' },
        onChange: { action: 'changed' },
        placeholder: { control: 'text' },
        type: { control: { type: 'select', options: ['text', 'password', 'email', 'number'] } },
        className: { control: 'text' },
        disabled: { control: 'boolean' },
        borderColor: { control: 'color' },
        borderRadius: { control: 'number' },
        fontSize: { control: 'number' },
        paddingY: { control: 'number' },
        paddingX: { control: 'number' },
    },
} as Meta<typeof Input>;

const Template: StoryFn<InputProps> = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
    value: '',
    onChange: (value: string) => { },
    placeholder: 'Enter text here',
    type: 'text',
    className: '',
    disabled: false,
    borderColor: '#ccc',
    borderRadius: 4,
    fontSize: 14,
    paddingY: 10,
    paddingX: 7,
};

export const WithPlaceholder = Template.bind({});
WithPlaceholder.args = {
    value: '',
    onChange: (value: string) => { },
    placeholder: 'Type something...',
    type: 'text',
    className: '',
    disabled: false,
    borderColor: '#ccc',
    borderRadius: 4,
    fontSize: 14,
    paddingY: 10,
    paddingX: 7,
};

export const Disabled = Template.bind({});
Disabled.args = {
    value: '',
    onChange: (value: string) => { },
    placeholder: 'Disabled',
    type: 'text',
    className: '',
    disabled: true,
    borderColor: '#ccc',
    borderRadius: 4,
    fontSize: 14,
    paddingY: 10,
    paddingX: 7,
};

export const CustomStyles = Template.bind({});
CustomStyles.args = {
    value: 'Custom Styles',
    onChange: (value: string) => { },
    placeholder: 'Styled Input',
    type: 'text',
    className: '',
    disabled: false,
    borderColor: '#004B93',
    borderRadius: 8,
    fontSize: 18,
    paddingY: 12,
    paddingX: 10,
};
