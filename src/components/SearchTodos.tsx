import { Input, InputGroup, CloseButton} from "@chakra-ui/react";
import { LuSearch } from "react-icons/lu";
import { useRef} from "react";
import { useTodoStore } from "../store/todoStore";
import { useColorModeValue } from "./ui/color-mode";

const SearchTodos = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const searchIconColor = useColorModeValue("blue", "white");
  const { searchQuery, setSearchQuery } = useTodoStore();
  const endElement = searchQuery ? (
    <CloseButton
      size="lg"
      color="blue.default"
      onClick={() => {
        setSearchQuery("");
        inputRef.current?.focus();
      }}
      me="-4"
    />
  ) : undefined;
  return (
    <InputGroup
      flex="1"
      startElement={
        <LuSearch size={"21px"} color={searchIconColor} strokeWidth={"1.3px"}/>
      }
      endElement={endElement}
      maxW="595px"
    >
      <Input
        ref={inputRef}
        placeholder="Search note..."
        value={searchQuery}
        onChange={(e) => {
          setSearchQuery(e.currentTarget.value);
        }}
      />
    </InputGroup>
  );
};

export default SearchTodos;
