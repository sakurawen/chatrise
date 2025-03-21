import { antfu } from "@antfu/eslint-config"

/** @type {Parameters<typeof antfu>[0]} */
export const options = {
  rules: {
    "style/semi": ["warn", "always"],
    'style/jsx-quotes': ['warn', 'prefer-single'],
  }
}

export default antfu(options)
