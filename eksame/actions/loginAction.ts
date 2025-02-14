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

    const maxAge = 60 * 50;

    if (checked) {
      cookieStore.set("landrupToken", data.token, { maxAge: maxAge });
      cookieStore.set("landrupUserId", data.userId, { maxAge: maxAge });
    } else {
      cookieStore.set("landrupToken", data.token);
      cookieStore.set("landrupUserId", data.userId);
    }
  } catch (err: any) {
    throw new Error(err);
  }

  redirect("/calendar");
}
