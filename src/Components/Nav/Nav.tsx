import { Link } from "react-router-dom";
import { Button } from "../Button/Button";

import Logo from "../../assets/icon/crown 1.svg";
import styles from "./Nav.module.css";

export const Nav = () => {
  return (
    <nav className={styles.nav}>
      <div>
        <Link to={"/"} className={styles.logoContainer}>
          <Logo />
          <span className={styles.logoName}>ImperialHotel</span>
        </Link>
      </div>
      <div className={styles.navPanel}>
        <Link className={styles.navLink} to={"/"}>
          Главная
        </Link>
        <Link className={styles.navLink} to={"/Rooms"}>
          Номера
        </Link>
        <Link className={styles.navLink} to={"/Login"}>
          Войти
        </Link>
        <Button to="/" text="Регистрация" />
      </div>
    </nav>
  );
};
