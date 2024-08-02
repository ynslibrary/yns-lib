import React, { useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Checkbox, { CheckboxProps } from './Checkbox';

export default {
    // Title for the Checkbox component in the Storybook UI
    title: 'Components/Checkbox',
    component: Checkbox,
    argTypes: {
        // Controls for props in the Storybook UI
        label: { control: 'text' },
        checked: { control: 'boolean' },
        disabled: { control: 'boolean' },
        onChange: { action: 'changed' },
        textColor: { control: 'color' },
        fontSize: { control: 'number' },
        fontWeight: { control: 'number' },
    },
} as Meta;

// Template function to create stories
const Template: StoryFn<CheckboxProps> = (args: React.JSX.IntrinsicAttributes & CheckboxProps) => {
    // Use local state to manage the checked state of the checkbox
    const [checked, setChecked] = useState(args.checked || false);

    // Handle change event and update the state
    const handleChange = (newChecked: boolean) => {
        setChecked(newChecked);
        args.onChange(newChecked);
    };

    // Render the Checkbox component with updated props
    return <Checkbox {...args} checked={checked} onChange={handleChange} />;
};

// Default Checkbox story
export const Default = Template.bind({});
Default.args = {
    label: 'This is a label',
    checked: false,
};
Default.storyName = 'Default Checkbox';
Default.parameters = {
    docs: {
        storyDescription: 'Default checkbox with label.',
    },
};

// Checked Checkbox story
export const Checked = Template.bind({});
Checked.args = {
    label: 'This is a label',
    checked: true,
};
Checked.storyName = 'Checked Checkbox';
Checked.parameters = {
    docs: {
        storyDescription: 'Checkbox that is initially checked.',
    },
};

// Disabled Checkbox story
export const Disabled = Template.bind({});
Disabled.args = {
    label: 'This is a label',
    checked: false,
    disabled: true,
};
Disabled.storyName = 'Disabled Checkbox';
Disabled.parameters = {
    docs: {
        storyDescription: 'Checkbox that is disabled and cannot be interacted with.',
    },
};

// Checked and Disabled Checkbox story
export const CheckedDisabled = Template.bind({});
CheckedDisabled.args = {
    label: 'This is a label',
    checked: true,
    disabled: true,
};
CheckedDisabled.storyName = 'Checked and Disabled Checkbox';
CheckedDisabled.parameters = {
    docs: {
        storyDescription: 'Checkbox that is both checked and disabled.',
    },
};
