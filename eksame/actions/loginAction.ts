"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function loginAction(prevState: any, formData: FormData) {
  const username = formData.get("username");
  const password = formData.get("password");

  const checked = formData.get("checked");

  console.log(checked);

  if (!username || !password) {
    return {
      formData: {
        username,
        password,
      },
      error: "Du skal udfylde begge felter",
    };
  }

  try {
    const res = await fetch("http://localhost:4000/auth/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    });

    if (res.status === 401) {
      return {
        formData: {
          username,
          password,
        },
        error: "Forkert email eller password",
      };
    }

    const data = await res.json();

    const cookieStore = await cookies();

    cookieStore.set("landrupToken", data.token, { maxAge: 50 * 60 * 1000 });
    cookieStore.set("landrupUserId", data.userId, { maxAge: 50 * 60 * 1000 });
  } catch (err: any) {
    throw new Error(err);
  }

  redirect("/calendar");
}
