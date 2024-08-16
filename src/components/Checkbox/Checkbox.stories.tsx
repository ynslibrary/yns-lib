import React, { useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Checkbox, { CheckboxProps } from './Checkbox';

export default {
    title: 'Components/Checkbox',
    component: Checkbox,
    argTypes: {
        label: { control: 'text' },
        checked: { control: 'boolean' },
        disabled: { control: 'boolean' },
        onChange: { action: 'changed' },
        textColor: { control: 'color' },
        fontSize: { control: 'number' },
        fontWeight: { control: 'number' },
    },
} as Meta<typeof Checkbox>;

const Template: StoryFn<CheckboxProps> = (args) => {
    const [checked, setChecked] = useState(args.checked || false);

    const handleChange = (newChecked: boolean) => {
        setChecked(newChecked);
        args.onChange(newChecked);
    };

    return <Checkbox {...args} checked={checked} onChange={handleChange} />;
};

export const Default = Template.bind({});
Default.args = {
    label: 'This is a label',
    checked: false,
};

export const Checked = Template.bind({});
Checked.args = {
    label: 'This is a label',
    checked: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
    label: 'This is a label',
    checked: false,
    disabled: true,
};

export const CheckedDisabled = Template.bind({});
CheckedDisabled.args = {
    label: 'This is a label',
    checked: true,
    disabled: true,
};
