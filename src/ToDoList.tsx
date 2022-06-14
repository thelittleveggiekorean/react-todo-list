import React, { useState } from "react";
import { useForm } from "react-hook-form";

export const ToDoList = () => {
  // const [toDo, setTodo] = useState("");
  // const onChange = (event: React.FormEvent<HTMLInputElement>) => {
  //   const {
  //     currentTarget: { value },
  //   } = event;
  //   setTodo(value);
  // };

  // const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  //   console.log(toDo);
  // };
  const { register, handleSubmit } = useForm();
  const onValid = (data: any) => {
    console.log(data);
  };

  return (
    <div>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          maxWidth: "420px",
          gap: "1rem",
          padding: "1rem",
        }}
        onSubmit={handleSubmit(onValid)}
      >
        <input
          {...register("email", { required: true, minLength: 10 })}
          type="text"
          placeholder="Email"
        ></input>
        <input
          {...register("username", { required: true })}
          type="text"
          placeholder="User Name"
        ></input>
        <input
          {...register("password", { required: true })}
          type="text"
          placeholder="Password"
        ></input>
        <input
          {...register("passwordCheck", { required: true })}
          type="text"
          placeholder="Password Check"
        ></input>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
