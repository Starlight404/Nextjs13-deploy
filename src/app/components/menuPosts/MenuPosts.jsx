import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from './menuPosts.module.css'

const MenuPosts = ({ withImage }) => {
  return (
    <div className={styles.items}>
      <Link href="/" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image src="/culture.png" alt="" fill className={styles.image} />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category}  ${styles.travel}`}>Travel</span>
          <h3 className={styles.postTitle}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta,
          </h3>
          <div className={styles.detail}>
            <span className={styles.username}>Rahul</span>
            <span className={styles.date}>--27.12.96</span>
          </div>
        </div>
      </Link>
      <Link href="/" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image src="/culture.png" alt="" fill className={styles.image} />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category}  ${styles.Culture}`}>
            Culture
          </span>
          <h3 className={styles.postTitle}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta,
          </h3>
          <div className={styles.detail}>
            <span className={styles.username}>Rahul</span>
            <span className={styles.date}>--27.12.96</span>
          </div>
        </div>
      </Link>
      <Link href="/" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image src="/culture.png" alt="" fill className={styles.image} />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category}  ${styles.Food}`}>Food</span>
          <h3 className={styles.postTitle}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta,
          </h3>
          <div className={styles.detail}>
            <span className={styles.username}>Rahul</span>
            <span className={styles.date}>--27.12.96</span>
          </div>
        </div>
      </Link>
      <Link href="/" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image src="/culture.png" alt="" fill className={styles.image} />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category}  ${styles.Fashion}`}>
            Fashion
          </span>
          <h3 className={styles.postTitle}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta,
          </h3>
          <div className={styles.detail}>
            <span className={styles.username}>Rahul</span>
            <span className={styles.date}>--27.12.96</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MenuPosts;
