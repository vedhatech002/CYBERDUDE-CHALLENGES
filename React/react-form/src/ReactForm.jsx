import React from "react";
import ReactDOM from "react-dom/client";
import { useForm } from "react-hook-form";

const ReactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  console.log(useForm());
  const sendInfo = (data) => {
    console.log(data);
  };

  return (
    <main className="w-[500px] mx-auto flex flex-col justify-center items-center mt-24 gap-4 bg-[#454545] px-6 py-4 rounded-md">
      <form
        className="w-full space-y-6 text-white px-4 py-8"
        onSubmit={handleSubmit(sendInfo)}
      >
        <input
          type="text"
          name="userName"
          placeholder="enter your name"
          className={`bg-[#1f1f1f] px-4 py-1 rounded w-full  outline-none ${
            errors.userName ? "border-red-500 border-2" : " "
          }`}
          {...register("userName", {
            required: "intha field mukium",
            minLength: { value: 3, message: "3 characters venum" },
            maxLength: 25,
          })}
        />
        {errors.userName && <small>{errors.userName.message}</small>}
        <small></small>
        <input
          type="text"
          name="userEmail"
          placeholder="enter your email"
          className="bg-[#1f1f1f] px-4 py-1 rounded w-full"
        />
        <input
          type="number"
          name="userMobile"
          placeholder="enter your mobile num"
          className="bg-[#1f1f1f] px-4 py-1 rounded w-full"
        />

        <button className="bg-[#08a7ff] w-full px-4 py-1 rounded">
          Submit
        </button>
      </form>
    </main>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<ReactForm />);
