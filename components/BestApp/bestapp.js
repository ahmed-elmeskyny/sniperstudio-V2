//next
import Link from "next/link";
//style
import styles from "./bestapp.module.scss";

export const BestApp = () => {
  return (
    <div className={styles.container}>
      <div className={styles.videoContainer}>
        <video
          src="/bestapp.mp4"
          autoPlay
          loop
          muted
          playsInline
          className={styles.app}
        ></video>
      </div>
      <div className={styles.appInfo}>
        <div className={styles.img}>
          <img src="/18.png" className={styles.cloud}></img>
        </div>
        <div className={styles.svg}>
          <img src="/bestApp.svg" className={styles.bestAppSvg}></img>
        </div>
        <p className={styles.appType}>ANDROID APP</p>
        <h1>UPTIME </h1>
        <h1>MAKE LEARNING FUN </h1>
        <p className={styles.appDescription}>
          Lorem Ipsum is simply dummy text of the printing and typesetting ,
          Lorem Ipsum is simply dummy text oftext of the printing and
          typesetting
        </p>
        <div className={styles.links}>
          <Link href="/work">
            <a className={styles.link}>Explore More </a>
          </Link>
          <img src="/googleplay.png"></img>
        </div>
        <div className={styles.technologies}>
          <p>With : </p>
          <img
            src="/android.svg"
            height="30px"
            width="30px"
            style={{ marginRight: "5px" }}
          ></img>
          <img
            src="/react.svg"
            height="30px"
            width="30px"
            style={{ marginRight: "5px" }}
          ></img>
          <img
            src="/firebase.svg"
            height="30px"
            width="30px"
            style={{ marginRight: "5px" }}
          ></img>
          <img
            src="/figma.svg"
            height="30px"
            width="30px"
            style={{ marginRight: "5px" }}
          ></img>
        </div>
      </div>
    </div>
  );
};
