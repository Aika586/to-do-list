import { defineRecipe } from "@chakra-ui/react";

export const inputRecipe = defineRecipe({
  variants: {
    variant: {
      outline: {
        borderWidth: "1px",
        borderColor: "border.default",
        color: "fg.inputText",
        fontFamily: "heading",
        fontWeight: "medium",
        _focusWithin: {
          borderColor: "blue.default",
          boxShadow: "0 0 0 3px rgb(182, 178, 254, 0.85)",
        },
        fontSize: "md",
        _placeholder: {
          color: "#C3C1E5",
          fontSize: "16px",
          fontFamily: "heading",
          fontWeight: "medium",
        },
        paddingLeft: "10px",
        _dark: {
          _focusWithin: {
            borderColor: "white",
            boxShadow: "0 0 8px white",
          },
          _placeholder: {
            color: "#666666",
          },
        },
      },
    },
  },
});
