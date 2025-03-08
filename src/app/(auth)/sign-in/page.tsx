import styles from "./SignInPage.module.css";
import LayoutWrapper from "@/components/shared/LayoutWrapper";
import Image from "next/image";
import Img1 from "../../../../public/images/login.jpg";
import Check from "../../../../public/icons/check.svg";
import Button from "@/components/shared/Button/Button";
import { Metadata } from "next";
import CredentialSignInForm from "./CredentialSignInForm/CredentialSignInForm";
import { auth } from "../../../../auth";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Sign In",
};

const data = [
  {
    id: 1,
    title: "Exclusive Offers and Discounts",
  },
  {
    id: 2,
    title: "Faster Checkout Process",
  },
  {
    id: 3,
    title: "Stay Informed",
  },
  {
    id: 4,
    title: "Store multiple addresses",
  },
];

export default async function SignInPage(props: {
  searchParams: Promise<{
    callbackUrl: string;
  }>;
}) {
  const { callbackUrl } = await props.searchParams;

  const session = await auth();

  if (session) {
    return redirect(callbackUrl || "/");
  }

  console.log(session);

  return (
    <section className={styles.container}>
      <div className={styles.imgOverlay}></div>
      <Image
        src={Img1}
        fill
        alt='sign in image'
        title='sign in image'
        priority={true}
        className={styles.img}
      />
      <LayoutWrapper>
        <div className={styles.parent}>
          <div className={styles.content}>
            <div className={styles.left}>
              <h1 className={styles.heading}>Login</h1>
              <CredentialSignInForm />
            </div>
            <div className={styles.right}>
              <h2 className={styles.headingii}>Create an account</h2>
              <ul className={styles.mapContainer}>
                {data.map((x) => (
                  <li className={styles.item} key={x.id}>
                    <Check className={styles.icon} /> {x.title}
                  </li>
                ))}
              </ul>
              <div className={styles.btnContainer}>
                <Button
                  btnType='secondary'
                  text='Create an account'
                  href='/sign-up'
                />
              </div>
            </div>
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
}
