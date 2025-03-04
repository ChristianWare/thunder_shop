import Link from "next/link";
import styles from "./CategoryCard.module.css";
import Image, { StaticImageData } from "next/image";

interface Props {
  src: StaticImageData;
  category: string;
}

export default function CategoryCard({ src, category }: Props) {
  return (
    <article className={styles.container}>
      <div className={styles.content}>
        {/* <div className={styles.imgOverlay}></div> */}
        <Image src={src} alt='' title='' fill className={styles.img} />
        <div className={styles.contentChildren}>
          <div className={styles.left}>
            <Link href='/' className={styles.btn} lang='en'>
              {category}
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
