import { Box, Heading, Stack } from "@chakra-ui/react";
import SearchTodos from "./components/SearchTodos";
import SelectTodosStatus from "./components/SelectTodosStatus";
import { ColorModeButton } from "./components/ui/color-mode";
import ToDoList from "./components/ToDoList";
import AddEditTodoModal from "./components/AddEditTodoModal";
import { DialogProvider } from "./context/DialogContext";
import OpenModalButton from "./components/OpenModalButton";
import UndoDelete from "./components/UndoDelete";
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
        <DialogProvider>
          <ToDoList />
          <Box position={"absolute"} bottom={"32px"} right={"8px"}>
            <OpenModalButton />
          </Box>
          <Box position={"absolute"} bottom={"32px"} left={"8px"}>
            <UndoDelete />
          </Box>
          <AddEditTodoModal />
        </DialogProvider>
      </Box>
    </>
  );
}

export default App;
