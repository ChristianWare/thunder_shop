"use client";

import Button from "@/components/shared/Button/Button";
import styles from "./CredentialSignInForm.module.css";
import { signInDefaultValues } from "@/lib/constants";

export default function CredentialSignInForm() {
  return (
    <form className={styles.container}>
      <div className={styles.labelInputBox}>
        <label htmlFor='email' className={styles.label}>
          Email
        </label>
        <input
          id='email'
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
          type='password'
          required
          defaultValue={signInDefaultValues.password}
          autoComplete='new-password'
          maxLength={500}
        />
      </div>
      <div className={styles.btnContainer}>
        <Button btnType='primary' text='Login' href='#' />
      </div>
    </form>
  );
}
