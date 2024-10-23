"use client";
import { useFormState } from "react-dom";
import { login, signup } from "./actions";

const initialState = {
  message: "",
};

export default function LoginPage() {
  const [loginState, loginAction] = useFormState(login, initialState);
  const [signupState, signupAction] = useFormState(signup, initialState);
  return (
    <form className="flex flex-col">
      <label htmlFor="email">Email:</label>
      <input id="email" name="email" type="email" required />
      <label htmlFor="password">Password:</label>
      <input id="password" name="password" type="password" required />
      <div className="flex items-center justify-center gap-4">
        <button className="bg-blue-300" formAction={loginAction}>
          Log in
        </button>
        <button className="bg-blue-300" formAction={signupAction}>
          Sign up
        </button>
      </div>
      <p className="text-red-500">{loginState.message}</p>
    </form>
  );
}
