import React from "react";
import styles from "./button.module.scss";
interface IProps {
  children: React.ReactNode;
}
export const ButtonMain = ({ children }: IProps) => {
  return (
    <div>
      <button
        className={`${styles["button"]} ${styles["button--pipaluk"]} ${styles["button--text-thick"]} `}
      >
        {children}
      </button>
    </div>
  );
};
