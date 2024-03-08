import React from "react";
import styles from "./featured.module.css";
import Image from "next/image";

const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Hello to Rekless blog</b> and this is my story that i am going to
        share{" "}
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/p1.jpeg" alt="" fill className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
            suscipit eaque a libero, quod magni laborum voluptatum numquam nisi
            esse vitae magnam quisquam accusantium? Suscipit soluta esse quam
            temporibus nam.
          </h1>
          <p className={styles.postDescription}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
            delectus nam, nostrum aut dolores nesciunt ipsum illo quod odit
            fugiat quas modi quae consequatur reiciendis quasi hic error eius
            adipisci!
          </p>
          <button className={styles.button}> Read more</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
