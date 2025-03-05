import Hero from "@/components/homePage/hero/Hero";

const delay = (ms: number | undefined) => new Promise((resolve) => setTimeout(resolve, ms));

export default async function Home() {
  await delay(2000)
  return (
    <main>
      <Hero />
    </main>
  );
}
