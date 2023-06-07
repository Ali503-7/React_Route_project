import { useState } from "react";
import {
  useLoaderData,
  Form,
  redirect,
  useActionData,
  useNavigation,
} from "react-router-dom";
import { loginUser } from "../Api";

export const loader = async ({ request }) => {
  return new URL(request.url).searchParams.get("massage");
};

export const action = async ({ request }) => {
  const url = new URL(request.url).searchParams.get("redirectTo") || "/host";
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");

  try {
    const data = await loginUser({ email, password });
    localStorage.setItem("loggedin", true);
    return redirect(url);
  } catch (err) {
    return err.message;
  }
};

const Sign_In = () => {
  const logInFirst = useLoaderData();
  const Error = useActionData();
  const navigate = useNavigation();

  const [login, setLogin] = useState(localStorage.getItem("loggedin"));

  return (
    <div className="container flex flex-col items-center w-full">
      {login ? null :(
        <div className=" absolute left-50 bottom-28">
          <div>Email: b@b.com</div>
          <div>Password: p123</div>
        </div>
      ) }

      <h1 className="font-bold text-xl text-Headers mb-5">
        {login ? "Sign out from" : "Sing in to"} your account
      </h1>
      {logInFirst && (
        <h2 className="text-red-600 font-bold text-lg mb-3">{logInFirst}</h2>
      )}
      {Error && (
        <h2 className="text-red-600 font-bold text-lg mb-3">{Error}</h2>
      )}
      <Form className="flex flex-col mb-3" method="post" replace>
        {login ? null : (
          <div className="border border-stone-800 rounded-md overflow-hidden mb-8">
            <input
              type="email"
              name="email"
              placeholder="Email address"
              className="bg-white w-full outline-none px-3 py-2 border border-b-Headers"
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="bg-white w-full outline-none px-3 py-2"
            />
          </div>
        )}
        {login ? (
          <p
            className="bg-red-800 py-3 font-bold text-md text-white rounded-xl px-5 cursor-pointer"
            onClick={() => {
              setLogin(localStorage.removeItem("loggedin"));
            }}
          >
            Sign Out
          </p>
        ) : (
          <button
            className={
              navigate.state === "submitting"
                ? "bg-gray-500 py-3 font-bold text-md text-white rounded-xl"
                : "bg-btn py-3 font-bold text-md text-white rounded-xl"
            }
            disabled={navigate.state === "submitting"}
          >
            {navigate.state === "submitting" ? "logging in..." : "Sign in"}
          </button>
        )}
      </Form>
      {login ? null : (
        <div>
          Dont't have an account ?{" "}
          <button className="text-btn">Create one now</button>
        </div>
      )}
    </div>
  );
};

export default Sign_In;
