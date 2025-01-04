import { useState } from "react";

const Adder = ({ addTodo }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [priority, setPriority] = useState("Medium");
  const [checklist, setChecklist] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !dueDate) {
      alert("Please fill out the task name and date!");
      return;
    }
    addTodo({
      title,
      description,
      priority,

      dueDate,
      completed: checklist,
    });

    // Reset form fields
    setDescription("");
    setTitle("");
    setPriority("Medium");
    setDueDate("");
    setChecklist(false);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 bg-gray-100 p-6 rounded-lg shadow-md w-80"
      >
        <h2 className="text-xl font-bold text-gray-700">Add a New Task</h2>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Task
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter your task"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            description
          </label>
          <textarea
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter your task description"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Date
          </label>
          <input
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Priority
          </label>
          <select
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
          >
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white font-medium py-2 px-4 rounded-md hover:bg-indigo-700 transition duration-300"
        >
          Add Task
        </button>
      </form>
    </>
  );
};
export default Adder;
