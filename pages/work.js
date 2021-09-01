//next
import Head from "next/head";

//styles
import styles from "../styles/work.module.scss";

//components
import Layout from "../components/layout/layout";
import { Projects } from "../components/projects/projects";

export default function Works() {
  return (
    <div className={styles.container}>
      <Head>
        <title>SNIPER STUDIO</title>
        <meta name="description" content="sniper studio" />
      </Head>

      <Layout>
        <div className={styles.header}>
          <div className={styles.imageContainer}>
            <div className={styles.img1}>
              <img
                src="/cloud5.png"
                width="100vw"
                height="130vw"
                style={{
                  marginLeft: "45%",
                  marginTop: "-10%",
                  marginBottom: "20%",
                }}
              ></img>
              <img
                src="/cloud2.png"
                width="100vw"
                height="80vw"
                style={{ marginLeft: "100%" }}
              ></img>
            </div>
            <div className={styles.img2}>
              <img src="/cloud2.png" width="100vw" height="80vw"></img>
              <img
                src="/cloud3.png"
                width="100vw"
                height="100vw"
                style={{ marginTop: "60%" }}
              ></img>
            </div>
          </div>
          <div className={styles.text}>
            <h2>Our Work</h2>
            <span>
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat,
              itaque doloremque. Aperiam velit, itaque esse quod pariatur magni
              earum tempore quia mollitia ex beatae vel quidem dolore
              consequatur maxime ut.
            </span>
          </div>
        </div>

        <Projects />
      </Layout>
    </div>
  );
}
