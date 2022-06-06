import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from "./routes/SignIn";
import SignUp from "./routes/SignUp";
import About from "./routes/About";
import Layout from "./components/Layout";
import Contacts from "./routes/Contacts";
import { AuthProvider } from "./AuthContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path={"/sign_in"} element={<SignIn />} />
          <Route path={"/sign_up"} element={<SignUp />} />
          <Route
            path={"/about"}
            element={
              <Layout>
                <About />
              </Layout>
            }
          />
          <Route
            path={"/contacts"}
            element={
              <Layout>
                <Contacts />
              </Layout>
            }
          />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>
);
