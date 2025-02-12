import LoginForm from "@/components/LoginForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "login",
  description: "her kan du logge ind på Landrup Dans",
};
export default function loginForm() {
  return (
    <main className="flex flex-col gap-16 justify-end items-center pb-12 w-screen h-screen bg-center bg-no-repeat bg-cover bg-[url(/images/splash-image.jpg)]">
      <div className="flex overflow-hidden absolute top-0 left-0 justify-center items-center w-screen h-screen">
        <div className="opacity-50 rotate-[62deg] h-[80rem] aspect-[1/3] bg-[#5E2E53]"></div>
      </div>
      <LoginForm />
    </main>
  );
}
