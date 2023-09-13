import Header from "./Header";
import TodoList from "./TodoList";

export default function Index() {
  return (
    <main className="dark:bg-black dark:text-white w-[50vw] flex flex-col items-center h-screen">
      <h1>Todo List (Redux Toolkit)</h1>
      <Header />
      <TodoList />
    </main>
  );
}
