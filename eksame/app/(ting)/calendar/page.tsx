import Heading from "@/components/Heading";
import CalendarActivities from "@/components/CalendarActivities";
import { cookies } from "next/headers";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "kalender",
    description: "kig i igennem aktiviteter du har tilmeldt dig til",
};

interface Activity {
    name: string;
    time: string;
    id: string;
    weekday: string;
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
        const activities = data.activities.map((activity: Activity) => {
            return {
                name: activity.name,
                time: activity.weekday + " " + activity.time,
                id: activity.id,
            };
        });
        if (data.role === "default") {
            return (
                <>
                    <Heading content="Kalender" padding={2} />
                    <ul className="flex overflow-y-scroll flex-col gap-7 px-5">
                        <CalendarActivities activities={activities} isInstructor={false} />
                    </ul>
                </>
            );
        }

        const resActivities = await fetch(
            "http://localhost:4000/api/v1/activities",
        );
        const dataActivites = await resActivities.json();
        const filteredData = dataActivites
            .map((item: any) => {
                return {
                    id: item.id,
                    name: item.name,
                    time: item.weekday + " " + item.time,
                    instructorId: item.instructorId,
                };
            })
            .filter((item: any) => id === JSON.stringify(item.instructorId));

        return (
            <>
                <Heading content="Kalender" padding={2} />
                <ul className="flex overflow-y-scroll flex-col gap-7 px-5">
                    <CalendarActivities activities={filteredData} isInstructor={true} />
                </ul>
            </>
        );
    } catch (err: any) {
        throw new Error(err);
    }
}
