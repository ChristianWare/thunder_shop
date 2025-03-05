/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import Link from "next/link";
import styles from "./ProductCard.module.css";

interface Props {
  product: any;
}

export default function ProductCard({ product }: Props) {
  return (
    <div className={styles.container}>
      <Link href='/'>
        <h3 className={styles.heading}>
          Turbo Como SL 5.0 - Smoke /
          <br /> Transparent
        </h3>
        <span className={styles.model}>Diamond</span>
        <div className={styles.imgContainer}>
          <Image
            src={product.images[0]}
            alt={product.name}
            title={product.name}
            priority={true}
            fill
            className={styles.img}
          />
        </div>
        <div className={styles.details}>
          <div className={styles.left}>
            <div className={styles.strikeThrough}>$4,250.00 USD</div>
            <div className={styles.price}>$2,349.00 USD</div>
          </div>
          <div className={styles.right}>
            <div className={styles.btn}>new</div>
            <div className={styles.btnii}>Sale</div>
          </div>
        </div>
      </Link>
    </div>
  );
}
