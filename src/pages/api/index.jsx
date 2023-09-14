import { useDispatch, useSelector } from "react-redux";
import { getPosts, increment } from "../../redux/postSlice";

export default function Index() {
  const { posts, status } = useSelector((store) => store.posts);
  const dispatch = useDispatch();
  return (
    <>
      <button onClick={() => dispatch(increment())}>Console log action</button>
      <button onClick={() => dispatch(getPosts())}>getPosts</button>
      <h1>Status: {status}</h1>
      <ul>
        {posts.map(({ userId, title, body }) => (
          <li>
            {title}: {body}
          </li>
        ))}
      </ul>
    </>
  );
}
