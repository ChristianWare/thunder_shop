import LayoutWrapper from "../LayoutWrapper";
import styles from "./Hero.module.css";
import ProductPreview from "../ProductPreview/ProductPreview";
import ScrollHorizontalText from "../ScrollHorizontalText/ScrollHorizontalText";
import Thunder from "../../../public/icons/lightning.svg";

export default function Hero() {
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
            </div>
            <div className={styles.right}>
              <ProductPreview />
            </div>
          </div>
        </div>
        <ScrollHorizontalText text='Returns extends over a period of 14 days' />
      </LayoutWrapper>
    </section>
  );
}
