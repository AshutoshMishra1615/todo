import { useState } from "react";
import Adder from "./Adder.jsx";

const TodoApp = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };
  const toggleComplete = (index) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo, i) =>
        i === index ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div className="flex flex-rows justify-between items-center mt-10 ml-10 mr-10">
      <Adder addTodo={addTodo} />
      <ul className="mt-6 space-y-4 w-80">
        {todos.map((todo, index) => (
          <li
            key={index}
            className="flex flex-col p-4 bg-white rounded-lg shadow-md"
          >
            <div className="flex justify-between items-center">
              <span className="text-gray-700 font-medium">{todo.title}</span>
              <span
                className={`px-3 py-1 text-sm rounded-md ${
                  todo.priority === "High"
                    ? "bg-red-100 text-red-600"
                    : todo.priority === "Medium"
                    ? "bg-yellow-100 text-yellow-600"
                    : "bg-green-100 text-green-600"
                }`}
              >
                {todo.priority}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-500 font-medium">
                {todo.description}
              </span>
            </div>
            <div className="flex justify-between items-center mt-2 text-sm text-gray-600">
              <span>Due: {todo.dueDate}</span>
              <span
                className={`text-xs ${
                  todo.completed ? "text-green-500" : "text-red-500"
                }`}
              >
                {todo.completed ? "Completed" : "Incomplete"}
              </span>
              <span>
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => toggleComplete(index)}
                  className="h-5 w-5 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                />
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
