import { Accordion, Stack, Span, Box, Text,Image } from "@chakra-ui/react";
import { Checkbox } from "./ui/Checkbox";
import { VscTrash } from "react-icons/vsc";
import { IconButton } from "./ui/IconButton";
import { VscEdit } from "react-icons/vsc";
import { CiCalendar } from "react-icons/ci";
import { useTodoStore } from "../store/todoStore";
import { useDialog } from "../context/DialogContext";

const ToDoList = () => {
  const { todos, removeTodo, toggleTodo, filterStatus,searchQuery } = useTodoStore();
  const { setOpen, setSelectedTodo } = useDialog();
 const filteredTodos = todos.filter((todo) => {
  const matchesStatus =
    filterStatus[0] === "complete"
      ? todo.completed
      : filterStatus[0] === "incomplete"
      ? !todo.completed
      : true;

  const matchesSearch =
    todo.titleTodo.toLowerCase().includes(searchQuery.toLowerCase()) ||
    todo.description.toLowerCase().includes(searchQuery.toLowerCase());

  return matchesStatus && matchesSearch;
});
  console.log(todos);
  return (
    <Stack width="full" maxW="520px" mx="auto">
      {filteredTodos.length === 0 ? (
        <Stack alignItems={'center'} gap='20px' mt='20px'>
        <Image src='/empty.png' alt='empty-photo' h='174px' w='221px'/>
        <Text fontSize={'lg'} fontWeight={'medium'}>Empty...</Text>
        </Stack>
      ) : (
        <Accordion.Root collapsible size={"lg"}>
          {filteredTodos.map((todo) => (
            <Accordion.Item
              key={todo.id}
              value={todo.titleTodo}
              borderColor="blue.500"
            >
              <Accordion.ItemTrigger className="group" gap={"12px"}>
                <Span flex="2" onClick={(e) => e.stopPropagation()}>
                  {" "}
                  <Checkbox
                    isCompleted={todo.completed}
                    onChange={() => toggleTodo(todo.id)}
                  >
                    {todo.titleTodo}
                  </Checkbox>
                </Span>
                <IconButton
                  _hover={{ color: "blue.default" }}
                  onClick={() => {
                    setSelectedTodo(todo);
                    setOpen(true);
                  }}
                >
                  <VscEdit />
                </IconButton>
                <IconButton
                  _hover={{ color: "red.600" }}
                  onClick={() => removeTodo(todo.id)}
                >
                  <VscTrash />
                </IconButton>
                <Accordion.ItemIndicator
                  color="blue.default"
                  cursor={"pointer"}
                />
              </Accordion.ItemTrigger>
              <Accordion.ItemContent>
                <Accordion.ItemBody>
                  <Box px="1">
                    <Text
                      fontSize={"18px"}
                      textDecoration={todo.completed ? "line-through" : "none"}
                      opacity={todo.completed ? 0.5 : 1}
                    >
                      {todo.description}
                    </Text>
                    <Stack direction={"row"} mt="2">
                      <CiCalendar size={"22px"} color="blue" />{" "}
                      <Text
                        fontSize={"15px"}
                        color="grey"
                        fontWeight={"medium"}
                      >
                        {todo.dueDate}
                      </Text>
                    </Stack>
                  </Box>
                </Accordion.ItemBody>
              </Accordion.ItemContent>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      )}
    </Stack>
  );
};

export default ToDoList;
