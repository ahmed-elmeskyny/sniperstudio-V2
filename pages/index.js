//next
import Head from "next/head";

//styles
import styles from "../styles/Home.module.scss";

//components
import Layout from "../components/layout/layout";
import Hero from "../components/hero/hero";
import Info from "../components/info/info";
import { BestApp } from "../components/BestApp/bestapp";
import { Testimonials } from "../components/testimonials/testimonials";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>SNIPER STUDIO</title>
        <meta name="description" content="sniper studio" />
      </Head>

      <Layout>
        <Hero></Hero>
        <Info></Info>
        <BestApp></BestApp>
        <Testimonials></Testimonials>
      </Layout>
    </div>
  );
}
