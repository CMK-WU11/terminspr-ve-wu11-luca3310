import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "velkommen | Landrup Dans",
    description: "på denne hjemmeside vil du kunne tilmelde dig danse kurser",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="da">
            <body className="antialiased font-ubuntu">{children}</body>
        </html>
    );
}
