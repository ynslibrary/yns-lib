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

const Template: StoryFn<SelectProps> = (args: React.JSX.IntrinsicAttributes & SelectProps) => <Select {...args} />;

export const Default = Template.bind({});
Default.args = {
    options: [
        { value: 'option1', label: 'Option 1' },
        { value: 'option2', label: 'Option 2' },
        { value: 'option3', label: 'Option 3' },
    ],
    placeholder: 'Select an option',
};

export const WithCustomStyles = Template.bind({});
WithCustomStyles.args = {
    options: [
        { value: 'option1', label: 'Option 1' },
        { value: 'option2', label: 'Option 2' },
        { value: 'option3', label: 'Option 3' },
    ],
    placeholder: 'Select an option',
    borderColor: '#1890ff',
    fontFamily: 'Arial, sans-serif',
    color: '#000',
    backgroundColor: '#fff',
    backgroundColorHover: '#e6f7ff'
};
