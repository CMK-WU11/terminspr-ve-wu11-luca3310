"use client";

import Button from "@/components/Button";

export default function Home() {
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
