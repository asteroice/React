import { useState, useEffect, use } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../Button/Button";
import type { UserSession } from "../../types/UserSessionType";
import { useAuth } from "../../hooks/useAuth";

import Logo from "../../assets/icon/crown 1.svg";
import styles from "./Nav.module.css";

export const Nav = () => {
  const isAuthenticated = useAuth();

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
        {isAuthenticated ? (
          <div className={styles.authPanel}>
            <Link to="/Booking">Бронирование</Link>
            <Link to="/Account">Личный кабинет</Link>
            <Link to="/"></Link>
          </div>
        ) : (
          <div className={styles.authPanel}>
            <Link className={styles.navLink} to={"/Loginpage"}>
              Войти
            </Link>
            <Link to={"/Registerpage"}>
              <Button text="Регистрация" />
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
};
