import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import Button, { ButtonProps } from "./Button";

// Define the title and component for Storybook
export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    buttonType: {
      control: {
        type: "select",
        options: ["primary", "secondary", "success"],
      },
    },
    onClick: { action: "clicked" }, // Action handler for onClick event
    backgroundColor: { control: "color" }, // Control for backgroundColor
    color: { control: "color" }, // Control for text color
    borderRadius: { control: { type: "number" } }, // Control for border radius
    paddingY: { control: { type: "number" } }, // Control for paddingY
    paddingX: { control: { type: "number" } }, // Control for paddingX
    height: { control: { type: "number" } }, // Control for height
  },
} as Meta<ButtonProps>;

// Define a Template for Button stories
const Template: StoryFn<ButtonProps> = (args: ButtonProps) => <Button {...args} />;

// Primary Button story
export const Primary = Template.bind({});
Primary.args = {
  buttonType: "primary",
  children: "Primary Button",
  height: 40, // Example height for primary button
};

// Secondary Button story
export const Secondary = Template.bind({});
Secondary.args = {
  buttonType: "secondary",
  children: "Secondary Button",
  height: 40, // Example height for secondary button
};

// Success Button story
export const Success = Template.bind({});
Success.args = {
  buttonType: "success",
  children: "Success Button",
  height: 40, // Example height for success button
};
