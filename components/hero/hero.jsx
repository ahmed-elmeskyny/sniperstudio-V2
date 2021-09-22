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
      {/* <div className={styles.heroImage}> */}
      <div className={styles.img1}>
        <img
          src="/planet.svg"
          width="250vw"
          height="250vw"
          // style={{ marginLeft: "30%", transform: "rotate(-20deg)" }}
          className={styles.planet}
        ></img>
      </div>

      <div className={styles.img2}>
        <img
          src="/hero.svg"
          width="400vw"
          height="400vw"
          className={styles.heroSvg}
        ></img>
      </div>

      <div className={styles.img3}>
        <img
          src="/cloud1.png"
          width="150vw"
          height="150vw"
          style={{ marginBottom: "100%" }}
          className={styles.cloud2}
        ></img>
      </div>

      <div className={styles.img4}>
        <img
          src="/cloud2.png"
          width="100vw"
          height="80vw"
          style={{ margintop: "1000px" }}
          className={styles.cloud3}
        ></img>
      </div>
      {/* </div> */}
      <div className={styles.heroText}>
        <div className={styles.logo}>
          <img src="target.png" width="20px" height="20px"></img>
          <span>SNIPER STUDIO</span>
        </div>
        <p className={styles.agency}>CREATIVE DIGITAL AGENCY </p>
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
          <Link href="/about">
            <a className={styles.link}>Explore</a>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Hero;
