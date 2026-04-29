import { Link } from "react-router-dom";
import type { CustomButtonProps } from "../../types/ButtonPropsType";

import styles from "./Button.module.css";

export const Button = ({
  text,
  width = "100%",
  height = "30px",
  style,
  children,
  ...rest
}: CustomButtonProps) => {
  return (
    <>
      <button
        style={{ width, height, ...style }}
        className={styles.registration}
        {...rest}
      >
        {text}
      </button>
    </>
  );
};
