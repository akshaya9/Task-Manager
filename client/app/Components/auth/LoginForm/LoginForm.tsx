"use client";
import { useUserContext } from "@/context/userContext";
import React from "react";

function LoginForm() {
  const { loginUser, userState, handlerUserInput } = useUserContext();
  const { email, password } = userState;
  const [showPassword, setShowPassword] = React.useState(false);

  const togglePassword = () => setShowPassword(!showPassword);

  return (
    <form className="relative m-[2rem] px-10 py-14 rounded-lg bg-white w-full max-w-[520px]">
      <div className="relative z-10">
        <h1 className="mb-2 text-center text-[1.35rem] font-medium">
          Task Manager
        </h1>
        <p className="mb-8 px-[2rem] text-center text-[#999] text-[14px]">
          Click here to create a new account - {" "}
          <a
            href="/register"
            className="font-bold text-[#be946b] hover:text-[#553f2a] transition-all duration-300"
          >
            Sign up
          </a>
        </p>

        <div className="mt-[1rem] flex flex-col">
          <label htmlFor="email" className="mb-1 text-[#999]">
            Email
          </label>
          <input
            type="text"
            id="email"
            value={email}
            onChange={(e) => handlerUserInput("email")(e)}
            name="email"
            className="px-4 py-3 border-[2px] rounded-md outline-[#be946b] text-gray-800"
            placeholder="johndoe@gmail.com"
          />
        </div>
        <div className="relative mt-[1rem] flex flex-col">
          <label htmlFor="password" className="mb-1 text-[#999]">
            Password
          </label>
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            value={password}
            onChange={(e) => handlerUserInput("password")(e)}
            name="password"
            className="px-4 py-3 border-[2px] rounded-md outline-[#be946b] text-gray-800"
            placeholder="***************"
          />
          <button
            type="button"
            className="absolute p-1 right-4 top-[43%] text-[22px] text-[#999] opacity-45"
          >
            {showPassword ? (
              <i className="fas fa-eye-slash" onClick={togglePassword}></i>
            ) : (
              <i className="fas fa-eye" onClick={togglePassword}></i>
            )}
          </button>
        </div>
        <div className="mt-4 flex justify-end">
          <a
            href="/forgot-password"
            className="font-bold text-[#be946b] text-[14px] hover:text-[#553f2a] transition-all duration-300"
          >
            Forgot password?
          </a>
        </div>
        <div className="flex">
          <button
            type="submit"
            disabled={!email || !password}
            onClick={loginUser}
            className="mt-[1.5rem] flex-1 px-4 py-3 font-bold bg-[#be946b] text-white rounded-md hover:bg-[#553f2a] transition-colors"
          >
            Login Now
          </button>
        </div>
      </div>
      <img src="/flurry.png" alt="" />
    </form>
  );
}

export default LoginForm;