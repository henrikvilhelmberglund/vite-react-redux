import { useDispatch, useSelector } from "react-redux";
import { setName, toggleDarkMode } from "../../redux/todoSlice";

export default function Header() {
  const dispatch = useDispatch();
  const name = useSelector((store) => store.todo.name);
  return (
    <>
      {name ? <h2>{name}'s Todo-List</h2> : null}
      <div className="flex flex-col items-center m-4">
        <label htmlFor="name">Enter your name</label>
        <input
          className="p-2"
          type="text"
          id="name"
          onChange={(e) => dispatch(setName(e.target.value))}
        />
      </div>
      <button onClick={() => dispatch(toggleDarkMode())}>Toggle dark mode</button>
    </>
  );
}
