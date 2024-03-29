import React from "react";

import { useForm } from "react-hook-form";
import Input from "./Input";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";

const formShcema = z.object({
  title: z
    .string({})
    .min(1, { message: "this field is required" })
    .min(3, { message: "this field should not empty and min 3 character" })
    .max(20),
});

const ReactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(formShcema) });

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
        <Input
          name="title"
          placeholder="enter your title"
          register={register("title")}
          error={errors.title}
        />
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

        <input
          type="text"
          name="userEmail"
          placeholder="enter your email"
          className="bg-[#1f1f1f] px-4 py-1 rounded w-full"
          {...register("userEmail", { required: "this field is required" })}
        />
        {errors.userName && <small>{errors.userName.message}</small>}

        <button className="bg-[#08a7ff] w-full px-4 py-1 rounded">
          Submit
        </button>
      </form>
    </main>
  );
};
