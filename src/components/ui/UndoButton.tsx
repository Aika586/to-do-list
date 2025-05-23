import { Button } from "@chakra-ui/react";
import { ProgressCircle } from "./ProgressCircle";
import { BsArrow90DegLeft } from "react-icons/bs";

const UndoButton = ({
  countdown,
  onUndo,
  duration = 5, // seconds
}: {
  countdown: number;
  onUndo: () => void;
  duration?: number;
}) => {
  const progress = (countdown / duration) * 100;

  return (
    <Button
      variant={"solid"}
      size="md"
      bg="blue.600"
      _hover={{
        bg: "blue.default",
      }}
      borderWidth="2px"
      borderColor="blue.default"
      w="123px"
      onClick={onUndo}
      fontSize={"md"}
      fontWeight="normal"
      p="1"
      animation= "fade-in 300ms ease-out"
    >
      <ProgressCircle
        value={progress}
        size={"sm"}
        showValueText={true}
        valueText={countdown}
      />{" "}
      UNDO <BsArrow90DegLeft />
    </Button>
  );
};
export default UndoButton;
