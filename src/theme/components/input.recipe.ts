import { defineRecipe } from "@chakra-ui/react";

export const inputRecipe = defineRecipe({
  variants: {  
    variant: {
      outline: {
        borderWidth: "1px",
        borderColor: "border.default",
        color: "fg.inputText",
        _focusWithin: { borderColor: "blue.400", boxShadow: "0 0 5px blue" },
        fontSize: "md",
        _placeholder:{ color: "#C3C1E5",fontSize:'14px', },
        paddingLeft:'10px'
      },
    },
  },
});
