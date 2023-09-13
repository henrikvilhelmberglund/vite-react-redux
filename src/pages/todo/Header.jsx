import { useDispatch, useSelector } from "react-redux";
import { setName, toggleDarkMode } from "../../redux/todoSlice";

export default function Header() {
  const dispatch = useDispatch();
  const name = useSelector((store) => store.todo.name);
  return (
    <>
      <h2>{name} Todo-List</h2>
      <input type="text" onChange={(e) => dispatch(setName(e.target.value))} />
      <button onClick={() => dispatch(toggleDarkMode())}>Toggle dark mode</button>
    </>
  );
}
