import React, { useContext } from "react";
import { useForm } from "react-hook-form";

import authContext from "src/contexts/auth/authContext";

type FormData = {
  email: string;
  password: string;
};

const LoginForm = () => {
  const { login } = useContext(authContext);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    defaultValues: { email: "", password: "" },
  });

  const onSubmit = (data: FormData) => {
    login(data.email, data.password);
  };

  return (
    <div className="flex items-center text-white h-full">
      <form onSubmit={handleSubmit(onSubmit)} className="w-full">
        <div className="mb-5 max-w-md mx-auto">
          <label htmlFor="login-email">Email</label>
          <input
            className={`block w-full bg-transparent border rounded-md text-lg px-3 py-2 my-1 focus:outline-none ${
              errors.email && "border-red-500 text-red-500"
            }`}
            type="text"
            id="login-email"
            {...register("email", { required: true })}
          />
          {errors.email && (
            <span className="text-red-500">This field is required</span>
          )}
        </div>

        <div className="mb-8 max-w-md mx-auto">
          <label htmlFor="login-password">Password</label>
          <input
            className={`block w-full bg-transparent border rounded-md text-lg px-3 py-2 my-1 focus:outline-none ${
              errors.password && "border-red-500 text-red-500"
            }`}
            type="password"
            id="login-password"
            {...register("password", { required: true })}
          />
          {errors.email && (
            <span className="text-red-500">This field is required</span>
          )}
        </div>

        <div className="w-full mx-auto max-w-md">
          <button
            type="submit"
            className="text-lg w-full px-3 py-2 bg-gray-600 rounded"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
