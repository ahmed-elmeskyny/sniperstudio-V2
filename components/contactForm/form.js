//next

//style
import styles from "./form.module.scss";

//react-icons
import { BiPhoneCall } from "react-icons/bi";
import { HiOutlineMail } from "react-icons/hi";
import { RiWhatsappLine } from "react-icons/ri";
import { GrLocation } from "react-icons/gr";

export const Form = () => {
  return (
    <div className={styles.container}>
      <form>
        <h2>Get In Touch </h2>
        <textarea placeholder="send message"></textarea>
        <div className={styles.inputs}>
          <input placeholder="name"></input>
          <input placeholder="email"></input>
        </div>
        <input placeholder="subject"></input>
        <button> Send</button>
      </form>
      <div className={styles.infos}>
        <div className={styles.info}>
          <div className={styles.infoType}>
            <BiPhoneCall className={styles.icon}></BiPhoneCall>
            <p>PHONE</p>
          </div>
          <div className={styles.text}>
            <span>+212 682838886</span>
            <span>+212 659556299</span>
          </div>
        </div>
        <div className={styles.info}>
          <div className={styles.infoType}>
            <RiWhatsappLine className={styles.icon}></RiWhatsappLine>
            <p>WHATSAPP</p>
          </div>
          <div className={styles.text}>
            <span>+212 682838886</span>
            <span>+212 659556299</span>
          </div>
        </div>
        <div className={styles.info}>
          <div className={styles.infoType}>
            <HiOutlineMail className={styles.icon}></HiOutlineMail>
            <p>Email</p>
          </div>
          <div className={styles.text}>
            <span>sniper.studio</span>
            <span>@gmail.com</span>
          </div>
        </div>
        <div className={styles.info}>
          <div className={styles.infoType}>
            <GrLocation className={styles.icon}></GrLocation>
            <p>Location</p>
          </div>
          <div className={styles.text}>
            <span>Casablanca</span>
            <span>,Morocco</span>
          </div>
        </div>
      </div>
    </div>
  );
};
