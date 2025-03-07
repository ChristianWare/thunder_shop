/* eslint-disable @typescript-eslint/no-explicit-any */
import LayoutWrapper from "../../shared/LayoutWrapper";
import styles from "./Hero.module.css";
// import ProductPreview from "../../shared/ProductPreview/ProductPreview";
import ScrollHorizontalText from "../../shared/ScrollHorizontalText/ScrollHorizontalText";
import Thunder from "../../../../public/icons/lightning.svg";
import ProductCard from "@/components/shared/Product/ProductCard/ProductCard";
// import Button from "@/components/shared/Button/Button";

interface Props {
  data: any;
  limit?: number;
}

export default function Hero({ data, limit }: Props) {
  const limitedData = limit ? data.slice(0, limit) : data;

  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.imgOverlay}></div>
          <div className={styles.contentChildren}>
            <div className={styles.left}>
              <h1 className={styles.heading} lang='en'>
                RISE WITH <br /> THE{" "}
                <span className={styles.thunder}>
                  THUNDER
                  <Thunder className={styles.icon} />
                </span>
              </h1>
              <p className={styles.copy}>
                Your shop for bicycles <br /> and e-bikes in SWitzerland.
              </p>
              {/* <Button text='test' btnType='primary' href='/' /> */}
            </div>
            <div className={styles.right}>
              {limitedData.map((product: any) => (
                <ProductCard key={product.slug} product={product} />
              ))}
            </div>
          </div>
        </div>
        <ScrollHorizontalText text='Returns extends over a period of 14 days' />
      </LayoutWrapper>
    </section>
  );
}
