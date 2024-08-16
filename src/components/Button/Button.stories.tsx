import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Button, { ButtonProps } from './Button';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    buttonType: {
      control: {
        type: 'select',
        options: ['primary', 'secondary', 'success'],
      },
    },
    onClick: { action: 'clicked' }, 
    backgroundColor: { control: 'color' },
    color: { control: 'color' }, 
    borderRadius: { control: { type: 'number' } },
    paddingY: { control: { type: 'number' } },
    paddingX: { control: { type: 'number' } }, 
    height: { control: { type: 'number' } }, 
  },
} as Meta<ButtonProps>;

const Template: StoryFn<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  buttonType: 'primary',
  children: 'Primary Button',
  height: 40, 
};

export const Secondary = Template.bind({});
Secondary.args = {
  buttonType: 'secondary',
  children: 'Secondary Button',
  height: 40,
};

export const Success = Template.bind({});
Success.args = {
  buttonType: 'success',
  children: 'Success Button',
  height: 40, 
};
