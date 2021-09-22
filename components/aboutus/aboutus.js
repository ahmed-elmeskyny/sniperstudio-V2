//next

//style
import styles from "./aboutus.module.scss";

export const Aboutus = () => {
  return (
    <div className={styles.container}>
      <div className={styles.aboutus}>
        <div className={styles.img}>
          <img
            src="/about.svg"
            width="300vw"
            height="300vw"
            className={styles.aboutSvg}
          ></img>
        </div>
        <div>
          <h1>
            Who we are <div></div>{" "}
          </h1>
          <div className={styles.text}>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not
            </p>
            <p>
              here are many variations of passages of Lorem Ipsum available, but
              the majority have suffered alteration in some form, by injected
              humour, or randomised words which don't look even slightly
              believable. If you are going to use a passage of Lorem Ipsum, you
              need to be sure there isn't anything embarrassing
            </p>
            <p>
              {" "}
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>
          </div>
        </div>
        <div className={styles.img1}>
          <img
            src="/28.png"
            width="120vw"
            height="100vw"
            className={styles.cloud}
          ></img>
        </div>
      </div>
    </div>
  );
};
