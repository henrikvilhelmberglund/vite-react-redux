import { decrement, increment, reset } from "../redux/counterSlice";
import { useDispatch, useSelector } from "react-redux";

export default function Counter() {
  const dispatch = useDispatch();
  const count = useSelector((store) => store.counter.count);
  return (
    <div>
      <h2>{count}</h2>
      <button onClick={() => dispatch(increment(7))}>+</button>
      <button onClick={() => dispatch(increment(557))}>add 557</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
    </div>
  );
}
