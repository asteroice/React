import { Footer } from "../Components/Footer/Footer";
import { Nav } from "../Components/Nav/Nav";
import { Button } from "../Components/Button/Button";

import styles from "./css-modules/LoginPage.module.css";

export const LoginPage = () => {
  return (
    <>
      <Nav />
      <div className={styles.container}>
        <h1 className={styles.h1}>IMPERIAL HOTEL</h1>
        <h3 className={styles.h3}>Вход в систему</h3>
        <div className={styles.input_container}>
          <div className={styles.login_box}>
            <div className={styles.input_box}>
              <span>Email адрес</span>
              <input type="email" />
            </div>
            <div className={styles.input_box}>
              <span>Пароль</span>
              <input type="password" />
            </div>
          </div>
          <Button height="50px" text="Войти" to="/" />
        </div>
      </div>
      <Footer />
    </>
  );
};
