import styles from "./Info.module.css";
import { Link } from "react-router-dom";

export const Info = () => {
  return (
    <>
      <div className={styles["info-container"]}>
        <h1>Добро пожаловать в Imperial Hotel</h1>
        <span>Ощутите роскошь и элегантность</span>
        <Link to={"/Rooms"}>Наши номера</Link>
      </div>
    </>
  );
};
