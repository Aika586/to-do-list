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
  removedTodo: Todo | null;
  removeTodo: (id:number) => void;
  undoRemove: () => void;
  filterStatus: string[];
  setFilterStatus: (status: string[]) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export const useTodoStore = create<TodoState>()(
  persist(
    (set,get) => ({
      todos: defaultTodos,
      removedTodo: null,
      filterStatus: ["all"],
      setFilterStatus: (status) => set(() => ({ filterStatus: status })),
      searchQuery: "",
      setSearchQuery: (query) => set(() => ({ searchQuery: query })),
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
     removeTodo: (id) => {
    const todos = get().todos;
    const deleted = todos.find((t) => t.id === id);
    set({
      todos: todos.filter((t) => t.id !== id),
      removedTodo: deleted ?? null,
    });
  },
    undoRemove: () => {
    const deleted = get().removedTodo;
    if (deleted) {
      set((state) => ({
        todos: [...state.todos, deleted],
        removedTodo: null,
      }));
    }
  },
    }),
    {
      name: "todo-storage",
    }
  )
);
