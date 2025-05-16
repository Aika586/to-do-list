import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react"
import { buttonRecipe } from "../theme/components/button.recipe"
const config = defineConfig({
  theme: {
    recipes: {
      button: buttonRecipe,
    },
    tokens: {

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
            value: { _light: "{colors.blue.DEFAULT}", _dark: "{colors.white}" }, 
          },
        },
        focusColor: {
          default: {
            value: { _light: "{colors.blue.400}", _dark: "{colors.white}" }, 
          },
        },
      },
    },
  },
})

export const system = createSystem(defaultConfig, config)
