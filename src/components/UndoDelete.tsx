import { useEffect, useState } from "react";
import { useTodoStore } from "../store/todoStore";
import UndoButton from "./ui/UndoButton";


const UndoDelete = () => {

  const{removedTodo,undoRemove}=useTodoStore()

  const [timer, setTimer] = useState<number|null>(null);
  const [countdown, setCountdown] = useState(5); 

  useEffect(() => {
    if (removedTodo) {
      setCountdown(5);
      const interval = setInterval(() => {
        setCountdown((c) => c - 1);
      }, 1000);

      const timeout = setTimeout(() => {
        useTodoStore.setState({ removedTodo: null });
      }, 5000);

      setTimer(timeout);

      return () => {
        clearTimeout(timeout);
        clearInterval(interval);
      };
    }
  }, [removedTodo]);

  const handleUndo = () => {
    undoRemove();
    if (timer) clearTimeout(timer);
  };

  if (!removedTodo) return null;

  return (
    <UndoButton onUndo={handleUndo} countdown={countdown}/>
  );
};

export default UndoDelete;

