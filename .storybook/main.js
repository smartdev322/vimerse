const path = require('path');

module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    '@storybook/addon-knobs',
    '@storybook/addon-actions',
    '@storybook/preset-create-react-app',
    '@storybook/addon-controls',
  ]
}