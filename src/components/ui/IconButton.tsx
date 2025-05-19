
import  React from 'react'
import { Icon} from "@chakra-ui/react";
import type { IconProps } from "@chakra-ui/react";


interface ActionIconProps extends IconProps {
  children:React. ReactNode;
}

export const IconButton = ({ children, ...props }: ActionIconProps) => {
  return (
    <Icon
      color="#CDCDCD"
      _hover={props._hover}
      _groupHover={{ opacity: 1 }}
      transition="opacity 0.2s"
      opacity={0}
      cursor="pointer"
      onClick={(e) => e.stopPropagation()}
      {...props}
    >
      {children}
    </Icon>
  );
};
