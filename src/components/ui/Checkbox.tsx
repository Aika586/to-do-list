import { Checkbox as ChakraCheckbox } from "@chakra-ui/react";
import * as React from "react";

export interface CheckboxProps extends ChakraCheckbox.RootProps {
  icon?: React.ReactNode;
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
  rootRef?: React.RefObject<HTMLLabelElement | null>;
 
}

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  function Checkbox(props) {
    const { children, ...rest } = props;
    return (
      <ChakraCheckbox.Root {...rest} size='lg' colorPalette={'blue'}>
         <ChakraCheckbox.HiddenInput/>
        <ChakraCheckbox.Control borderColor={'blue.default'} >
          <ChakraCheckbox.Indicator />
        </ChakraCheckbox.Control>
        {children != null && (
          <ChakraCheckbox.Label >{children}</ChakraCheckbox.Label>
        )}
      </ChakraCheckbox.Root>
    );
  }
);
