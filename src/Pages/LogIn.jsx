import React, { useState } from "react";
import { useForm } from "react-hook-form";
import logo from "../assets/youtube-icon.png";
import { login, signup } from "../firebase";
import { useNavigate } from "react-router-dom";

function LogIn() {
  const [signState, setSignState] = useState("Sign In");
  const navigate = useNavigate();

  const userAuth = async (event) => {
    const { name, email, password } = event;
    if (signState === "Sign In") {
      await login(email, password);
    } else {
      await signup(name, email, password);
    }
    navigate("/");
  };

  function handleSignUp() {
    setSignState("Sign Up");
  }
  function handleSignIn() {
    setSignState("Sign In");
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <div className="text-white h-screen px-[8%] py-[20px] max-[500px]:px-[5%] max-[500px]:py-[15px]">
      <img src={logo} className="w-[150px] -mt-5" />
      <div className="w-full max-w-[450px] border-2 border-yellow bg-[rgba(0,0,0,0.8)] rounded-sm p-[60px] m-auto -mt-8 max-[500px]:p-[20px] max-[500px]:mt-[30px]">
        <h1 className="text-[32px] font-bold mb-[28px]">{signState}</h1>
        <form onSubmit={handleSubmit(userAuth)}>
          {signState === "Sign Up" ? (
            <>
              <input
                type="text"
                placeholder="Your Name"
                {...register("name", {
                  required: "Enter your name",
                  pattern: {
                    value: /^[A-Za-z]+$/i,
                    message: "Enter your name first",
                  },
                })}
                className="rounded-sm px-[20px] py-[16px] text-[16px] mx-0 my-[12px] border-0 w-full bg-[#636161] h-[50px] outline-none placeholder:font-semibold"
              />
              {errors.name && (
                <p className="text-red-500 font-semibold text-sm">
                  {errors.name.message}
                </p>
              )}
            </>
          ) : null}

          <input
            type="email"
            placeholder="Email"
            {...register("email", {
              required: "Enter your Eamil Id",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Enter your Email Address",
              },
            })}
            className="rounded-sm px-[20px] py-[16px] text-[16px] mx-0 my-[12px] border-0 w-full bg-[#636161]  h-[50px] outline-none placeholder:font-semibold"
          />
          {errors.email && (
            <p className="text-red-500 font-semibold text-sm">
              {errors.email.message}
            </p>
          )}

          <input
            type="password"
            placeholder="Password"
            {...register("password", {
              required: "Password is required",
              pattern: {
                value:
                  /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                message:
                  "Password must be at least 8 characters, include one uppercase letter, one number, and one special character",
              },
            })}
            className="rounded-sm px-[20px] py-[16px] text-[16px] mx-0 my-[12px] border-0 w-full bg-[#636161] h-[50px] outline-none placeholder:font-semibold"
          />
          {errors.password && (
            <p className="text-red-500 font-semibold text-sm">
              {errors.password.message}
            </p>
          )}

          <button
            type="submit"
            className="w-full border-0 outline-0 p-[16px] bg-[#e50914] rounded-sm text-[17px] mt-[20px] cursor-pointer"
          >
            {signState === "Sign In" ? "Sign In" : "Sign Up"}
          </button>

          <div className="flex justify-between items-center text-[#b3b3b3] text-[13px] mt-3">
            <div className="flex items-center gap-[5px]">
              <input
                className="w-[18px] h-[18px]"
                type="checkbox"
                id="rememberMe"
                {...register("rememberMe")}
              />
              <label htmlFor="rememberMe" className="text-[14px]">
                Remember Me
              </label>
            </div>
            <p className="text-[14px]">Need Help?</p>
          </div>
        </form>

        <div className="mt-[40px] text-[#737373]">
          {signState === "Sign In" ? (
            <p>
              New to Netflix?{" "}
              <span
                className="ml-[6px] text-[#fff] font-semibold cursor-pointer"
                onClick={handleSignUp}
              >
                Sign Up Now
              </span>
            </p>
          ) : (
            <p>
              Already have account?{" "}
              <span
                className="ml-[6px] text-[#fff] font-semibold cursor-pointer"
                onClick={handleSignIn}
              >
                Sign In Now
              </span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default LogIn;
