import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo } from "../features/todoSlice";

function TodoItem({ todo }) {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <>
      <ul className="w-full flex flex-col justify-center items-center">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="w-1/2 bg-slate-600 flex  justify-between rounded-lg text-white py-6 px-8 m-2"
          >
            <div className="text-2xl font-mono flex  justify-center items-center">
              {todo.text}
            </div>
            <div>
              <button
                className=" text-2xl p-3 mx-4  rounded-md  bg-slate-900"
                onClick={(e) => {
                  const parent = e.target.parentNode;
                  parent.previousSibling.style.textDecoration = "line-through";
                  parent.previousSibling.style.opacity = "0.5";
                  console.log(parent.previousSibling);
                }}
              >
                ✔
              </button>
              <button
                className=" text-2xl p-3  rounded-md  bg-slate-900"
                onClick={() => {
                  dispatch(removeTodo(todo.id));
                }}
              >
                ✖
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default TodoItem;
