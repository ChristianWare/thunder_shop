import { Nav } from "@/components/shared/Nav/Nav";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <Nav />
      {children}
    </main>
  );
}
