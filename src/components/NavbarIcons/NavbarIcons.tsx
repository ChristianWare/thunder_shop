"use client";

import styles from "./NavbarIcons.module.css";
import { useState } from "react";
import Cart from "../../../public/icons/cart.svg";
import User from "../../../public/icons/user.svg";
import Bell from "../../../public/icons/bell.svg";
import Modal from "../Modal/Modal";
import Link from "next/link";

export default function NavbarIcons() {
  const [userOpen, setUserOpen] = useState(false);
  const [bellOpen, setBellOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  // Temporary:
  const isLoggedIn = false;

  return (
    <div className={styles.container}>
      <User className={styles.icon} onClick={() => setUserOpen(true)} />
      <Bell className={styles.icon} onClick={() => setBellOpen(true)} />
      <div className={styles.cartParent}>
        <Cart className={styles.icon} onClick={() => setCartOpen(true)} />
        <span className={styles.counter}>
          {/* {totalQuantity < 10 ? totalQuantity : "9+"} */}9
        </span>
      </div>
      <Modal isOpen={userOpen} onClose={() => setUserOpen(false)}>
        <div>
          {isLoggedIn ? (
            <>User Content here</>
          ) : (
            <Link href='/login'>Please Log In</Link>
          )}
        </div>
      </Modal>
      <Modal isOpen={bellOpen} onClose={() => setBellOpen(false)}>
        <div>Notifications here</div>
      </Modal>
      <Modal isOpen={cartOpen} onClose={() => setCartOpen(false)}>
        <div>Cart Content here</div>
      </Modal>
    </div>
  );
}
