//next
import Link from "next/link";

//style
import styles from "./footer.module.scss";

//react-icons
import { FiFacebook, FiLinkedin, FiInstagram } from "react-icons/fi";
import { RiTwitterLine } from "react-icons/ri";
import { BsDot } from "react-icons/bs";

//components
import ActiveLink from "../activeLink/activeLink";

export const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.contactContainer}>
        <div className={styles.contact}>
          <h1>You're still here</h1>
          <span>
            Don't lett your app idea go in the clouds. Get started now
          </span>
          <Link href="/contact">
            <a className={styles.link}>Contact Us</a>
          </Link>
        </div>
        <div className={styles.fastLinks}>
          <div className={styles.logo}>
            <img src="target.png" width="25px" height="25px"></img>
            <span>SNIPER STUDIO</span>
          </div>
          <div className={styles.menu}>
            <ul>
              <ActiveLink href="/" activeClassName={styles.active}>
                <li className={styles.home}>Home</li>
              </ActiveLink>
              <ActiveLink href="/about" activeClassName={styles.active}>
                <li>About</li>
              </ActiveLink>
            </ul>
            <ul>
              <ActiveLink href="/work" activeClassName={styles.active}>
                <li>Work</li>
              </ActiveLink>
              <ActiveLink href="/contact" activeClassName={styles.active}>
                <li>Contact </li>
              </ActiveLink>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.links}>
        <div className={styles.icon}>
          <FiLinkedin></FiLinkedin>
        </div>
        <div className={styles.icon}>
          <FiFacebook></FiFacebook>
        </div>
        <div className={styles.icon}>
          <FiInstagram></FiInstagram>
        </div>
        <div className={styles.icon}>
          <RiTwitterLine></RiTwitterLine>
        </div>
        <div className={styles.terms}>
          <span>Terms of service</span>
          <BsDot></BsDot>
          <span>Privacy policy</span>
        </div>
        <div className={styles.reserved}>
          <span>Copyright © 2021 Sniper studio</span>
        </div>
      </div>
      <div className={styles.img1}>
        <img src="/footer.svg" width="320vw" height="320vw"></img>
      </div>
      <div className={styles.img2}>
        <img src="/4.png" width="120vw" height="100vw"></img>
      </div>
    </div>
  );
};
