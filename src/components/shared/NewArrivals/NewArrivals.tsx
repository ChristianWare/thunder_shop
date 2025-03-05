import styles from './NewArrivals.module.css'
import Link from "next/link";
import LayoutWrapper from "../LayoutWrapper";
import ProductPreview from "../ProductPreview/ProductPreview";

export default function NewArrivals() {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.top}>
          <h2 className={styles.heading}>
            New <br /> Arrivals
          </h2>
          <Link href='/shop' className={styles.shopAll}>
            Shop all
          </Link>
        </div>
        <div className={styles.content}>
          <ProductPreview />
          <ProductPreview />
          <ProductPreview />
          <ProductPreview />
          <ProductPreview />
          <ProductPreview />
          <ProductPreview />
        </div>
      </LayoutWrapper>
    </section>
  );
}