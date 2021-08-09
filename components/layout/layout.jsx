//next
import Link from "next/link";
import Image from "next/image";

//style
import styles from "./layout.module.scss";

//react-icons
import {ImTarget} from "react-icons/im";
import {FiFacebook, FiLinkedin , FiInstagram } from "react-icons/fi";
import {RiTwitterLine} from "react-icons/ri";


const Layout = (props) => {
    return(
    <div>
        <div className={styles.header}>
            <div className={styles.logo}>
                <ImTarget></ImTarget>
            </div>
            <div className={styles.menu}>
                <ul>
                    <li >Home</li>
                    <li>About </li>
                    <li>Works</li>
                    <li>Services</li>
                    <li>Contact </li>
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
    )
}
export default Layout;