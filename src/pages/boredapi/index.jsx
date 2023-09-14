import { useDispatch, useSelector } from "react-redux";
import { getActivity } from "../../redux/boredSlice";
import Activity from "./_components/Activity";

export default function Index() {
  const { activity, status } = useSelector((store) => store.bored);
  const dispatch = useDispatch();
  const types = [
    "any",
    "education",
    "recreational",
    "social",
    "diy",
    "charity",
    "cooking",
    "relaxation",
    "music",
    "busywork",
  ];
  return (
    <>
      <div className="flex gap-4 [&>*]:p-3">
        <input type="number" id="participants" placeholder="Amount of participants" />
        <select name="" id="type">
          {types.map((type, i) => (
            <option key={i} value={type}>
              {type}
            </option>
          ))}
        </select>
        <div>
          <input className="" type="checkbox" id="free" />
          <label htmlFor="free">Free only</label>
        </div>
      </div>
      <button
        onClick={() => {
          const participants = document.body.querySelector("#participants").value;
          const type = document.body.querySelector("#type").value;
          const free = document.body.querySelector("#free").checked;
          dispatch(getActivity({ participants, type, free }));
        }}
      >
        Get activity
      </button>
      <h1>Status: {status}</h1>
      <Activity {...activity} />
      {/* <ul>
        {activities.map((post, i) => (
          <li key={i}>
            {post.title}: {post.body}
          </li>
        ))}
      </ul> */}
    </>
  );
}
