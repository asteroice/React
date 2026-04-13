import { Link } from "react-router-dom";
import type { CustomButtonProps } from "../../assets/types/ButtonPropsType";

import styles from "./Button.module.css";

export const Button = ({
  text,
  to,
  width = "100%",
  height = "30px",
  style,
  children,
  ...rest
}: CustomButtonProps) => {
  return (
    <>
      <Link
        style={{ width, height, ...style }}
        className={styles.registration}
        to={to}
      >
        {text}
      </Link>
    </>
  );
};
