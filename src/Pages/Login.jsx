import { useState } from "react";
import { useLoaderData } from "react-router-dom";
/* eslint-disable react/no-unescaped-entities */
export const loader = ({ request }) => {
  return new URL(request.url).searchParams.get("massage");
};
const Sign_In = () => {
  const [LoginFormData, setLoginFormData] = useState({
    email: "",
    password: "",
  });

  const logInFirst = useLoaderData()

  const FromHandel = (e) => {
    e.preventDefault();
    console.log(LoginFormData);
  };

  const handelChange = (e) => {
    setLoginFormData({ ...LoginFormData, [e.target.name]: e.target.value });
  };

  return (
    <div className="container flex flex-col items-center w-full">
      <h1 className="font-bold text-xl text-Headers mb-5">
        Sign in to your account
      </h1>
      {logInFirst && <h2>{ logInFirst }</h2>}
      <form onSubmit={(e) => FromHandel(e)} className="flex flex-col mb-3">
        <div className="border border-stone-800 rounded-md overflow-hidden mb-8">
          <input
            type="email"
            name="email"
            onChange={handelChange}
            id="1"
            placeholder="Email address"
            className="bg-white w-full outline-none px-3 py-2 border border-b-Headers"
            value={LoginFormData.email}
          />
          <input
            type="password"
            name="password"
            onChange={handelChange}
            id="2"
            placeholder="Password"
            className="bg-white w-full outline-none px-3 py-2"
            value={LoginFormData.password}
          />
        </div>
        <button className="bg-btn py-3 font-bold text-md text-white rounded-xl">
          Sign in
        </button>
      </form>
      <div>
        Dont't have an account ?{" "}
        <button className="text-btn">Create one now</button>
      </div>
    </div>
  );
};

export default Sign_In;
