import React from "react";
import styles from "./button.module.scss";
interface IProps {
  onClickLeft?: () => void;
  onClickRight?: () => void;
}

const SwitchButton = ({ onClickLeft, onClickRight }: IProps) => {
  const switchLeft = () => {
    document.querySelector(".right")?.classList.add("active-case");
    document.querySelector(".left")?.classList.remove("active-case");
    //@ts-ignore
    document.querySelector(".active").style.left = "0%";

    if (onClickLeft) onClickLeft();
  };
  const switchRight = () => {
    document.querySelector(".left")?.classList.add("active-case");
    document.querySelector(".right")?.classList.remove("active-case");
    //@ts-ignore
    document.querySelector(".active").style.left = "50%";
    if (onClickRight) onClickRight();
  };

  return (
    <div className="switch-button">
      <span className="active"></span>
      <button onClick={switchLeft} className="switch-button-case left ">
        Engineering
      </button>
      <button
        onClick={switchRight}
        className="switch-button-case right active-case"
      >
        IT Technologies
      </button>
    </div>
  );
};

export default SwitchButton;
