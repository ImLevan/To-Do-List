import React, { useState, ChangeEvent, KeyboardEvent } from "react";

interface Props {
  addTodo: (title: string) => void;
}

const TodoInput: React.FC<Props> = ({ addTodo }) => {
  const [title, setTitle] = useState<string>("");

  const handleAddTodo = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key.toLowerCase() === "enter") {
      addTodo(title);
      setTitle("");
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  return (
    <div className="mt-6 relative">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <span className="border border-gray-400 border-solid p-3 rounded-full"></span>
      </div>
      <input
        className="focus:shadow-lg font-Inter focus:shadow-pink-800 pl-12 w-full py-4 bg-gray-100 rounded-xl outline-none transition-all duration-300 ease-in-out"
        type="text"
        value={title}
        onChange={handleChange}
        onKeyDown={handleAddTodo}
        placeholder="Que tarea sigue..."
      />
    </div>
  );
};

export default TodoInput ;