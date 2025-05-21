import { Button, Icon } from "@chakra-ui/react";
import { RiAddLargeLine } from "react-icons/ri";
import { useDialog } from "../context/DialogContext";

const OpenModalButton = () => {
  const { setOpen,setSelectedTodo } = useDialog();
  const handleOpenModal=()=>{
    setSelectedTodo(null)
     setOpen(true)
  }
  return (
    <Button
      variant="solid"
      size="sm"
      _expanded={{ bg: "blue.600" }}
      onClick={handleOpenModal}
    >
      {" "}
      <Icon as={RiAddLargeLine} boxSize="7" />
    </Button>
  );
};

export default OpenModalButton;
