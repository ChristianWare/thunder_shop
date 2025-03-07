"use client";
import styles from "./ProductImages.module.css";
import { useState } from "react";
import Image from "next/image";

interface Props {
  images: string[];
}

export default function ProductImages({ images }: Props) {
  const [current, setCurrent] = useState(0);

  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src={images[current]}
          alt='product image'
          title='product image'
          fill
          className={styles.img}
        />
        <div className={styles.imagePreviewSection}>
          {images.map((image, index) => (
            <div
              key={image}
              onClick={() => setCurrent(index)}
              className={
                current === index
                  ? styles.imgPreviewActive
                  : styles.imgPreviewNotActive
              }
            >
              <Image
                src={image}
                alt='image preview'
                title='image preview'
                width={75}
                height={75}
                className={styles.imgPreview}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
