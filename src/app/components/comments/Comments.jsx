import React from "react";
import styles from "./comments.module.css";

import Link from "next/link";
import Image from "next/image";

const Comments = () => {
  const status = "authenticated";

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Comments</h1>

      {status === "authenticated" ? (
        <div className={styles.write}>
          <textarea placeholder="Write a comment.." className={styles.input} />
          <button className={styles.button}>Send</button>
        </div>
      ) : (
        <Link href="/login">Login to write a comment</Link>
      )}
      <div className={styles.comments}>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              className={styles.image}
              src="/culture.png"
              alt=""
              
              width={18}
              height={18}
            />
            <div className={styles.userInfo}>
              <span className={styles.username}>Rahul Paul Chowdhurry</span>
              <span className={styles.date}>20.10.23</span>
            </div>
          </div>
          <p className={styles.des}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe rem
            labore officiis quidem tenetur, dolor neque voluptatum at atque odio
            reprehenderit porro delectus omnis recusandae facere soluta? Nisi,
            doloremque similique?
          </p>
        </div>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              className={styles.image}
              src="/culture.png"
              alt=""
              
              width={18}
              height={18}
            />
            <div className={styles.userInfo}>
              <span className={styles.username}>Rahul Paul Chowdhurry</span>
              <span className={styles.date}>20.10.23</span>
            </div>
          </div>
          <p className={styles.des}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe rem
            labore officiis quidem tenetur, dolor neque voluptatum at atque odio
            reprehenderit porro delectus omnis recusandae facere soluta? Nisi,
            doloremque similique?
          </p>
        </div>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              className={styles.image}
              src="/culture.png"
              alt=""
              
              width={18}
              height={18}
            />
            <div className={styles.userInfo}>
              <span className={styles.username}>Rahul Paul Chowdhurry</span>
              <span className={styles.date}>20.10.23</span>
            </div>
          </div>
          <p className={styles.des}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe rem
            labore officiis quidem tenetur, dolor neque voluptatum at atque odio
            reprehenderit porro delectus omnis recusandae facere soluta? Nisi,
            doloremque similique?
          </p>
        </div>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              className={styles.image}
              src="/culture.png"
              alt=""
              
              width={18}
              height={18}
            />
            <div className={styles.userInfo}>
              <span className={styles.username}>Rahul Paul Chowdhurry</span>
              <span className={styles.date}>20.10.23</span>
            </div>
          </div>
          <p className={styles.des}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe rem
            labore officiis quidem tenetur, dolor neque voluptatum at atque odio
            reprehenderit porro delectus omnis recusandae facere soluta? Nisi,
            doloremque similique?
          </p>
        </div>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              className={styles.image}
              src="/culture.png"
              alt=""
              
              width={18}
              height={18}
            />
            <div className={styles.userInfo}>
              <span className={styles.username}>Rahul Paul Chowdhurry</span>
              <span className={styles.date}>20.10.23</span>
            </div>
          </div>
          <p className={styles.des}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe rem
            labore officiis quidem tenetur, dolor neque voluptatum at atque odio
            reprehenderit porro delectus omnis recusandae facere soluta? Nisi,
            doloremque similique?
          </p>
        </div>
      </div>
    </div>
  );
};

export default Comments;
