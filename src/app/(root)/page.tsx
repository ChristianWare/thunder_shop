import Hero from "@/components/homePage/hero/Hero";
import sampleData from "../../../db/sample-data";
import ProductList from "@/components/shared/Product/ProductList/ProductList";

export default function Home() {
  console.log(sampleData);

  return (
    <main>
      <Hero />
      <ProductList
        data={sampleData.products}
        title='Newest Arrivals'
        limit={4}
      />
    </main>
  );
}
