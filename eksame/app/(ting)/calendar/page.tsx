import Heading from "@/components/Heading";
import Link from "next/link";

import { cookies } from "next/headers";

interface Activity {
  name: string;
  time: string;
  id: string;
}

export default async function kalender() {
  const cookieStore = await cookies();

  const token = cookieStore.get("landrupToken")?.value;
  const id = cookieStore.get("landrupUserId")?.value;

  try {
    const res = await fetch(`http://localhost:4000/api/v1/users/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await res.json();
    console.log(data);
    const activities = data.activities.map((activity: Activity) => {
      return {
        name: activity.name,
        time: activity.time,
        id: activity.id,
      };
    });
    return (
      <>
        <Heading content="Kalender" padding={2} />
        <ul className="flex overflow-y-scroll flex-col gap-7 px-5">
          {activities.length ? (
            activities.map((activity: Activity) => {
              return (
                <li
                  key={activity.id}
                  className="p-5 w-full rounded-xl text-primaryBlack bg-primaryWhite"
                >
                  <Link
                    className="w-full h-full"
                    href={`/calendar/${activity.id}`}
                  >
                    <h2 className="text-lg font-bold truncate">
                      {activity.name}
                    </h2>
                    <h4 className="text-md">{activity.time}</h4>
                  </Link>
                </li>
              );
            })
          ) : (
            <p>you have no activities on the calendar</p>
          )}
        </ul>
      </>
    );
  } catch (err: any) {
    throw new Error(err);
  }
}
