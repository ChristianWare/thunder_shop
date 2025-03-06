import Hero from "@/components/homePage/hero/Hero";
import ProductList from "@/components/shared/Product/ProductList/ProductList";
import { getLatestProducts } from "@/lib/actions/product.actions";

export default async function Home() {
  const latestProducts = await getLatestProducts();

  return (
    <main>
      <Hero data={latestProducts} limit={1} />
      <ProductList
        data={latestProducts}
        title='New Arrivals'
        limit={4}
      />
    </main>
  );
}
