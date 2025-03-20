import { antfu } from "@antfu/eslint-config"

export default antfu({
  rules: {
    "style/semi": ["warn", "always"],
    'style/jsx-quotes': ['warn', 'prefer-single'],
  }
})
