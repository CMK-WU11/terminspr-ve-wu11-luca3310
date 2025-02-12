import { cookies } from "next/headers";
import Heading from "@/components/Heading";

export default async function kalenderDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const cookieStore = await cookies();

  const token = cookieStore.get("landrupToken")?.value;
  const userId = cookieStore.get("landrupUserId")?.value;

  try {
    const activityRes = await fetch(
      `http://localhost:4000/api/v1/activities/${id}`,
    );
    const actitityData = await activityRes.json();

    const res = await fetch(
      `http://localhost:4000/api/v1/users/${userId}/roster/${id}`,
      {
        headers: { Authorization: `Bearer ${token}` },
      },
    );
    const data = await res.json();
    const group = data.map((item: any) => {
      return {
        name: item.firstname + " " + item.lastname,
      };
    });
    return (
      <section>
        <Heading padding={2} content={actitityData.name} />
        <ul className="flex flex-col p-5 text-primaryWhite">
          {group.length ? (
            group.map((item: any) => {
              return <li key={item.name}>{item.name}</li>;
            })
          ) : (
            <p className="text-primaryWhite">
              der er ikke nogen der har meldt sig til endnu
            </p>
          )}
        </ul>
      </section>
    );
  } catch (err: any) {
    throw new Error(err);
  }
}
