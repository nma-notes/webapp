import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from "./routes/sign_in";
import SignUp from "./routes/sign_up";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path={"/sign_in"} element={<SignIn />} />
        <Route path={"/sign_up"} element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
