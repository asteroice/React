import { Link } from "react-router-dom";
import Logo from "../../assets/icon/crown-of-thorns-svgrepo-com.svg";
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
        <Link className={styles.navLink} to={"/"}>
          Войти
        </Link>
        <Link className={styles.registration} to={"/"}>
          Регистрация
        </Link>
      </div>
    </nav>
  );
};
