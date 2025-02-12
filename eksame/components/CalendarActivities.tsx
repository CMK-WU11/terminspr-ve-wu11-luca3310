"use client";

import Link from "next/link";

interface Activity {
  name: string;
  time: string;
  id: string;
}

export default function CalendarActivities({
  activities,
  isInstructor,
}: {
  activities: Activity[];
  isInstructor: boolean;
}) {
  {
    if (activities.length) {
      return activities.map((activity: Activity) => {
        return (
          <li
            key={activity.id}
            className="p-5 w-full rounded-xl text-primaryBlack bg-primaryWhite"
          >
            <Link
              className="w-full h-full"
              href={`/${isInstructor ? "calendar" : "activity"}/${activity.id}`}
            >
              <h2 className="text-lg font-bold truncate">{activity.name}</h2>
              <h4 className="text-md">{activity.time}</h4>
            </Link>
          </li>
        );
      });
    } else {
      return (
        <p className="text-primaryWhite">
          you have no activities on the calendar
        </p>
      );
    }
  }
}
