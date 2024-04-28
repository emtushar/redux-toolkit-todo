import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todoSlice";
function TodoForm() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo(input));
    setInput("");
  };
  return (
    <form
      onSubmit={handleSubmit}
      className=" w-full p-10 gap-1  flex  justify-center items-center"
    >
      <input
        className="text-lg w-96 rounded-sm px-6  py-3"
        type="text"
        name=""
        id=""
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
        placeholder="Enter any Task..."
      />
      <button className="text-lg rounded-sm p-3 bg-amber-500">Submit</button>
    </form>
  );
}

export default TodoForm;
