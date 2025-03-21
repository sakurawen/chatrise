import antfu from "@antfu/eslint-config"
import { options } from "./base.js"

export default antfu({
  ...options,
  react: true
})
