// This file has been automatically migrated to valid ESM format by Storybook.
import { createRequire } from "node:module";
import type { StorybookConfig } from "@storybook/nextjs";

const require = createRequire(import.meta.url);

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],

  addons: ["@storybook/addon-links", "@storybook/addon-onboarding", {
    name: "@storybook/addon-styling",
    options: {
      postCss: {
        implementation: require.resolve("postcss"),
      },
    },
  }, "@storybook/addon-docs"],

  framework: {
    name: "@storybook/nextjs",
    options: {},
  }
};

export default config;
