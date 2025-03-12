"use client";

import styles from "./SignUpForm.module.css";
import { signUpDefaultValues } from "@/lib/constants";
import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { signUpUser } from "@/lib/actions/user.actions";
import { useSearchParams } from "next/navigation";
import FalseButton from "@/components/shared/FalseButton/FalseButton";

export default function SignUpForm() {
  const [data, action] = useActionState(signUpUser, {
    success: false,
    message: "",
  });

  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/";

  const SignUpButton = () => {
    const { pending } = useFormStatus();

    return (
      <FalseButton
        disabled={pending}
        btnType='primary'
        text={pending ? "Submitting..." : "Sign Up"}
      />
    );
  };
  return (
    <form className={styles.container} action={action}>
      <input type='hidden' name='callbackUrl' value={callbackUrl} />
      <div className={styles.labelInputBox}>
        <label htmlFor='email' className={styles.label}>
          Name
        </label>
        <input
          id='name'
          name='name'
          type='text'
          required
          defaultValue={signUpDefaultValues.name}
          autoComplete='off'
          maxLength={500}
        />
      </div>
      <div className={styles.labelInputBox}>
        <label htmlFor='email' className={styles.label}>
          Email
        </label>
        <input
          id='email'
          name='email'
          type='email'
          required
          defaultValue={signUpDefaultValues.email}
          autoComplete='off'
          maxLength={500}
        />
      </div>
      <div className={styles.labelInputBox}>
        <label htmlFor='password' className={styles.label}>
          Password
        </label>
        <input
          id='password'
          name='password'
          type='password'
          required
          defaultValue={signUpDefaultValues.password}
          autoComplete='new-password'
          maxLength={500}
        />
      </div>
      <div className={styles.labelInputBox}>
        <label htmlFor='password' className={styles.label}>
          Confirm Password
        </label>
        <input
          id='confirmPassword'
          name='confirmPassword'
          type='password'
          required
          defaultValue={signUpDefaultValues.confirmPassword}
          autoComplete='confirmPassword'
          maxLength={500}
        />
      </div>
      <div className={styles.btnContainer}>
        <SignUpButton />
      </div>
      {data && !data.success && (
        <div>
          <p className={styles.errorMessage}>{data.message}</p>
        </div>
      )}
    </form>
  );
}
