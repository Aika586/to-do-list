import React from "react";
import { Button, Input, Stack, Textarea, Field } from "@chakra-ui/react";
import { useDialog } from "../context/DialogContext";
import { useForm } from "react-hook-form";
import { useTodoStore } from "../store/todoStore";
interface FormValues {
  titleTodo: string;
  description: string;
  dueDate: string;
}

const AddEditForm = ({
  ref,
}: {
  ref: React.RefObject<HTMLInputElement | null>;
}) => {
  const { addTodo, editTodo } = useTodoStore();
  const { selectedTodo, setOpen, setSelectedTodo } = useDialog();
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

  React.useEffect(() => {
    if (selectedTodo) {
      reset({
        titleTodo: selectedTodo.titleTodo,
        description: selectedTodo.description,
        dueDate: selectedTodo.dueDate,
      });
    } else {
      reset();
    }
  }, [selectedTodo, reset]);

  const onSubmit = handleSubmit((data) => {
    if (selectedTodo) {
      editTodo(selectedTodo.id, data);
    } else {
      addTodo(data);
    }
    setOpen(false);
    setSelectedTodo(null);
    reset();
  });

  const handelCancel = () => {
    setSelectedTodo(null);
    setOpen(false);
  };
  return (
    <form onSubmit={onSubmit}>
      <Stack gap="4" padding="3">
        <Field.Root invalid={!!errors.titleTodo}>
          <Input
            placeholder="Input your note..."
            {...register("titleTodo", {
              required: "Title of note is required",
            })}
            ref={(e) => {
              register("titleTodo").ref(e);
              ref.current = e;
            }}
          />
          <Field.ErrorText>{errors.titleTodo?.message}</Field.ErrorText>
        </Field.Root>
        <Field.Root invalid={!!errors.description}>
          <Textarea
            placeholder="Start typing your task description..."
            size="md"
            resize={"none"}
            height="100px"
            fontFamily={'heading'}
            borderColor={errors.description ? "red.500" : "border.default"}
            _placeholder={{ color: "#C3C1E5", fontSize: "16px",fontFamily:'heading' }}
            _focusWithin={{
              borderColor: "blue.400",
              boxShadow: "0 0 5px blue",
              color: "fg.inputText",
            }}
            _dark={{
              _focusWithin: {
                borderColor: "white",
                boxShadow: "0 0 8px white",
              },
              _placeholder:{
                color:"#666666"
              }
            }}
            {...register("description", {
              required: "Description of note is required",
            })}
          />
          <Field.ErrorText>{errors.description?.message}</Field.ErrorText>
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
        <Stack direction="row" justifyContent={"space-between"}>
          {" "}
          <Button variant="outline" onClick={handelCancel}>
            CANCEL
          </Button>
          <Button type="submit"> {selectedTodo ? "UPDATE" : "APPLY"}</Button>
        </Stack>
      </Stack>
    </form>
  );
};

export default AddEditForm;
