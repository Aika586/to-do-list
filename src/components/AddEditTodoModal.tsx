import { Dialog, Portal } from "@chakra-ui/react";
import { useRef } from "react";
import AddEditForm from "./AddEditForm";
import { useDialog } from "../context/DialogContext";

const AddEditTodoModal = () => {
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
      <Portal>
        <Dialog.Backdrop backdropFilter="blur(2px)" />
        <Dialog.Positioner>
          <Dialog.Content
            borderRadius={"16px"}
            borderWidth="1px"
            _dark={{
              borderColor:'white'
            }}
          >
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

export default AddEditTodoModal;
