import { defineRecipe } from "@chakra-ui/react";

export const buttonRecipe = defineRecipe({
  base: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
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
