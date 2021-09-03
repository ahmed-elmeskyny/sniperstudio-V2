//next
import Image from "next/image";
import Link from "next/link";
//styles
import styles from "./info.module.scss";

const Info = () => {
  return (
    <div className={styles.descriptionContainer}>
      <div className={styles.text}>
        <div style={{ width: "30%" }}>
          <span>WHAT WE DO </span>
          <h1>WE BUILD APPS, SO YOU DON’T HAVE TO!</h1>
        </div>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus
          rem a sed! Nulla perspiciatis eveniet voluptas id quasi unde atque
          odit sint alias itaque necessitatibus, sed nemo doloribus fugit
          quisquam.
        </p>
      </div>

      <div className={styles.infoContainer}>
        <div className={styles.info}>
          <div className={styles.header}>
            <div className={styles.icon}>
              <img src="/design.png" width="100px" height="100px"></img>
            </div>
            <span>DESIGN</span>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat,
            itaque doloremque. Aperiam velit, itaque esse quod pariatur
          </p>
        </div>

        <div className={styles.info1}>
          <div className={styles.image}>
            <div className={styles.img1}>
              <img
                src="/cloud4.png"
                width="100vw"
                height="100vw"
                style={{ marginLeft: "-50%", marginTop: "-20%" }}
              ></img>
              <img
                src="/cloud1.png"
                width="100vw"
                height="100vw"
                style={{ marginLeft: "200%" }}
              ></img>
            </div>
            <div className={styles.img2}>
              <img src="/info.svg" width="300vw" height="300vw"></img>
            </div>
          </div>
          <div className={styles.header}>
            <div className={styles.icon}>
              <img src="/quality.png" width="100px" height="100px"></img>
            </div>
            <span>QUALITY</span>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
            laudantium! Esse, quisquam, quod
          </p>
        </div>

        <div className={styles.info}>
          <div className={styles.header}>
            <div className={styles.icon}>
              <img src="/skill.png" width="100px" height="100px"></img>
            </div>
            <span>Skill</span>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
            laudantium! Esse, quisquam, quod voluptatibus adipisci facilis
          </p>
        </div>
      </div>
    </div>
  );
};

export default Info;
