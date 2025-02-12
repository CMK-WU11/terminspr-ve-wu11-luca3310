import Tilmeld from "@/components/Tilmeld";
import { cookies } from "next/headers";

import type { Metadata } from "next";

interface Activity {
  id: string;
  name: string;
  ageGroup: string;
  imageUrl: string;
  description: string;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  try {
    const { id } = await params;
    const res = await fetch(`http://localhost:4000/api/v1/activities/${id}`);
    const data = await res.json();

    return {
      title: data.name,
      description: data.description,
    };
  } catch (err: any) {
    throw new Error(err);
  }
}

export default async function aktivitet({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const cookieStore = await cookies();

  const token = cookieStore.get("landrupToken")?.value;
  const userId = cookieStore.get("landrupUserId")?.value;

  try {
    let userInfo = null;

    const res = await fetch(`http://localhost:4000/api/v1/activities/${id}`);
    const data = await res.json();
    const activity: Activity = {
      id: data.id,
      name: data.name,
      ageGroup: data.minAge + "-" + data.maxAge + " år",
      imageUrl: data.asset.url,
      description: data.description,
    };

    if (token && userId) {
      const userRes = await fetch(
        `http://localhost:4000/api/v1/users/${userId}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        },
      );

      const ids = data.users.map((item: any) => item.id);
      const userData = await userRes.json();
      userInfo = {
        added: ids.includes(userData.id),
        isInstructor: userData.role !== "default",
        token: token,
        id: userId,
        activityId: id,
      };
    }

    return (
      <>
        <div
          className="flex justify-end items-end p-3 w-full bg-cover aspect-square"
          style={{ backgroundImage: `url(${activity.imageUrl})` }}
        >
          {userInfo && <Tilmeld userInfo={userInfo} />}
        </div>
        <article className="p-3 px-5 text-primaryWhite">
          <h1 className="leading-none text-md">{activity.name}</h1>
          <p>{activity.ageGroup}</p>
          <p>{activity.description}</p>
        </article>
      </>
    );
  } catch (err: any) {
    throw new Error(err);
  }
}
