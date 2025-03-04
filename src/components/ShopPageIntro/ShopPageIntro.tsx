"use client";

import styles from "./ShopPageIntro.module.css";
import LayoutWrapper from "../LayoutWrapper";
import Link from "next/link";
import { usePathname } from "next/navigation";


const data = [
  {
    id: 1,
    title: "all",
    href: "/shop",
  },
  {
    id: 2,
    title: "bikes",
    href: "/category/bikes",
  },
  {
    id: 3, // Changed from 2
    title: "gear",
    href: "/category/gear",
  },
  {
    id: 4, // Changed from 2
    title: "parts",
    href: "/category/parts",
  },
];

export default function ShopPageIntro() {
  const pathname = usePathname();

   const getClassName = (href: string) => {
     if (pathname === href || (pathname === "/shop" && href === "/shop")) {
       return `${styles.title} ${styles.active}`;
     }
     return styles.title;
   };

  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <h1 className={styles.heading}>Products</h1>
        <div className={styles.bottom}>
          <ul className={styles.categoryList}>
            {data.map((x) => (
              <li key={x.id} className={styles.titleContainer}>
                <Link href={x.href} className={getClassName(x.href)}>
                  {x.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </LayoutWrapper>
    </section>
  );
}
