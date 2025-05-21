import { create } from "zustand";
import { persist } from "zustand/middleware";
import { defaultTodos } from "../constants/defaultTodos";

export interface Todo {
  id: number;
  titleTodo: string;
  description: string;
  completed: boolean;
  dueDate: string;
}

interface TodoState {
  todos: Todo[];
  addTodo: (todo: Omit<Todo, "id" | "completed">) => void;
  editTodo: (id: number, updatedTodo: Partial<Omit<Todo, "id">>) => void;
  toggleTodo: (id: number) => void;
  removeTodo: (id: number) => void;
}

export const useTodoStore = create<TodoState>()(
  persist(
    (set) => ({
      todos: defaultTodos,
      addTodo: ({ titleTodo, description, dueDate }) =>
        set((state) => ({
          todos: [
            ...state.todos,
            {
              id: Date.now(),
              titleTodo,
              description,
              dueDate,
              completed: false,
            },
          ],
        })),
      editTodo: (id, updatedTodo) =>
        set((state) => ({
          todos: state.todos.map((todo) =>
            todo.id === id ? { ...todo, ...updatedTodo } : todo
          ),
        })),
      toggleTodo: (id) =>
        set((state) => ({
          todos: state.todos.map((todo) =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
          ),
        })),
      removeTodo: (id) =>
        set((state) => ({
          todos: state.todos.filter((todo) => todo.id !== id),
        })),
    }),
    {
      name: "todo-storage",
    }
  )
);
