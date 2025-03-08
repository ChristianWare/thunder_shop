"use client";

import styles from "./CredentialSignInForm.module.css";
import FalseButton from "@/components/shared/FalseButton/FalseButton";
import { signInDefaultValues } from "@/lib/constants";
import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { signInWithCredentials } from "@/lib/actions/user.actions";
import { useSearchParams } from "next/navigation";

export default function CredentialSignInForm() {
  const [data, action] = useActionState(signInWithCredentials, {
    success: false,
    message: "",
  });

  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/";

  const SignInButton = () => {
    const { pending } = useFormStatus();

    return (
      <FalseButton
        disabled={pending}
        btnType='primary'
        text={pending ? "Signing In..." : "Sign In"}
      />
    );
  };

  return (
    <form className={styles.container} action={action}>
      <input type='hidden' name='callbackUrl' value={callbackUrl} />

      <div className={styles.labelInputBox}>
        <label htmlFor='email' className={styles.label}>
          Email
        </label>
        <input
          id='email'
          name='email'
          type='email'
          required
          defaultValue={signInDefaultValues.email}
          autoComplete='off'
          maxLength={500}
        />
      </div>
      <div className={styles.labelInputBox}>
        <label htmlFor='password' className={styles.label}>
          Password
          {/* password <span className={styles.required}>*</span> */}
        </label>
        <input
          id='password'
          name='password'
          type='password'
          required
          defaultValue={signInDefaultValues.password}
          autoComplete='new-password'
          maxLength={500}
        />
      </div>
      <div className={styles.btnContainer}>
        <SignInButton />
      </div>
      {data && !data.success && (
        <div>
          <p className={styles.errorMessage}>{data.message}</p>
        </div>
      )}
    </form>
  );
}
