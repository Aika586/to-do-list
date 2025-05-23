import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react"
import { buttonRecipe } from "../theme/components/button.recipe"
import { inputRecipe } from "./components/input.recipe"
const config = defineConfig({
  theme: {
    recipes: {
      button: buttonRecipe,
      input:inputRecipe,
    },
    tokens: {
 fonts: {
        heading: { value: "Inter" },
      },
      colors: {
        blue: {
          default: { value: "#6C63FF" },
          600: { value: "#534CC2" },
        },
      },
    },
    semanticTokens: {
      colors: {
        bg: {
          default: {
            value: { _light: "{colors.white}", _dark: "#252525" }, 
          },
        },
        fg: {
          default: {
            value: { _light: "#252525", _dark: "{colors.white}" }, 
          },
          inputText: {
            value: { _light: "{colors.blue.default}", _dark: "{colors.white}" }, 
          },
        },
        border: {
          default: {
            value: { _light: "{colors.blue.default}", _dark: "{colors.white}" }, 
          },
        },
      },
    },
  },
})

export const system = createSystem(defaultConfig, config)
