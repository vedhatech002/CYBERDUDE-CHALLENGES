import React from "react";
import { createRoot } from "react-dom/client";
import NavBar from "./components/NavaBar";
import RegisterForm from "./components/RegisterForm";

const Main = () => {
  return (
    <>
      <NavBar />
      <RegisterForm />
    </>
  );
};

const root = createRoot(document.getElementById("root"));

root.render(<Main />);
