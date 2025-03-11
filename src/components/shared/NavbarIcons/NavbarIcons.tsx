import styles from "./NavbarIcons.module.css";
import Cart from "../../../../public/icons/cart.svg";
import Link from "next/link";
import { auth } from "../../../../auth";
// import Button from "../Button/Button";

export default async function NavbarIcons() {
  const session = await auth();
  // const firstInitial = session?.user?.name?.charAt(0).toUpperCase() ?? "";

  return (
    <div className={styles.container}>
      <div className={styles.accountContainer}>
        {session ? (
          <Link href='/account'>My Account</Link>
        ) : (
          // <Button btnType='primary' href='/account' text='My Account' />
          <Link href='sign-in'>Sign In</Link>
        )}
      </div>
      <div className={styles.cartParent}>
        <Cart className={styles.icon} />
        <span className={styles.counter}>
          {/* {totalQuantity < 10 ? totalQuantity : "9+"} */}9
        </span>
      </div>
    </div>
  );
}
