import Header from "./components/Header";
import TodoList from "./components/TodoList";

export default function Index() {
  return (
    <main className="dark:bg-black dark:text-white w-[50vw] flex flex-col items-center h-screen">
      <h1>Todo List (Redux Toolkit)</h1>
      <Header />
      <TodoList />
    </main>
  );
}
