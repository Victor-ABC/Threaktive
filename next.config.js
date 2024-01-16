// @ts-ignore
// eslint-disable-next-line no-undef
const withNextra = require("nextra")({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
  latex: true,
})

// eslint-disable-next-line no-undef
module.exports = withNextra({
  i18n: {
    locales: ["de"],
    defaultLocale: "de",
  },
})
