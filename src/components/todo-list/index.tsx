import React from "react";
import { TodoContainer } from "./index.styles";
import { useTodo } from "@/hooks/useTodo";
import TodoCard from "@/components/design-components/todo-card";

export const TodoList: React.FC = () => {
  const [todos, setTodos] = useTodo();

  const handleAddTodo = () => {
    setTodos((prevTodos) => [{ id: Date.now(), text: "" }, ...prevTodos]);
  };

  const handleDeleteTodo = (id: number) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  };

  const handleTextChange = (id: number, newText: string) => {
    setTodos((todos) =>
      todos.map((todo) => (todo.id === id ? { ...todo, text: newText } : todo))
    );
  };

  return (
    <TodoContainer>
      <h1>Todo List</h1>
      <i className="fa fa-plus" onClick={handleAddTodo}></i>
      {todos.map((todo) => (
        <TodoCard
          key={todo.id}
          onDelete={() => handleDeleteTodo(todo.id)}
          onChange={(newText: string) => handleTextChange(todo.id, newText)}
          initialText={todo.text}
        />
      ))}
    </TodoContainer>
  );
};

export default TodoList;
