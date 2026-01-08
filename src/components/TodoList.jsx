import { useEffect, useState } from "react";
import { fetchTodos } from "../services/api";
import "./TodoList.css";

export default function TodoList() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");

  useEffect(() => {
    fetchTodos().then(setTodos);
  }, []);

  const addTodo = () => {
    if (!text.trim()) return;

    setTodos([
      ...todos,
      { id: Date.now(), title: text, completed: false },
    ]);
    setText("");
  };

  return (
    <div className="card todo-card">
      <div className="todo-header">
        <div>
          <h3>Todo List</h3>
          <span>Pending tasks</span>
        </div>
        <button className="add-btn">+</button>
      </div>

      <div className="todo-items">
        {todos.map(todo => (
          <label key={todo.id} className="todo-item">
            <input type="checkbox" />
            <span>{todo.title}</span>
          </label>
        ))}
      </div>

      <div className="todo-input">
        <input
          placeholder="Add new task..."
          value={text}
          onChange={e => setText(e.target.value)}
          onKeyDown={e => e.key === "Enter" && addTodo()}
        />
        <button onClick={addTodo}>➤</button>
      </div>
    </div>
  );
}
