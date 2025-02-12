import Activities from "@/components/Activities";
import Heading from "@/components/Heading";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "aktiviteter",
  description: "her kan du finde aktiviteter hos Landrup Dans",
};

export default async function aktiviteter() {
  try {
    const res = await fetch("http://localhost:4000/api/v1/activities");
    const data = await res.json();
    const filteredData = data.map((item: any) => {
      return {
        id: item.id,
        name: item.name,
        ageGroup: item.minAge + "-" + item.maxAge + " år",
        imageUrl: item.asset.url,
      };
    });

    return (
      <>
        <Heading content="Aktiviteter" padding={2} />
        <Activities activities={filteredData} />
      </>
    );
  } catch (err: any) {
    throw new Error(err);
  }
}
