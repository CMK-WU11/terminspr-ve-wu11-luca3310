"use server";

import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export default async function registreAction(
  prevState: any,
  formData: FormData,
) {
  const username = formData.get("username");
  const password = formData.get("password");
  const firstname = formData.get("firstname");
  const lastname = formData.get("lastname");
  const age = formData.get("age");
  formData.append("role", "default");

  if (!username || !password || !firstname || !lastname || !age) {
    return {
      formData: {
        username,
        password,
        firstname,
        lastname,
        age,
      },
      error: "Du skal udfylde begge felter",
    };
  }

  if (+age < 18) {
    return {
      formData: {
        username,
        password,
        firstname,
        lastname,
        age,
      },
      error: "Du skal være voksen for at tilmelde dig",
    };
  }

  if (+age > 99) {
    return {
      formData: {
        username,
        password,
        firstname,
        lastname,
        age,
      },
      error: "tilføj en rigtig alder",
    };
  }

  try {
    const res = await fetch("http://localhost:4000/api/v1/users", {
      method: "POST",
      body: formData,
    });

    if (!res.ok) {
      return {
        formData: {
          username,
          password,
        },
        error: "noget gik galt",
      };
    }

    const loginRes = await fetch("http://localhost:4000/auth/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    });

    const loginData = await loginRes.json();

    const cookieStore = await cookies();

    cookieStore.set("landrupToken", loginData.token, {
      maxAge: 50 * 60 * 1000,
    });
    cookieStore.set("landrupUserId", loginData.userId, {
      maxAge: 50 * 60 * 1000,
    });
  } catch (err: any) {
    throw new Error(err);
  }

  redirect("/calendar");
}
