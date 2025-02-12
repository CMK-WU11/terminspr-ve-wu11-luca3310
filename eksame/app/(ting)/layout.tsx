import Footer from "@/components/main/Footer";

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
