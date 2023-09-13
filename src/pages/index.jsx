import { Link } from "react-router-dom";
import "./index.css";
import { useState } from "react";
import Counter from "../components/Counter";
export default function Home() {
  return (
    <div className="App">
      <h1>Generouted</h1>
      <h2>It works!</h2>
      <nav className="flex flex-col gap-8">
        <Link to="/cool-route">Cool route here</Link>
      </nav>
      <Counter />
    </div>
  );
}
