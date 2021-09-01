//next
import Link from "next/link";
import Image from "next/image";

//style
import styles from "./layout.module.scss";

//react-icons
import { ImTarget } from "react-icons/im";
import { FiFacebook, FiLinkedin, FiInstagram } from "react-icons/fi";
import { RiTwitterLine } from "react-icons/ri";
import ActiveLink from "../activeLink/activeLink";

const Layout = (props) => {
  return (
    <div>
      <div className={styles.header}>
        <div className={styles.logo}>
          <ImTarget></ImTarget>
        </div>
        <div className={styles.menu}>
          <ul>
            <ActiveLink href="/" activeClassName={styles.active}>
              <li className={styles.home}>Home</li>
            </ActiveLink>
            <ActiveLink href="/about" activeClassName={styles.active}>
              <li>About</li>
            </ActiveLink>
            <ActiveLink href="/work" activeClassName={styles.active}>
              <li>Work</li>
            </ActiveLink>
            <ActiveLink href="/services" activeClassName={styles.active}>
              <li>Services</li>
            </ActiveLink>
            <ActiveLink href="/contact" activeClassName={styles.active}>
              <li>Contact </li>
            </ActiveLink>
          </ul>
        </div>
        <div className={styles.social}>
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
        </div>
      </div>
      {props.children}
    </div>
  );
};
export default Layout;
