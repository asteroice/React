import Logo from "../../assets/icon/crown-of-thorns-svgrepo-com.svg";
import styles from "./Nav.module.css";

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <div>
        <a href="#" className={styles.logoContainer}>
          <Logo />
          <span className={styles.logoName}>ImperialHotel</span>
        </a>
      </div>
      <div className={styles.navPanel}>
        <a className={styles.navLink} href="#">
          Главная
        </a>
        <a className={styles.navLink} href="#">
          Номера
        </a>
        <a className={styles.navLink} href="#">
          Войти
        </a>
        <a className={styles.registration} href="">
          Регистрация
        </a>
      </div>
    </nav>
  );
};

export default Nav;
