import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";

function App() {
  return (
    <>
      <h1 className="text-3xl text-center my-5 text-white">
        Todo App using Redux Toolkit
      </h1>
      <TodoForm />
      <TodoItem />
    </>
  );
}

export default App;
