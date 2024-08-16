import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Select, { SelectProps } from './Select';

export default {
    title: 'Components/Select',
    component: Select,
    argTypes: {
        onChange: { action: 'changed' },
    },
} as Meta<typeof Select>;

const Template: StoryFn<SelectProps> = (args) => <Select {...args} />;

export const Default = Template.bind({});
Default.args = {
    options: [
        { value: 'option 1', label: 'Option 1' },
        { value: 'option 2', label: 'Option 2' },
        { value: 'option 3', label: 'Option 3' },
    ],
    placeholder: 'Select an option',
};

export const WithCustomStyles = Template.bind({});
WithCustomStyles.args = {
    options: [
        { value: 'option 1', label: 'Option 1' },
        { value: 'option 2', label: 'Option 2' },
        { value: 'option 3', label: 'Option 3' },
    ],
    placeholder: 'Select an option',
    borderColor: '#1890ff',
    fontFamily: 'Arial, sans-serif',
    color: '#000',
    backgroundColor: '#fff',
    backgroundColorHover: '#e6f7ff',
};

export const Disabled = Template.bind({});
Disabled.args = {
    options: [
        { value: 'option 1', label: 'Option 1' },
        { value: 'option 2', label: 'Option 2' },
        { value: 'option 3', label: 'Option 3' },
    ],
    placeholder: 'Select an option',
    borderColor: '#d9d9d9',
    color: '#000',
    backgroundColor: '#f5f5f5',
    disabled: true,
};

export const ErrorState = Template.bind({});
ErrorState.args = {
    options: [
        { value: 'option 1', label: 'Option 1' },
        { value: 'option 2', label: 'Option 2' },
        { value: 'option 3', label: 'Option 3' },
    ],
    placeholder: 'Select an option',
    borderColor: '#ff4d4f',
    color: '#ff4d4f',
    backgroundColor: '#fff',
    backgroundColorHover: '#fff1f0',
};