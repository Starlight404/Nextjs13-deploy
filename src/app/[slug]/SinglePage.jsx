import React from "react";
import styles from "./singlePage.module.css";
import Menu from "../components/Menu/Menu";
import Image from "next/image";
import Comments from "../components/comments/Comments";
const SinglePage = () => {
  return (
    <div className={styles.container}>
      SinglePage
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.textTitle}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A totam,
            explicabo, omnis incidunt beatae quos voluptates esse sint maxime
            commodi dolorem quae, veritatis reprehenderit reiciendis assumenda
            laborum. Voluptates, maiores quaerat?
          </h1>
          <div className={styles.user}>
            <div className={styles.userImageContainer}>
              <Image src="/travel.png" alt="" fill className={styles.avatar} />
            </div>
            <div className={styles.userTextContainer}>
              <span className={styles.username}>Rv Rekless</span>
              <span className={styles.date}>05.26.23</span>
            </div>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image src="/travel.png" alt="" fill className={styles.image} />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <div className={styles.desc}>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
            <h2>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
              error beatae reiciendis obcaecati voluptates nobis delectus
              laudantium nisi nam temporibus? Iste a iure amet quod molestias
              odio vero! Cumque, nobis!
            </h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
          </div>
          <div className={styles.comment}>
            <Comments />
          </div>
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default SinglePage;
