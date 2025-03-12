import AddToCart from "@/components/shared/AddToCart/AddToCart";
import styles from "./ProductDetailsPage.module.css";
import Button from "@/components/shared/Button/Button";
import LayoutWrapper from "@/components/shared/LayoutWrapper";
import ProductImages from "@/components/shared/Product/ProductImages/ProductImages";
import { getproductBySlug } from "@/lib/actions/product.actions";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function ProductDetailsPage({ params }: PageProps) {
  const { slug } = await params;
  const product = await getproductBySlug(slug);
  if (!product) notFound();

  return (
    <main>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.left}>
            <div className={styles.leftContent}>
              <ProductImages images={product.images} />
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.rightContent}>
              <h1 className={styles.productName}>Product Details Page</h1>
              <p>{product.name}</p>
              <p>{product.brand}</p>
              <p>{product.category}</p>
              <p>
                {product.rating} of {product.numReviews} Reviews
              </p>
              <p>{product.price}</p>
              <p>{product.description}</p>
              {product.stock > 0 ? <p>In Stock</p> : <p>Out of Stock</p>}
              {product.stock > 0 && (
                <>
                  <AddToCart
                    item={{
                      productId: product.id,
                      name: product.name,
                      slug: product.slug,
                      price: product.price,
                      qty: 1,
                      image: product.images![0],
                    }}
                  />
                </>
              )}
            </div>
          </div>
        </div>
      </LayoutWrapper>
    </main>
  );
}
