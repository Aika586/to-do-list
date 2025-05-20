
import { Box, Heading, Stack} from "@chakra-ui/react";
import SearchTodos from "./components/SearchTodos";
import SelectTodosStatus from "./components/SelectTodosStatus";
import { ColorModeButton } from "./components/ui/color-mode";
import ToDoList from "./components/ToDoList";
import AddToDos from "./components/AddToDos";
function App() {
  return (
    <>
      <Box
        maxW="750px"
        mx="auto"
        pt="40px"
        pb="20px"
        display={"flex"}
        flexDirection={"column"}
        gap="20px"
        minH={"dvh"}
        position={"relative"}
      >
        <Heading fontSize={"26px"} fontWeight={"medium"} textAlign={"center"}>
          TO DO LIST
        </Heading>
        <Stack direction={"row"} gap="16px">
          <SearchTodos />
          <SelectTodosStatus />
          <ColorModeButton />
        </Stack>
        <ToDoList />
        <Box position={"absolute"} bottom={"32px"} right={"8px"}>
          <AddToDos />
        </Box>
      </Box>
    </>
  );
}

export default App;
