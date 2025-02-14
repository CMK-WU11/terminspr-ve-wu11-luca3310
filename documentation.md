# hej dette er min documentation

## Info

- navn
  lucas agerskov kragh
- holdnummer
  wu11
- url
  http://localhost:3000/

## Stack

<details>
<summary>Nextjs</summary>
<p>Nextjs er det mest populære fullstack framework og der er mange inbyggede funktionaliteter der gør det nemmere for dig, som fx server actions og hooks</p>
</details>

## Dependencies

<details>
<summary>Tailwind</summary>
<p>Tailwind er en hurtig måde at skrive css på og passer godt til små projecter some dette, da det ikke gøre so meget at der er ekstra tekst inde i mine filer</p>
</details>

<details>
<summary>Typescript</summary>
<p>TypeScript hjælper med at finde dine fejl noget tidligere selvom det tage noget længere tid at skrive</p>
</details>

## Argumenter

<details>
<summary>Tid i detajle side</summary>
<p>har tilføjet tid til detajle siden, selvom den ikke er på figmaen</p>
</details>

<details>
<summary>Knap animationer</summary>
<p>har tilføjet animationer til alle knapper og ikke kun hovedside knappen</p>
</details>

## Code

- loginForm.tsx

```json
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
```

dette er min form der bruger useActionForm, state er det der bliver sendt tilbage fra min action
, formAction er den information html formen skal have for at køre den rigtige action
og pending er en boolean der checker om actionen er kørende

- loginAction.ts

```json
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
```

den starter med at definere og validere variablerne fra formData der kommer fra
parameterne hvis de ikke er valideret bliver formData sendt tilbage til loginFormen sammen med en fejl
besked med en return, derefter laver den en POST fetch (så der er mulighed for at sende en body afsted med username og password) ved hjælp fra en try catch for at
lave en jwt token og for at få idet på brugeren, så checker den om checkboksen er checket på login siden for
at finde ud af om det er en session cookie eller en længere varig cookie skal bruges
