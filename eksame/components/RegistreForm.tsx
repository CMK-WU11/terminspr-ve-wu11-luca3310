"use client";

import Heading from "@/components/Heading";
import Button from "@/components/Button";
import { useActionState } from "react";
import registreAction from "@/actions/registreAction";
import Link from "next/link";

export default function RegistreForm() {
  const [state, formAction, pending] = useActionState(registreAction, null);
  return (
    <form
      action={formAction}
      className="flex flex-col gap-6 justify-center items-center w-full h-full"
      noValidate
    >
      <div className="w-[80%] flex flex-col gap-2 z-10">
        <Heading content="Registre" padding={0} />
        <input
          name="username"
          className="p-3 w-full"
          placeholder="brugernavn"
        />
        <input name="firstname" className="p-3 w-full" placeholder="fornavn" />

        <input name="lastname" className="p-3 w-full" placeholder="efternavn" />
        <input
          name="age"
          type="number"
          className="p-3 w-full"
          placeholder="alder"
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
            already have an account?
          </Link>
        </div>

        <span
          className={`${state && "p-1"} text-red-500 bg-black bg-opacity-50 rounded w-auto`}
        >
          {state?.error}
        </span>
      </div>
      <Button
        content={pending ? "registrere" : "registre"}
        disabled={pending}
      />
    </form>
  );
}
