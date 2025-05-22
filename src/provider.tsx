import { ChakraProvider } from "@chakra-ui/react";
import { system } from "./theme/theme";
import { ColorModeProvider } from "./components/ui/color-mode";

export function Provider({ children }: { children: React.ReactNode }) {
  return (
    <ChakraProvider value={system}>
      <ColorModeProvider>{children}</ColorModeProvider>
    </ChakraProvider>
  );
}
