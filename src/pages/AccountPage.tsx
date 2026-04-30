import { Nav } from "../Components/Nav/Nav";
import { Footer } from "../Components/Footer/Footer";
import { Button } from "../Components/Button/Button";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

import styles from "./css-modules/AccountPage.module.css";

export const AccountPage = () => {
  const { userName, logout, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout(); // Очищает localStorage и стейт
    navigate("/"); // Перенаправляет на страницу входа
  };
  return (
    <>
      <Nav />
      <div className={styles.container}>
        <div className={styles.infoContainer}>
          <h1>Личный кабинет</h1>
          <span>Управляйте своим профилем и бронированиями</span>
        </div>
        <Button
          onClick={handleLogout}
          width={"100px"}
          height={"48px"}
          text="Выйти"
        />
      </div>
      <Footer />
    </>
  );
};
