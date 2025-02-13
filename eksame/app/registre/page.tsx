import RegistreForm from "@/components/RegistreForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "registre",
  description: "her kan du registrere e konto på Landrup Dans",
};
export default function loginForm() {
  return (
    <main className="flex flex-col gap-16 justify-end items-center pb-12 w-screen h-screen bg-center bg-no-repeat bg-cover bg-[url(/images/splash-image.jpg)]">
      <div className="flex overflow-hidden absolute top-0 left-0 justify-center items-center w-screen h-screen">
        <div className="opacity-50 rotate-[62deg] h-[80rem] aspect-[1/3] bg-[#5E2E53]"></div>
      </div>
      <RegistreForm />
    </main>
  );
}
