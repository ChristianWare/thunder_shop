import { Nav } from "@/components/Nav/Nav";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Nav />
      root
      {children}
    </div>
  );
}
