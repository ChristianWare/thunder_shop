/* eslint-disable @typescript-eslint/no-explicit-any */
import Link from "next/link";
import LayoutWrapper from "../../LayoutWrapper";
import styles from "./ProductList.module.css";
import ProductCard from "../ProductCard/ProductCard";

interface Props {
  data: any;
  title?: string;
  limit?: number;
}

export default function ProductList({ data, title, limit }: Props) {
  const limitedData = limit ? data.slice(0, limit) : data;

  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.top}>
          <h2 className={styles.title}>{title}</h2>
          <Link href='/shop' className={styles.shopAll}>
            Shop All
          </Link>
        </div>
        {data.length > 0 ? (
          <div className={styles.content}>
            {limitedData.map((product: any) => (
              //   <div key={index}>{product.name}</div>
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        ) : (
          <div>
            <p>No Products Found</p>
          </div>
        )}
      </LayoutWrapper>
    </section>
  );
}
