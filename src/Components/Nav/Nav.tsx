import { useState, useEffect, use } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../Button/Button";
import type { UserSession } from "../../assets/types/UserSessionType";

import Logo from "../../assets/icon/crown 1.svg";
import styles from "./Nav.module.css";

export const Nav = () => {
  const [user, setUser] = useState<UserSession | null>(null);
  const navigate = useNavigate();

  // Загружаем сессию при монтировании
  useEffect(() => {
    const session = localStorage.getItem("imperial_session");
    if (session) {
      setUser(JSON.parse(session));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("imperial_session");
    setUser(null);
    navigate("/", { replace: true });
  };

  return (
    <header className={styles.header}>
      <Link to={"/"} className={styles.logoContainer}>
        <Logo />
        <span className={styles.logoName}>ImperialHotel</span>
      </Link>

      <nav className={styles.navPanel}>
        <Link className={styles.navLink} to={"/"}>
          Главная
        </Link>
        <Link className={styles.navLink} to={"/Rooms"}>
          Номера
        </Link>
        <div className={styles.authPanel}>
          {user ? (
            <>
              <Link className={styles.navLink} to="/Booking">
                Бронирование
              </Link>
              <Link className={styles.userName} to="/dashboard">
                {user.fullName}
              </Link>
              <Button id="btn" text="Выйти" to="/" onClick={handleLogout} />
            </>
          ) : (
            <>
              <Link className={styles.navLink} to={"/Login"}>
                Войти
              </Link>
              <Button to="/Register" text="Регистрация" />
            </>
          )}
        </div>
      </nav>
    </header>
  );
};
