

import {
  Button,
  Dialog,
  Field,
  Input,
  Portal,
  Stack,
  Textarea,
} from "@chakra-ui/react";
import { useRef } from "react";

const AddToDos = () => {
  const ref = useRef<HTMLInputElement>(null);
  return (
    <Dialog.Root initialFocusEl={() => ref.current} motionPreset="slide-in-top">
      <Dialog.Trigger asChild>
        <Button variant="outline">Open</Button>
      </Dialog.Trigger>
      <Portal>
        <Dialog.Backdrop/>
        <Dialog.Positioner>
          <Dialog.Content borderRadius={'16px'}>
            <Dialog.Header>
              <Dialog.Title fontSize={"24px"} mx={"auto"}>
                NEW NOTE
              </Dialog.Title>
            </Dialog.Header>
            <Dialog.Body pb="4">
              <Stack gap="4" padding='3'>
                <Field.Root>
                  <Input ref={ref} placeholder="Input your note..." />
                </Field.Root>
                <Field.Root>
                  <Textarea
                    placeholder="Start typing your task description..."
                    size="md"
                    resize={"none"}
                    height="100px"
                    borderColor={'blue.default'}
                    _placeholder={{color: "#C3C1E5",fontSize:'16px'}}
                    _focusWithin={{ borderColor: "blue.400", boxShadow: "0 0 5px blue" }}
                  />
                  <Field.ErrorText>Field is required</Field.ErrorText>
                </Field.Root>
                <Field.Root>
                  <Field.Label color='#C3C1E5'>Due date</Field.Label>
                  <Input type="date" />
                  <Field.ErrorText>Field is required</Field.ErrorText>
                </Field.Root>
              </Stack>
            </Dialog.Body>
            <Dialog.Footer justifyContent={'space-between'} marginX={'3'}>
              <Dialog.ActionTrigger asChild>
                <Button variant="outline">CANCEL</Button>
              </Dialog.ActionTrigger>
              <Button>APPLY</Button>
            </Dialog.Footer>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  );
};

export default AddToDos;
