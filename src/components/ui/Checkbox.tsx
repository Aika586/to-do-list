import { Checkbox as ChakraCheckbox } from "@chakra-ui/react";
import * as React from "react";
import { useColorModeValue } from "./color-mode";

export interface CheckboxProps extends ChakraCheckbox.RootProps {
  icon?: React.ReactNode;
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
  rootRef?: React.RefObject<HTMLLabelElement | null>;
  isCompleted?: boolean;
  onChange?: () => void;
}

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  function Checkbox(props, ref) {
    const { children, rootRef, inputProps, ...rest } = props;
    const indicatorColor = useColorModeValue("white", "white");
    return (
      <ChakraCheckbox.Root
        {...rest}
        ref={rootRef}
        size="lg"
        checked={props.isCompleted}
        onCheckedChange={props.onChange}
      >
        <ChakraCheckbox.HiddenInput ref={ref} {...inputProps} />
        <ChakraCheckbox.Control
          borderColor={"blue.default"}
          bg={props.isCompleted ? "blue.default" : "none"}
          cursor="pointer"
        >
          <ChakraCheckbox.Indicator color={indicatorColor}/>
        </ChakraCheckbox.Control>
        {children != null && (
          <ChakraCheckbox.Label
            fontSize={"20px"}
            fontWeight={"medium"}
            textDecoration={props.isCompleted ? "line-through" : "none"}
            opacity={props.isCompleted ? 0.5 : 1}
          >
            {children}
          </ChakraCheckbox.Label>
        )}
      </ChakraCheckbox.Root>
    );
  }
);
