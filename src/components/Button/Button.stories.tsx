import React from "react";
import { StoryFn, Meta } from "@storybook/react/types-6-0";
import Button, { ButtonProps } from "./Button";

export default {
  title: "ReactComponentLibrary/Button",
  component: Button,
} as Meta;

const Template: StoryFn<ButtonProps> = (args: React.JSX.IntrinsicAttributes & ButtonProps) => <Button {...args} />;

export const HelloWorld = Template.bind({});
HelloWorld.args = {
  children: "Hello world!",
};

export const ClickMe = Template.bind({});
ClickMe.args = {
  children: "Click me!",
};
