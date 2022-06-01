import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Link } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <nav>
        <Link to={"/sign_in"}>Sign in</Link> |{" "}
        <Link to={"/sign_up"}>Sign up</Link>
      </nav>
    </div>
  );
}

export default App;
