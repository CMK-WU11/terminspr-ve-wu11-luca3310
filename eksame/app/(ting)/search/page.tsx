import Activities from "@/components/Activities";
import Heading from "@/components/Heading";
import Search from "@/components/Search";

export default async function søg() {
  try {
    const res = await fetch("http://localhost:4000/api/v1/activities");
    const data = await res.json();
    console.log(data);
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
        <Heading content="Søg" padding={2} />
        <Search />
        <Activities activities={filteredData} />
      </>
    );
  } catch (err: any) {
    throw new Error(err);
  }
}
