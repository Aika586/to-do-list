import { Button, Dialog, Portal, Icon } from "@chakra-ui/react";
import { useRef } from "react";
import { RiAddLargeLine } from "react-icons/ri";
import AddEditForm from "./AddEditForm";
import { useDialog } from "../context/DialogContext";

const AddToDos = () => {
  const ref = useRef<HTMLInputElement>(null);
  const { open, setOpen } = useDialog();

  return (
    <Dialog.Root
      initialFocusEl={() => ref.current}
      motionPreset="slide-in-top"
      lazyMount
      open={open}
      onOpenChange={(e) => setOpen(e.open)}
    >
      <Dialog.Trigger asChild>
        <Button variant="solid" size="sm" _expanded={{ bg: "blue.600" }}>
          {" "}
          <Icon as={RiAddLargeLine} boxSize="7" />
        </Button>
      </Dialog.Trigger>
      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content borderRadius={"16px"}>
            <Dialog.Header>
              <Dialog.Title fontSize={"24px"} mx={"auto"}>
                NEW NOTE
              </Dialog.Title>
            </Dialog.Header>
            <Dialog.Body pb="4">
              <AddEditForm ref={ref} />
            </Dialog.Body>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  );
};

export default AddToDos;
