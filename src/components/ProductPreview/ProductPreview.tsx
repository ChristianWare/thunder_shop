import styles from "./ProductPreview.module.css";
import Image from "next/image";
import Model from "../../../public/images/model.webp";

export default function ProductPreview() {
  return (
    <div className={styles.container}>
      <h3 className={styles.heading}>
        Turbo Como SL 5.0 - Smoke /
        <br /> Transparent
      </h3>
      <span className={styles.model}>Diamond</span>
      <div className={styles.imgContainer}>
        <Image src={Model} alt='' title='' fill className={styles.img} />
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
    </div>
  );
}
