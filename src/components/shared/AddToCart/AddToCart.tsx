"use client";

import styles from "./AddToCart.module.css";
import { CartItem } from "../../../../types";
import FalseButton from "../FalseButton/FalseButton";
import { useRouter } from "next/navigation";
import Plus from "../../../../public/icons/plus.svg";
import toast from "react-hot-toast";


interface Props {
  item: CartItem;
}

export default function AddToCart({ item }: Props) {
  return (
    <div className={styles.container}>
      <>add to cart</>
    </div>
  );
}
