import { defineRecipe } from "@chakra-ui/react";

export const inputRecipe = defineRecipe({
  base: {
 borderWidth:'1px',
 borderColor:'border.default',
 color:'fg.inputText',
 
  },

  variants: {
    size: {
      md: {
        fontSize: "18px",
        w: "100px",
        fontWeight: "medium",
      },
      sm: {
        w: "50px",
        h: "50px",
        borderRadius: "full",
        _hover: {
          borderWidth: "2px",
          borderColor: "blue.default",
        },
      },
    },
    variant: {
      solid: {
        bg: "blue.default",
        color: "white",
        _hover: {
          bg: "blue.600",
        },
      },

      outline: {
        borderWidth: "1px",
        borderColor: "blue.default",
        bg: "white",
        _hover: {
          bg: "blue.default",
          color: "white",
        },
        color: "blue.default",
      },
    },
  },
});

