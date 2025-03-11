import styles from "./AccountPage.module.css";
// import Link from "next/link";
import { auth } from "../../../../auth";
import { redirect } from "next/navigation";
import { signOutUser } from "@/lib/actions/user.actions";
import FalseButton from "@/components/shared/FalseButton/FalseButton";

export default async function AccountPage() {
  const session = await auth();

  if (!session) {
    return redirect("/sign-in");
  }

  return (
    <main>
      {session ? (
        <div className={styles.container}>
          <div className={styles.content}>
            <div className={styles.left}>
              <h1 className={styles.heading}>Account</h1>
              <span>Order History</span>
              <p>THERE IS NO ORDER TO CONSULT</p>
            </div>
            <div className={styles.right}>
              <form action={signOutUser}>
                <FalseButton text='Sign Out' btnType='primary' />
              </form>
              <span>Addresses</span>
              <p>{session.user?.name}</p>
              <p>{session.user?.email}</p>
            </div>
          </div>
        </div>
      ) : (
        <div className={styles.container}>
          <h1 className={styles.heading}>Please Log in </h1>
        </div>
      )}
    </main>
  );
}
