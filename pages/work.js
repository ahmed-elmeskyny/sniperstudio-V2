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
          <div className={styles.text}>
            <div style={{ width: "40%" }}>
              <h1>Our Work</h1>
              <span>
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quaerat, itaque doloremque. Aperiam velit, itaque esse quod
                pariatur magni earum tempore quia
              </span>
            </div>
            <img src="/work.svg" width="300vw" height="300vw"></img>
          </div>
        </div>
        <h2 className={styles.p}>Check out some of our works </h2>
        <Projects />
      </Layout>
    </div>
  );
}
