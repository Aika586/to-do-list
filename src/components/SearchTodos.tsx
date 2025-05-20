import { Input, InputGroup } from "@chakra-ui/react";
import { LuSearch } from "react-icons/lu";

const SearchTodos = () => {
  return (
    <InputGroup
      flex="1"
      endElement={
        <LuSearch size={"21px"} color="blue" strokeWidth={"1.3px"} />
      }
      maxW='595px'
      
    >
      <Input placeholder="Search note..."  />
    </InputGroup>
  );
};

export default SearchTodos;
