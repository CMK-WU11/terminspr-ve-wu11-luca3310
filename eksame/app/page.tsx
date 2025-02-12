import Button from "@/components/Button";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "velkommen",
  description: "på denne hjemmeside vil du kunne tilmelde dig danse kurser",
};

export default async function Home() {
  return (
    <main className="flex flex-col gap-16 justify-end items-center pb-12 w-screen h-screen bg-center bg-no-repeat bg-cover bg-[url(/images/splash-image.jpg)]">
      <div className="w-full">
        <div className="h-auto w-[16rem]">
          <img src="images/logo.png" className="w-full h-full object-fit" />
        </div>
      </div>
      <Button href="activities" content="Kom i gang" />
    </main>
  );
}
