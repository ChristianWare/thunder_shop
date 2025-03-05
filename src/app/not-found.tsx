import LayoutWrapper from "@/components/shared/LayoutWrapper";
import { Nav } from "@/components/shared/Nav/Nav";
import styles from "./LoadingPage.module.css";
import Thunder from "../../public/icons/lightning.svg";

export default function NotFoundPage() {
  return (
    <main className={styles.container}>
      <Nav />
      <LayoutWrapper>
        <div className={styles.headingContainer}>
          <Thunder className={styles.thunder} />
          <h1 className={styles.heading}>404 Not Found</h1>
        </div>
      </LayoutWrapper>
    </main>
  );
}
