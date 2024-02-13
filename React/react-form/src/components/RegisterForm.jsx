import React from "react";
import { useForm } from "react-hook-form";
import Input from "./Input";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";

const formSchema = z.object({
  fullName: z
    .string()
    .min(1, { message: "this field is required" })
    .min(3)
    .max(20),
  email: z.string().min(1, { message: "this field is required" }).email(),
});

const RegisterForm = (data) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: zodResolver(formSchema) });

  const sendData = (data) => {
    console.log(data);
    alert(JSON.stringify(data));
    reset({ fullName: "", email: "" });
  };

  return (
    <main className="w-[500px] mx-auto flex flex-col justify-center items-center mt-24 gap-4 bg-[#454545] px-6 py-4 rounded-md">
      <form
        className="w-full space-y-6 text-white px-4 py-8"
        onSubmit={handleSubmit(sendData)}
      >
        <Input
          name="fullName"
          placeholder="enter your fullName"
          register={register("fullName")}
          error={errors.fullName}
        />
        <Input
          name="email"
          placeholder="enter your email"
          register={register("email")}
          error={errors.email}
        />

        <button className="bg-[#08a7ff] w-full px-4 py-1 rounded">
          Submit
        </button>
      </form>
    </main>
  );
};

export default RegisterForm;
