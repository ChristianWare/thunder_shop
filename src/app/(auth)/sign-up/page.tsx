import { Metadata } from "next";
import styles from "./SignUpPage.module.css";
import { auth } from "../../../../auth";
import { redirect } from "next/navigation";
import Image from "next/image";
import Img1 from "../../../../public/images/login.jpg";
import LayoutWrapper from "@/components/shared/LayoutWrapper";
import Button from "@/components/shared/Button/Button";
import SignUpForm from "./SignUpForm/SignUpForm";

export const metadata: Metadata = {
  title: "Sign Up",
};

export default async function page(props: {
  searchParams: Promise<{
    callbackUrl: string;
  }>;
}) {
  const { callbackUrl } = await props.searchParams;

  const session = await auth();

  if (session) {
    return redirect(callbackUrl || "/");
  }

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
              <h1 className={styles.heading}>Register</h1>
              <SignUpForm />
            </div>
            <div className={styles.right}>
              <div className={styles.btnContainer}>
                <Button
                  btnType='secondary'
                  text='Already have an account?'
                  href='/sign-in'
                />
              </div>
            </div>
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
}
