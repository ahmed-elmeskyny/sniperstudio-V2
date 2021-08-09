//next
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

//styles
import styles from '../styles/Home.module.scss';

//react-icons
import {ImTarget} from "react-icons/im";

//components
import Layout from '../components/layout/layout';




export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>SNIPER STUDIO</title>
        <meta name="description" content="sniper studio" />
      </Head>

      <Layout>
        <div className={styles.hero}>
          <div className={styles.heroText}>
              <div className={styles.slogan} >
                <p>BUILDING DIGITAL PRODUCTS , BRANDS</p>
              </div>
              <div className={styles.logo}>
                 <ImTarget></ImTarget>
                 <span>SNIPER STUDIO</span>
              </div>
              <div className={styles.description}>
                 <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised</p>
              </div>
              <div className={styles.links}>
                <Link href="/contact"><a className={styles.link}>Hire Us</a></Link>
                <Link href="/contact"><a className={styles.link1}>Services...</a></Link>
              </div>
          </div>
          <div className={styles.heroImage}>
            <Image alt="hand" src="/exploded.png" width="600px" height="500px"></Image>
          </div>
        </div>
      </Layout>
    </div>
  )
}
