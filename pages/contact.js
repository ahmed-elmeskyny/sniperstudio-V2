//next
import Head from "next/head";

//styles
import styles from "../styles/contact.module.scss";

//components
import Layout from "../components/layout/layout";
import { Form } from "../components/contactForm/form";

export default function Contact() {
  return (
    <div className={styles.container}>
      <Head>
        <title>SNIPER STUDIO</title>
        <meta name="description" content="sniper studio" />
      </Head>

      <Layout>
        <div className={styles.headerContainer}>
          <div className={styles.header}>
            <div className={styles.text}>
              <h1>Contact Us</h1>
              <span>
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quaerat, itaque doloremque. Aperiam velit, itaque esse quod
                pariatur magni earum tempore quia
              </span>
            </div>
            <img src="/contact.svg" width="300vw" height="300vw"></img>
          </div>
        </div>
        <Form></Form>
      </Layout>
    </div>
  );
}
