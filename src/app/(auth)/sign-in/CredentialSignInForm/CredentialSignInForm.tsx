"use client";

import styles from "./CredentialSignInForm.module.css";
import { signInDefaultValues } from "@/lib/constants";

export default function CredentialSignInForm() {
  return (
    <form className={styles.container}>
      <div className={styles.labelInputBox}>
        <label htmlFor='email'>
          Email <span className={styles.required}>*</span>
        </label>
        <input
          id='email'
          type='email'
          required
          defaultValue={signInDefaultValues.email}
          placeholder='So I can respond. I won&#39;t send you spam.'
          maxLength={500}
        />
      </div>
      <div className={styles.labelInputBox}>
        <label htmlFor='password'>
          password <span className={styles.required}>*</span>
        </label>
        <input
          id='password'
          type='password'
          required
          defaultValue={signInDefaultValues.email}
          placeholder='So I can respond. I won&#39;t send you spam.'
          maxLength={500}
        />
      </div>
    </form>
  );
}
