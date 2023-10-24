import { Buttons } from ".";

export default {
  title: "Components/Buttons",
  component: Buttons,
  argTypes: {
    property1: {
      options: ["outlined-hover", "solid-large-blue", "outline", "hover"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "outlined-hover",
    className: {},
    buttonsSolidLargeText: "Start Free",
  },
};
