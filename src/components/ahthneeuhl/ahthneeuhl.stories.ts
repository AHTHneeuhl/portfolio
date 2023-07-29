import type { Meta, StoryObj } from "@storybook/react";

import AHTHneeuhl from "./ahthneeuhl";

const meta: Meta = {
  title: "AHTHneeuhl",
  component: AHTHneeuhl,
};

export default meta;

type Story = StoryObj<typeof AHTHneeuhl>;

export const Default: Story = {
  args: {
    children: "AHTHneeuhl",
  },
};
