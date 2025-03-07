import styles from "./Button.module.css";
import { FC } from "react";
import Link from "next/link";

interface Props {
  href: string;
  text: string;
  btnType: string;
  target?: string;
  onClick?: () => void;
}

const Button: FC<Props> = ({
  href = "",
  text,
  btnType,
  target = "",
  onClick,
}) => {
  return (
    <button className={styles.container} onClick={onClick}>
      <Link
        href={href}
        className={`${styles.btn} ${styles[btnType]}`}
        target={target}
      >
        {text}
      </Link>
    </button>
  );
};
export default Button;
