import { Text, Button, Icon, Input, Box } from "@chakra-ui/react";
import { RiAddLargeLine } from "react-icons/ri";
import SelectStatus from "./components/SelectStatus";
import { Checkbox } from "./components/Checkbox";
import ToDoList from "./components/ToDoList";
function App() {
  return (
    <>
     
      <Input
        variant={"outline"}
        mt={"28"}
        ml={"28"}
        placeholder="input"
        width="500px"
      />
      <Text color="fg.inputText" fontSize={"4xl"}>
        Hello
      </Text>
      <Button
        variant="solid"
        size="sm"
        boxShadow="0 4px 4px rgba(0, 0, 0, 0.25)"
      >
        <Icon as={RiAddLargeLine} boxSize="7" />
      </Button>
      <SelectStatus />
      <Checkbox size="lg" colorPalette={"blue"}>
        Checkbox
      </Checkbox>
      <ToDoList />
    </>
  );
}

export default App;
