import { cookies } from "next/headers";

export default async function kalenderDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const cookieStore = await cookies();

  const token = cookieStore.get("landrupToken")?.value;
  const userId = cookieStore.get("landrupUserId")?.value;

  console.log(`http://localhost:4000/api/v1/users/${userId}/roster/${id}`);
  try {
    const res = await fetch(
      `http://localhost:4000/api/v1/users/${userId}/roster/${id}`,
      {
        headers: { Authorization: `Bearer ${token}` },
      },
    );
    const data = await res.json();
    console.log(data);
    return <>detajle</>;
  } catch (err: any) {
    throw new Error(err);
  }
}
