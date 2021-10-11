//next
import Link from "next/link";
import Image from "next/image";

//style
import styles from "./layout.module.scss";

//react-icons
import { FiFacebook, FiLinkedin, FiInstagram } from "react-icons/fi";
import { RiTwitterLine } from "react-icons/ri";
import ActiveLink from "../activeLink/activeLink";
import { Footer } from "../footer/footer";
import { MobileMenu } from "../mobileMenu/mobileMenu";
import { getDisplayName } from "next/dist/next-server/lib/utils";
import { BsDisplay } from "react-icons/bs";
import { useState } from "react";

const Layout = (props) => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div>
      <MobileMenu setOpen={setOpen} isOpen={isOpen}></MobileMenu>
      <div className={styles.header}>
        <div className={styles.logo}>
          <img src="target1.png" width="35px" height="35px"></img>
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
            {/* <ActiveLink href="/services" activeClassName={styles.active}>
              <li>Services</li>
            </ActiveLink> */}
            <ActiveLink href="/contact" activeClassName={styles.active}>
              <li>Hire Us </li>
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

      <div style={{ display: "flex" }}>
        <div
          className={styles.mobileMenu}
          style={isOpen ? { display: "block" } : { display: "none" }}
        >
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
              {/* <ActiveLink href="/services" activeClassName={styles.active}>
              <li>Services</li>
            </ActiveLink> */}
              <ActiveLink href="/contact" activeClassName={styles.active}>
                <li>Hire Us </li>
              </ActiveLink>
            </ul>
          </div>
        </div>
        <div
          className={styles.trans}
          style={
            isOpen ? { transform: "translateX(210px)" } : { marginLeft: "0" }
          }
        >
          {props.children}
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};
export default Layout;
