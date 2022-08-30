import React from "react";
import styles from "./button.module.scss";
export const ButtonMain = () => {
  return (
    <div>
      <button
        className={`${styles["button"]} ${styles["button--pipaluk"]} ${styles["button--text-thick"]} `}
      >
        Learn More
      </button>
    </div>
  );
};
