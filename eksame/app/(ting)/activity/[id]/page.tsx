interface Activity {
  id: string;
  name: string;
  ageGroup: string;
  imageUrl: string;
  description: string;
}

export default async function aktivitet({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  try {
    const res = await fetch(`http://localhost:4000/api/v1/activities/${id}`);
    const data = await res.json();
    const activity: Activity = {
      id: data.id,
      name: data.name,
      ageGroup: data.minAge + "-" + data.maxAge + " år",
      imageUrl: data.asset.url,
      description: data.description,
    };
    return (
      <>
        <img src={activity.imageUrl} />
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
