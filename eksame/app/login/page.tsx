"use client";

import Heading from "@/components/Heading";
import Button from "@/components/Button";
import { useActionState, useEffect } from "react";
import loginAction from "@/actions/loginAction";

export default function loginForm() {
  const [state, formAction, pending] = useActionState(loginAction, null);

  useEffect(() => {
    console.log(state);
  }, [state]);

  return (
    <main className="flex flex-col gap-16 justify-end items-center pb-12 w-screen h-screen bg-center bg-no-repeat bg-cover bg-[url(/images/splash-image.jpg)]">
      <div className="flex overflow-hidden absolute top-0 left-0 justify-center items-center w-screen h-screen">
        <div className="opacity-50 rotate-[62deg] h-[80rem] aspect-[1/3] bg-[#5E2E53]"></div>
      </div>
      <form
        action={formAction}
        className="flex flex-col gap-6 justify-center items-center w-full h-full"
        noValidate
      >
        <div className="w-[80%] flex flex-col gap-2 z-10">
          <Heading content="Log ind" padding={0} />
          <input
            // defaultValue={state?.formData?.username}
            name="username"
            className="p-3 w-full"
            placeholder="brugernavn"
          />
          <input
            // defaultValue={state?.formData?.password}
            name="password"
            className="p-3 w-full"
            placeholder="adgangskode"
          />
          <span
            className={`${state && "p-1"} text-red-500 bg-black bg-opacity-50 rounded`}
          >
            {state?.error}
          </span>
        </div>
        <Button
          content={pending ? "logger ind" : "log ind"}
          disabled={pending}
        />
      </form>
    </main>
  );
}
