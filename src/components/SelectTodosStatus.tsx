import {
  Select,
  createListCollection,
  Portal,
  Box,
  // Text,
} from "@chakra-ui/react";
import { useState } from "react";

const statusList = createListCollection({
  items: [
    { label: "All", value: "all" },
    { label: "Complete", value: "complete" },
    { label: "Incomplete", value: "incomplete" },
  ],
});

const SelectTodosStatus = () => {
  const [selected, setSelected] = useState<string[]>(["all"]);

  // const currentStatus = selected[0];
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Box width="168px">
      <Select.Root
        collection={statusList}
        value={selected}
        onValueChange={(e) => setSelected(e.value)}
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
              fontSize={"md"}
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
            <Select.Content>
              {statusList.items.map((item) => (
                <Select.Item
                  key={item.value}
                  item={item}
                  _hover={{ bg: "blue.50" }}
                  _highlighted={{ bg: "gray.200" }}
                  _selected={{ bg: "blue.100", fontWeight: "bold" }}
                >
                  {item.label.toUpperCase()}
                </Select.Item>
              ))}
            </Select.Content>
          </Select.Positioner>
        </Portal>
      </Select.Root>

      {/* Update UI based on selection */}
      {/* <Box mt={4} p={4} borderRadius="md">
        <Text fontWeight="bold">
          Current status:{" "}
          {statusList.items.find((i) => i.value === currentStatus)?.label}
        </Text>
      </Box> */}
    </Box>
  );
};

export default SelectTodosStatus;
