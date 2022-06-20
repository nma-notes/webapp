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
import Note from "./routes/Note";
import RequireAuth from "./components/auth/RequireAuth";
import RequireNoAuth from "./components/auth/RequireNoAuth";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route
            path={"/sign_in"}
            element={
              <RequireNoAuth>
                <SignIn />
              </RequireNoAuth>
            }
          />
          <Route
            path={"/sign_up"}
            element={
              <RequireNoAuth>
                <SignUp />
              </RequireNoAuth>
            }
          />
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
          <Route
            path={"/notes/:uid"}
            element={
              <RequireAuth>
                <Note />
              </RequireAuth>
            }
          />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>
);
