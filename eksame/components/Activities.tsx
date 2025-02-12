import Link from "next/link";

interface Activity {
  id: string;
  name: string;
  ageGroup: string;
  imageUrl: string;
}

export default function Activities({ activities }: { activities: Activity[] }) {
  return (
    <ul className="flex overflow-y-scroll flex-col gap-7 px-5">
      {activities.length ? (
        activities.map((activity: Activity) => {
          return (
            <li
              key={activity.id}
              className="overflow-hidden bg-no-repeat bg-cover rounded-xl rounded-br-none aspect-square"
              style={{ backgroundImage: `url(${activity.imageUrl})` }}
            >
              <Link
                href={`/activity/${activity.id}`}
                className="flex items-end w-full h-full"
              >
                <div className="p-5 w-full bg-opacity-80 rounded-tr-[4rem] bg-secondary text-primaryBlack text-md">
                  <h2 className="truncate">{activity.name}</h2>
                  <h2 className="truncate">{activity.ageGroup}</h2>
                </div>
              </Link>
            </li>
          );
        })
      ) : (
        <p className="text-primaryWhite">there are no activities</p>
      )}
    </ul>
  );
}
