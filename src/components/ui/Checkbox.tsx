import { Checkbox as ChakraCheckbox } from "@chakra-ui/react";
import * as React from "react";

export interface CheckboxProps extends ChakraCheckbox.RootProps {
  icon?: React.ReactNode;
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
  rootRef?: React.RefObject<HTMLLabelElement | null>;
}

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  function Checkbox(props,ref) {
    const { children,rootRef,inputProps, ...rest } = props;
    return (
      <ChakraCheckbox.Root {...rest} ref={rootRef} size="lg" colorPalette={"blue"}>
        <ChakraCheckbox.HiddenInput ref={ref} {...inputProps} />
        <ChakraCheckbox.Control borderColor={"blue.default"}>
          <ChakraCheckbox.Indicator />
        </ChakraCheckbox.Control>
        {children != null && (
          <ChakraCheckbox.Label fontSize={"20px"} fontWeight={"medium"}>
            {children}
          </ChakraCheckbox.Label>
        )}
      </ChakraCheckbox.Root>
    );
  }
);
