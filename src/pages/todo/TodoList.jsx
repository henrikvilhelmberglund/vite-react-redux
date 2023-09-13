import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, addTodo, toggleDarkMode } from "../../redux/todoSlice";

export default function TodoList() {
  const dispatch = useDispatch();
  const todos = useSelector((store) => store.todo.todos);
  return (
    <>
      <div className="bg-blue-200 dark:bg-blue-900 rounded-md p-2 dark:text-white flex gap-4 flex-col items-center">
        <button onClick={() => dispatch(toggleDarkMode())}>Toggle dark mode</button>

        <div>
          <label htmlFor="title">Title:</label>
          <input type="text" id="title" className="p-2" />
        </div>
        <div>
          <label htmlFor="description">Description: </label>
          <input type="text" id="description" className="p-2" />
        </div>
        <button
          onClick={() => {
            const title = document.querySelector("#title").value;
            const description = document.querySelector("#description").value;
            dispatch(addTodo({ title, description }));
          }}
        >
          Add new todo
        </button>
      </div>
      <ul className="">
        {todos.map(({ title, description }, i) => (
          <li
            className="rounded-md m-4 bg-blue-100 dark:bg-blue-600 dark:text-white p-4 mx-auto items-center flex flex-col w-[400px]"
            key={i}
          >
            <strong>{title}:</strong> {description}
            <button onClick={() => dispatch(deleteTodo(i))}>Delete todo</button>
          </li>
        ))}
      </ul>
    </>
  );
}
