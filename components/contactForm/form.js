//next

//style
import styles from "./form.module.scss";

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
          <img src="/phone.png" width="50px" height="50px"></img>
          <div className={styles.text}>
            <p>Phone</p>
            <span>+212 659556299 / +212 682838886</span>
          </div>
        </div>
        <div className={styles.info}>
          <img src="/email.png" width="50px" height="50px"></img>
          <div className={styles.text}>
            <p>E-mail</p>
            <span>sniper.studio@gmail.com</span>
          </div>
        </div>
      </div>
    </div>
  );
};
