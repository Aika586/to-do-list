import {
  Select,
  createListCollection,
  Portal,
  Box,
  // Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { useTodoStore } from "../store/todoStore"

const statusList = createListCollection({
  items: [
    { label: "All", value: "all" },
    { label: "Complete", value: "complete" },
    { label: "Incomplete", value: "incomplete" },
  ],
});

const SelectTodosStatus = () => {
const { filterStatus, setFilterStatus } = useTodoStore();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Box width="168px">
      <Select.Root
        collection={statusList}
        value={filterStatus}
        onValueChange={(e) => setFilterStatus(e.value)}
        onOpenChange={(details) => setIsOpen(details.open)}
        open={isOpen}
        color="white"
      >
        <Select.HiddenSelect />
        <Select.Control>
          <Select.Trigger
            cursor={"pointer"}
            border="none"
            bg={isOpen ? "blue.600" : "blue.default"}
            _hover={
              !isOpen
                ? {
                    boxShadow: "0 0 4px 0 #6C63FF",
                  }
                : {}
            }
            boxShadow={isOpen ? "inset 0 0 0 3px #6C63FF" : "none "}
            borderRadius={"5px"}
          >
            <Select.ValueText
              textTransform="uppercase"
              fontWeight={"medium"}
              fontSize={"18px"}
            />
          </Select.Trigger>
          <Select.IndicatorGroup>
            <Select.Indicator
              color={"white"}
              transform={` rotate(${isOpen ? "180deg" : "0deg"})`}
            />
          </Select.IndicatorGroup>
        </Select.Control>

        <Portal>
          <Select.Positioner>
            <Select.Content className="light" borderColor='blue.default' borderWidth='1px'>
              {statusList.items.map((item) => (
                <Select.Item
                  key={item.value}
                  item={item}
                  _hover={{ bg: "blue.50" }}
                  _highlighted={{ bg: "gray.200" }}
                  _selected={{ bg: "blue.100"}}
                  cursor='pointer'
                  fontSize={'16px'}
                  color='blue.default'
                >
                  {item.label}
                </Select.Item>
              ))}
            </Select.Content>
          </Select.Positioner>
        </Portal>
      </Select.Root>
    </Box>
  );
};

export default SelectTodosStatus;
