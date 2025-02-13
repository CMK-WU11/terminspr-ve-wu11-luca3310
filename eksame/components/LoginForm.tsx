"use client";

import Heading from "@/components/Heading";
import Button from "@/components/Button";
import { useActionState } from "react";
import loginAction from "@/actions/loginAction";
import Link from "next/link";

export default function LoginForm() {
  const [state, formAction, pending] = useActionState(loginAction, null);
  return (
    <form
      action={formAction}
      className="flex flex-col gap-6 justify-center items-center w-full h-full"
      noValidate
    >
      <div className="w-[80%] flex flex-col gap-2 z-10">
        <Heading content="Log ind" padding={0} />
        <input
          name="username"
          className="p-3 w-full"
          placeholder="brugernavn"
        />
        <input
          name="password"
          className="p-3 w-full"
          placeholder="adgangskode"
        />
        <div className="flex justify-between text-xs">
          <label className="hover:cursor-pointer text-primaryWhite">
            <input name="checked" type="checkbox" defaultChecked /> keep me
            logged in
          </label>
          <Link className="text-primaryWhite" href="/registre">
            do not have an account?
          </Link>
        </div>
        <span
          className={`${state && "p-1"} text-red-500 bg-black bg-opacity-50 rounded w-auto`}
        >
          {state?.error}
        </span>
      </div>
      <Button content={pending ? "logger ind" : "log ind"} disabled={pending} />
    </form>
  );
}
