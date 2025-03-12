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
    try {
      const res = await addItemToCart(item);
      if (!res) {
        toast.error("Failed to add item to cart");
        return;
      }
      if (!res.success) {
        // Ensure message is a string even if it's a Promise
        const message =
          typeof res.message === "string" ? res.message : await res.message;
        toast.error(message);
      } else {
        toast.success("Item added to cart");
      }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      toast.error("An error occurred while adding the item to the cart");
    }
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
