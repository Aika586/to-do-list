import React from 'react'
import { createContext, useContext, useState} from "react";
import type { Todo } from "../store/todoStore";

interface DialogContextType {
  open: boolean;
  setOpen: (open: boolean) => void;
  selectedTodo: Todo | null;
  setSelectedTodo: (todo: Todo | null) => void;
  
}

const DialogContext = createContext<DialogContextType | undefined>(undefined);

export const DialogProvider = ({ children }: { children: React.ReactNode }) => {
  const [open, setOpen] = useState(false);
  const [selectedTodo, setSelectedTodo] = useState<Todo | null>(null);

  return (
    <DialogContext.Provider value={{ open, setOpen, selectedTodo, setSelectedTodo }}>
      {children}
    </DialogContext.Provider>
  );
};

export const useDialog = () => {
  const context = useContext(DialogContext);
  if (!context) {
    throw new Error("useDialog must be used within a DialogProvider");
  }
  return context;
};
