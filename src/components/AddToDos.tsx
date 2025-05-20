import {
  Button,
  Dialog,
  Field,
  Input,
  Portal,
  Stack,
  Textarea,
  Icon,
} from "@chakra-ui/react";
import { useRef } from "react";
import { RiAddLargeLine } from "react-icons/ri";
import { useForm } from "react-hook-form";
import { useTodoStore } from "../store/todoStore";

interface FormValues {
  titleTodo: string;
  description: string;
  dueDate: string;
}
const AddToDos = () => {
  const ref = useRef<HTMLInputElement>(null);
  const { addTodo,todos } = useTodoStore();
  console.log(todos)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      titleTodo: "",
      description: "",
      dueDate: "",
    },
  });

  const onSubmit = handleSubmit((data) => {
    console.log(data)
    addTodo(data);
    reset();
  });
  return (
    <Dialog.Root initialFocusEl={() => ref.current} motionPreset="slide-in-top">
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
            <form onSubmit={onSubmit}>
              <Dialog.Header>
                <Dialog.Title fontSize={"24px"} mx={"auto"}>
                  NEW NOTE
                </Dialog.Title>
              </Dialog.Header>
              <Dialog.Body pb="4">
                <Stack gap="4" padding="3">
                  <Field.Root invalid={!!errors.titleTodo}>
                    <Input
                      placeholder="Input your note..."
                      {...register("titleTodo", {
                        required: "Title of note is required",
                      })}
                      ref={(e) => {
                        register("titleTodo").ref(e); // react-hook-form ref
                        ref.current = e; // your own ref
                      }}
                    />
                    <Field.ErrorText>
                      {errors.titleTodo?.message}
                    </Field.ErrorText>
                  </Field.Root>
                  <Field.Root invalid={!!errors.description}>
                    <Textarea
                      placeholder="Start typing your task description..."
                      size="md"
                      resize={"none"}
                      height="100px"
                      borderColor={
                        errors.description ? "red.500" : "blue.default"
                      }
                      _placeholder={{ color: "#C3C1E5", fontSize: "16px" }}
                      _focusWithin={{
                        borderColor: "blue.400",
                        boxShadow: "0 0 5px blue",
                      }}
                      {...register("description", {
                        required: "Description of note is required",
                      })}
                    />
                    <Field.ErrorText>
                      {errors.description?.message}
                    </Field.ErrorText>
                  </Field.Root>
                  <Field.Root invalid={!!errors.dueDate}>
                    <Field.Label color="#C3C1E5">Due date</Field.Label>
                    <Input
                      type="date"
                      {...register("dueDate", {
                        required: "Due date of note is required",
                      })}
                    />
                    <Field.ErrorText>{errors.dueDate?.message}</Field.ErrorText>
                  </Field.Root>
                </Stack>
              </Dialog.Body>
              <Dialog.Footer justifyContent={"space-between"} marginX={"3"}>
                <Dialog.ActionTrigger asChild>
                  <Button variant="outline">CANCEL</Button>
                </Dialog.ActionTrigger>
                <Button type="submit">APPLY</Button>
              </Dialog.Footer>
            </form>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  );
};

export default AddToDos;
