import type { Meta, StoryObj } from "@storybook/react";
import Typography from "./typography";

const meta: Meta = {
  title: "Typography",
  component: Typography,
};

export default meta;

type Story = StoryObj<typeof Typography>;

export const Regular: Story = {
  args: {
    children: "Regular",
    fontSize: "sm",
    fontWeight: "normal",
  },
};

export const Medium: Story = {
  args: {
    children: "Medium",
    fontSize: "md",
    fontWeight: "medium",
  },
};

export const Semibold: Story = {
  args: {
    children: "Semibold",
    fontSize: "xl",
    fontWeight: "semibold",
  },
};
