import { antfu } from "@antfu/eslint-config"

/** @type {Parameters<typeof antfu>[0]} */
export const options = {
  rules: {
    "style/semi": ["warn", "always"],
    'style/jsx-quotes': ['warn', 'prefer-single'],
    "no-use-before-define": "off",
    "@typescript-eslint/no-use-before-define": "off"
  }
}

export default antfu(options)
