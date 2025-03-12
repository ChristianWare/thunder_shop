"use client";

import styles from "./AddToCart.module.css";
import { CartItem } from "../../../../types";
import FalseButton from "../FalseButton/FalseButton";
// import { useRouter } from "next/navigation";
// import Plus from "../../../../public/icons/plus.svg";
import toast from "react-hot-toast";
import { addItemToCart } from "@/lib/actions/cart.actions";

interface Props {
  item: CartItem;
}

export default function AddToCart({ item }: Props) {
  //   const router = useRouter();
  const handleAddToCart = async () => {
    const res = await addItemToCart(item);

    if (!res.success) {
      toast.error("there was an issue");
    } else {
      toast.success("Item added to cart");
    }

    return;
  };
  // Handle success add to cart

  return (
    <div className={styles.container}>
      {/* <>add to cart</> */}
      <FalseButton
        btnType='primary'
        text='Add to cart'
        onClick={handleAddToCart}
      />
    </div>
  );
}
