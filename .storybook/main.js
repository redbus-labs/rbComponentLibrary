module.exports = {
    "stories": [
        "../src/packages/**/*.stories.mdx",
        "../src/packages/**/*.stories.@(js|jsx|ts|tsx)"
      ],
      "addons": [
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "@storybook/preset-create-react-app"
      ]
};