export default function Heading({
  content,
  padding,
}: {
  content: string;
  padding: number;
}) {
  return (
    <h1 className={`p-${padding} px-${padding + 3} text-lg text-primaryWhite`}>
      {content}
    </h1>
  );
}
