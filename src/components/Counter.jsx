import { increment } from "../redux/counterSlice";
import { useDispatch, useSelector } from "react-redux";

export default function Counter() {
  const dispatch = useDispatch();
  const count = useSelector((store) => store.counter.count);
  return (
    <div>
      <h2>{count}</h2>
      <button onClick={() => dispatch(increment())}>+</button>
    </div>
  );
}
