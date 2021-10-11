//next

//style
import styles from "./testimonials.module.scss";

export const Testimonials = () => {
  return (
    <>
      <div className={styles.header}>
        <span>Testimonials</span>
        <h1>What our client says</h1>
      </div>
      <div className={styles.container}>
        <div className={styles.namesContainer}>
          <div className={styles.name}></div>
        </div>
        <div className={styles.testimonials}></div>
      </div>
    </>
  );
};
