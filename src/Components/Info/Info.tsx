import styles from "./Info.module.css";

export const Info = () => {
  return (
    <>
      <div className={styles["info-container"]}>
        <h1>Добро пожаловать в Imperial Hotel</h1>
        <span>Ощутите роскошь и элегантность</span>
        <a href="#">Наши номера</a>
      </div>
    </>
  );
};
