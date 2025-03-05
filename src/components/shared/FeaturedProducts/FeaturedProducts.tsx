import styles from "./FeaturedProducts.module.css";
import { getWixServerClient } from "@/lib/wix-client.server";
import { getCollectionBySlug } from "@/wix-api/collections";
import { queryProducts } from "@/wix-api/products";
import Product from "@/components/shared/Product/Product";
import LayoutWrapper from "../LayoutWrapper";

export default async function FeaturedProducts() {
  const wixClient = await getWixServerClient();

  const collection = await getCollectionBySlug(wixClient, "featured-products");

  if (!collection?._id) {
    return (
      <section className={styles.container}>
        <LayoutWrapper>
          <div className={styles.content}>
            <h2 className={styles.heading}>Featured Honey</h2>
            <div className={styles.bottom}>
              {[...Array(6)].map((_, index) => (
                <Product key={index} isLoading />
              ))}
            </div>
          </div>
        </LayoutWrapper>
      </section>
    );
  }

  const featuredProducts = await queryProducts(wixClient, {
    collectionIds: collection._id,
  });

  if (!featuredProducts.items.length) {
    return (
      <section className={styles.container}>
        <LayoutWrapper>
          <div className={styles.content}>
            <h2 className={styles.heading}>Popular</h2>
            <div className={styles.bottom}>
              {[...Array(6)].map((_, index) => (
                <Product key={index} isLoading />
              ))}
            </div>
          </div>
        </LayoutWrapper>
      </section>
    );
  }

  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          <h2 className={styles.heading}>Featured Honey</h2>
          <div className={styles.bottom}>
            {featuredProducts.items.map((product) => (
              <Product key={product._id} product={product} />
            ))}
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
}
