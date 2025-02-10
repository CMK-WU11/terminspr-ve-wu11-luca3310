import type { Metadata } from "next";
import Footer from "@/components/main/Footer";

export const metadata: Metadata = {
    title: "velkommen | Landrup Dans",
    description: "på denne hjemmeside vil du kunne tilmelde dig danse kurser",
};

export default function layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main className="w-screen min-h-screen pb-[10rem] bg-primary">
            {children}
            <Footer />
        </main>
    );
}
