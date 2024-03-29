import Image from "next/image";
import styles from "./card.module.css";
import Link from "next/link";

const Card = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image src="/p1.jpeg" alt="" fill className={styles.image}/>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.details}>
          <span className={styles.date}>11.02.23 - </span>
          <span className={styles.category}>Culture</span>
        </div>
        <Link href="/">
          <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h1>
        </Link>

        <p className={styles.des}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
          consequatur, veniam et recusandae labore non vitae, similique suscipit
          rem ea ut, veritatis dolorem doloribus nemo iste temporibus. Totam,
          optio ipsam.
        </p>
        <Link href="/" className={styles.link}>Read More</Link>
      </div>
    </div>
  );
};

export default Card;
