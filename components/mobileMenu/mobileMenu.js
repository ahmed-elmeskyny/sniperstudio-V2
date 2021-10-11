//next
import Link from "next/link";

//style
import styles from "./mobileMenu.module.scss";

//rect-icons
import { RiMenu4Fill } from "react-icons/ri";
import { GrClose } from "react-icons/gr";

export const MobileMenu = ({ setOpen, isOpen }) => {
  return (
    <div className={styles.container}>
      {isOpen ? (
        <GrClose
          style={{ fontSize: "25px" }}
          onClick={() => setOpen(!isOpen)}
        ></GrClose>
      ) : (
        <RiMenu4Fill
          style={{ fontSize: "31px" }}
          onClick={() => setOpen(!isOpen)}
        ></RiMenu4Fill>
      )}
      <img src="target.png" width="35px" height="35px"></img>
    </div>
  );
};
