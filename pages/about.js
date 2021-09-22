//next
import Head from "next/head";

//styles
import styles from "../styles/about.module.scss";

//components
import Layout from "../components/layout/layout";
import { Techno } from "../components/tehnologies/technologies";
import { Aboutus } from "../components/aboutus/aboutus";

export default function About() {
  return (
    <div className={styles.container}>
      <Head>
        <title>SNIPER STUDIO</title>
        <meta name="description" content="sniper studio" />
      </Head>

      <Layout>
        {/* <div className={styles.headerContainer}>
          <div className={styles.headerText}>
            <div className={styles.logo}>
              <img src="target.png" width="20px" height="20px"></img>
              <span>SNIPER STUDIO</span>
            </div>
            <div className={styles.slogan}>
              <p>ABOUT US </p>
            </div>

            <div className={styles.description}>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                , Lorem Ipsum is simply dummy text oftext of the printing and
                typesetting
              </p>
            </div>
          </div>
        </div> */}
        <Aboutus></Aboutus>
        <Techno></Techno>
      </Layout>
    </div>
  );
}
