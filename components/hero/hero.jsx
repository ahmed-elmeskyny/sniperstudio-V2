//next
import Link from "next/link";
import Image from "next/image";

//styles
import styles from "./hero.module.scss";

//react-icons
import { ImTarget } from "react-icons/im";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.heroImage}>
        <div className={styles.img1}>
          <img
            src="/cloud1.png"
            width="100vw"
            height="100vw"
            style={{ marginLeft: "55%" }}
          ></img>
          <img src="/hero.svg" width="400vw" height="400vw"></img>
        </div>
        <div className={styles.img2}>
          <img
            src="/cloud2.png"
            width="200vw"
            height="150vw"
            style={{ marginBottom: "100%" }}
          ></img>
          <img
            src="/cloud2.png"
            width="100vw"
            height="80vw"
            style={{ margintop: "1000px" }}
          ></img>
        </div>
      </div>
      <div className={styles.heroText}>
        <div className={styles.logo}>
          <ImTarget style={{ fontSize: "1.2vw" }}></ImTarget>
          <span>SNIPER STUDIO</span>
        </div>
        <p className={styles.agency}>CREATIVE DEGETAL AGENCY </p>
        <div className={styles.slogan}>
          <p>BUILDING DIGITAL PRODUCTS , BRANDS </p>
        </div>

        <div className={styles.description}>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting ,
            Lorem Ipsum is simply dummy text oftext of the printing and
            typesetting
          </p>
        </div>
        <div className={styles.links}>
          <Link href="/contact">
            <a className={styles.link}>Explore</a>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Hero;
