import Activities from "@/components/Activities";
import Heading from "@/components/Heading";
import Search from "@/components/Search";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "søg",
  description: "søg på aktiviteter du er intereseret i",
};

export default async function søg({ searchParams }: any) {
  const params = await searchParams;
  const query = params.query;
  try {
    const res = await fetch("http://localhost:4000/api/v1/activities");
    const data = await res.json();
    const filteredData = data
      .map((item: any) => {
        return {
          id: item.id,
          name: item.name,
          ageGroup: item.minAge + "-" + item.maxAge + " år",
          imageUrl: item.asset.url,
        };
      })
      .filter((item: any) =>
        query?.trim()
          ? item.name.toUpperCase().includes(query.toUpperCase())
          : true,
      );
    return (
      <>
        <Heading content="Søg" padding={2} />
        <Search />
        <Activities activities={filteredData} />
      </>
    );
  } catch (err: any) {
    throw new Error(err);
  }
}
