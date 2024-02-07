import React from "react";
import ReactDOM from "react-dom/client";
import Input from "./components/Input";
import { useState } from "react";
import TextArea from "./components/TextArea";

const App = () => {
  const [formVal, setFormVal] = useState({ fullName: "", email: "", msg: "" });

  const [errormsg, setErrormsg] = useState({
    fullName: null,
    email: "",
    msg: "",
  });
  const handleInputs = (e) => {
    const { name, value } = e.target;

    if (name === "fullName") {
      if (value.length < 4 || value.length > 20) {
        setErrormsg((pre) => ({
          ...pre,
          fullName: "fullName should contains 4 to 20 characters only",
        }));
      } else {
        setErrormsg((pre) => ({
          ...pre,
          fullName: "",
        }));
      }
    }

    setFormVal((previousVal) => ({
      ...previousVal,
      [name]: value,
    }));
  };

  const handleForm = (e) => {
    e.preventDefault();
    alert(
      `your email was sent ${formVal.fullName}! , We'll get back to you soon... `
    );
    console.log(formVal);
    setFormVal({ fullName: "", email: "", msg: "" });
  };

  return (
    <main className="w-[500px] mx-auto flex flex-col justify-center items-center mt-24 gap-4">
      <h1 className="text-xl font-semibold text-slate-200">Connect with Me!</h1>
      <form
        action=""
        className="w-full flex flex-col items-center gap-8"
        onSubmit={handleForm}
      >
        <div className="relative w-full">
          <Input
            name="fullName"
            placeholder={"enter your full name"}
            value={formVal.fullName}
            handleOnChange={handleInputs}
            required={true}
          />
          <small className="position absolute left-1 top-11 text-xs font-semibold text-blue-600 ">
            {errormsg.fullName}
          </small>
        </div>
        <div className="relative w-full">
          <Input
            name="email"
            placeholder={"enter your email address"}
            value={formVal.email}
            handleOnChange={handleInputs}
            required={true}
          />
          <small className="position absolute left-1 top-11 text-xs font-semibold text-blue-600 "></small>
        </div>

        <div className="relative w-full">
          <TextArea
            name="msg"
            placeholder="enter yout Message breifly"
            handleOnChange={handleInputs}
            required={true}
          />
          <small className="position absolute left-1 top-11 text-xs font-semibold text-blue-600 "></small>
        </div>

        <button className="px-4 py-1.5 text-white bg-red-700 font-semibold w-full rounded-md">
          Send Message
        </button>
      </form>
    </main>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
