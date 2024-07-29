import React from "react";
import styles from "./Resume.module.css";

const Resume = () => {
  return (
    <div className="ResumePage">
      <div>
        <div className={styles.align}>
          <h3>Drop Me a Message !!</h3>

          <form action="https://formspree.io/f/mzzpedla" method="POST">
            <div className={styles.formField}>
              <input
                type="text"
                name="text"
                placeholder="Message here"
                className={styles.formInput}
              />
              <span className={styles.icon}></span>
            </div>
            <button className={styles.messageButton}>Done</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Resume;
