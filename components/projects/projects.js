//react
import { useState } from "react";

//style
import styles from "./projects.module.scss";

export const Projects = () => {
  const [ToggleWork, setToggleWork] = useState(true);
  return (
    <div className={styles.container}>
      {/* <div className={styles.categorie}>
        <p
          className={ToggleWork ? styles.active : null}
          onClick={() => setToggleWork(!ToggleWork)}
        >
          Mobile Apps
        </p>
        <hr></hr>
        <p
          className={ToggleWork ? null : styles.active}
          onClick={() => setToggleWork(!ToggleWork)}
        >
          Web Apps
        </p>
      </div> */}
      <div className={styles.mobileProjectsContainer}>
        <div
          className={styles.mobileproject}
          style={{ backgroundImage: "url(/splashscreen1.jpg)" }}
        >
          <div className={styles.description}>
            <span>App name</span>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat,
              itaque doloremque
            </p>
            <div className={styles.tools}>
              <span className={styles.tool}> React</span>
              <span className={styles.tool}> Firebase</span>
              <span className={styles.tool}> Figma</span>
              <span className={styles.tool}> Css</span>
            </div>
            <button>Learn More</button>
          </div>
        </div>
        <div
          className={styles.mobileproject}
          style={{ backgroundImage: "url(/splashscreen2.jpg)" }}
        >
          <div className={styles.description}>
            <span>App name</span>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat,
              itaque doloremque
            </p>
            <div className={styles.tools}>
              <span className={styles.tool}> React</span>
              <span className={styles.tool}> Firebase</span>
              <span className={styles.tool}> Figma</span>
              <span className={styles.tool}> Css</span>
            </div>
            <button>Learn More</button>
          </div>
        </div>
        <div
          className={styles.mobileproject}
          style={{ backgroundImage: "url(/splashscreen3.jpg)" }}
        >
          <div className={styles.description}>
            <span>App name</span>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat,
              itaque doloremque
            </p>
            <div className={styles.tools}>
              <span className={styles.tool}> React</span>
              <span className={styles.tool}> Firebase</span>
              <span className={styles.tool}> Figma</span>
              <span className={styles.tool}> Css</span>
            </div>
            <button>Learn More</button>
          </div>
        </div>
        <div
          className={styles.mobileproject}
          style={{ backgroundImage: "url(/splashscreen4.jpg)" }}
        >
          <div className={styles.description}>
            <span>App name</span>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat,
              itaque doloremque
            </p>
            <div className={styles.tools}>
              <span className={styles.tool}> React</span>
              <span className={styles.tool}> Firebase</span>
              <span className={styles.tool}> Figma</span>
              <span className={styles.tool}> Css</span>
            </div>
            <button>Learn More</button>
          </div>
        </div>
        <div
          className={styles.mobileproject}
          style={{ backgroundImage: "url(/splashscreen5.jpg)" }}
        >
          <div className={styles.description}>
            <span>App name</span>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat,
              itaque doloremque
            </p>
            <div className={styles.tools}>
              <span className={styles.tool}> React</span>
              <span className={styles.tool}> Firebase</span>
              <span className={styles.tool}> Figma</span>
              <span className={styles.tool}> Css</span>
            </div>
            <button>Learn More</button>
          </div>
        </div>
      </div>
      {/* ) : (
        <div className={styles.webProjectsContainer}>
          <div
            className={styles.webproject}
            style={{ backgroundImage: "url(/web1.png)" }}
          >
            <div className={styles.description}>
              <span>App name</span>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quaerat, itaque doloremque
              </p>
              <div className={styles.tools}>
                <span className={styles.tool}> React</span>
                <span className={styles.tool}> Firebase</span>
                <span className={styles.tool}> Figma</span>
                <span className={styles.tool}> Css</span>
              </div>
              <button>Learn More</button>
            </div>
          </div>
          <div
            className={styles.webproject}
            style={{ backgroundImage: "url(/web2.jpg)" }}
          >
            <div className={styles.description}>
              <span>App name</span>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quaerat, itaque doloremque
              </p>
              <div className={styles.tools}>
                <span className={styles.tool}> React</span>
                <span className={styles.tool}> Firebase</span>
                <span className={styles.tool}> Figma</span>
                <span className={styles.tool}> Css</span>
              </div>
              <button>Learn More</button>
            </div>
          </div>
          <div
            className={styles.webproject}
            style={{ backgroundImage: "url(/web3.jpg)" }}
          >
            <div className={styles.description}>
              <span>App name</span>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quaerat, itaque doloremque
              </p>
              <div className={styles.tools}>
                <span className={styles.tool}> React</span>
                <span className={styles.tool}> Firebase</span>
                <span className={styles.tool}> Figma</span>
                <span className={styles.tool}> Css</span>
              </div>
              <button>Learn More</button>
            </div>
          </div>
          <div
            className={styles.webproject}
            style={{ backgroundImage: "url(/web4.png)" }}
          >
            <div className={styles.description}>
              <span>App name</span>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quaerat, itaque doloremque
              </p>
              <div className={styles.tools}>
                <span className={styles.tool}> React</span>
                <span className={styles.tool}> Firebase</span>
                <span className={styles.tool}> Figma</span>
                <span className={styles.tool}> Css</span>
              </div>
              <button>Learn More</button>
            </div>
          </div>
        </div>
      )} */}
    </div>
  );
};
