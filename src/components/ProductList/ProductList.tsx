import styles from "./ProductList.module.css";
import LayoutWrapper from "../LayoutWrapper";
import ProductPreview from "../ProductPreview/ProductPreview";

export default function ProductList() {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
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
