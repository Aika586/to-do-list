import { Accordion, Stack, Span } from "@chakra-ui/react";
import { LuChartBarStacked, LuTags } from "react-icons/lu";
import { Checkbox } from "./ui/Checkbox";
import { VscTrash } from "react-icons/vsc";
import { IconButton } from "./ui/IconButton";
import { VscEdit } from "react-icons/vsc";

const ToDoList = () => {
  return (
    <Stack width="full" maxW="400px">
      <Accordion.Root collapsible>
        {items.map((item) => (
          <Accordion.Item key={item.value} value={item.value}>
            <Accordion.ItemTrigger className="group" gap={'12px'}>
              <Span flex="2" onClick={(e) => e.stopPropagation()}>
                {" "}
                <Checkbox>{item.title}</Checkbox>
              </Span>
              <IconButton _hover={{color:'blue.default'}}><VscEdit/></IconButton>
              <IconButton _hover={{ color: "red.600" }}><VscTrash/></IconButton>
              <Accordion.ItemIndicator color='blue.default' cursor={'pointer'} />
            </Accordion.ItemTrigger >
            <Accordion.ItemContent>
              <Accordion.ItemBody>{item.content}</Accordion.ItemBody>
            </Accordion.ItemContent>
          </Accordion.Item>
        ))}
      </Accordion.Root>
    </Stack>
  );
};

export default ToDoList;

const items = [
  {
    value: "info",
    icon: <LuTags />,
    title: "Product Info",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec odio vel dui euismod fermentum.",
  },
  {
    value: "stats",
    icon: <LuChartBarStacked />,
    title: "Stats",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec odio vel dui euismod fermentum.",
  },
];
