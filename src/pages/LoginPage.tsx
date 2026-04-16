import { Footer } from "../Components/Footer/Footer";
import { Nav } from "../Components/Nav/Nav";
import { Button } from "../Components/Button/Button";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import styles from "./css-modules/LoginPage.module.css";

export const LoginPage = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleLoginClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const formEl = e.currentTarget.closest("form");
    if (formEl) formEl.requestSubmit();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!form.email.trim() || !form.password.trim()) {
      return setError("Заполните все поля");
    }

    const users = JSON.parse(localStorage.getItem("imperial_users") || "[]");
    const user = users.find((u: any) => u.email === form.email.trim());

    if (!user) {
      return setError("Пользователь не найден");
    }
    if (user.password !== form.password) {
      return setError("Неверный пароль");
    }

    localStorage.setItem("imperial_session", JSON.stringify(user));

    navigate("/", { replace: true });
  };

  return (
    <>
      <Nav />
      <div className={styles.container}>
        <h1 className={styles.h1}>IMPERIAL HOTEL</h1>
        <h3 className={styles.h3}>Вход в систему</h3>
        <div className={styles.input_container}>
          <form onSubmit={handleSubmit} className={styles.login_box}>
            <div className={styles.input_box}>
              <span>Email адрес</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className={styles.input_box}>
              <span>Пароль</span>
              <input
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                required
              />
            </div>

            {error && (
              <p style={{ color: "#e53935", margin: "8px 0" }}>{error}</p>
            )}

            <Button
              onClick={handleLoginClick}
              height="50px"
              text="Войти"
              to="/"
            />
          </form>
          <span className={styles.alt_text}>
            Нет аккаунта? <Link to="/Register">Зарегистрироваться</Link>
          </span>
          <span className={styles.alt_pass}>
            Забыли пароль? <Link to="/forgot-password">Восстановить</Link>
          </span>
        </div>
      </div>
      <Footer />
    </>
  );
};
