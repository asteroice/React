import { Nav } from "../Components/Nav/Nav";
import { Footer } from "../Components/Footer/Footer";
import { Button } from "../Components/Button/Button";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import type { RegisterForm } from "../assets/types/RegisterForm";

import styles from "./css-modules/RegisterPage.module.css";

export const RegisterPage = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState<RegisterForm>({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!form.fullName.trim() || !form.email.trim() || !form.password.trim()) {
      return setError("Заполните все поля");
    }
    if (form.password.length < 6) return setError("Пароль минимум 6 символов");
    if (form.password !== form.confirmPassword)
      return setError("Пароли не совпадают");

    const users = JSON.parse(localStorage.getItem("imperial_users") || "[]");
    const emailExists = users.find((u: any) => u.email === form.email.trim());
    if (emailExists) return setError("Этот email уже зарегистрирован");

    const newUser = {
      id: Date.now(),
      fullName: form.fullName.trim(),
      email: form.email.trim(),
      password: form.password,
    };
    users.push(newUser);
    localStorage.setItem("imperial_users", JSON.stringify(users));

    localStorage.setItem("imperial_session", JSON.stringify(newUser));
    setSuccess("Аккаунт создан! Перенаправляем...");

    setTimeout(() => navigate("/", { replace: true }), 1000);
  };

  const handleRegisterClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const formEl = e.currentTarget.closest("form");
    if (formEl) {
      formEl.requestSubmit();
    }
  };

  return (
    <>
      <Nav />
      <div className={styles.container}>
        <h1 className={styles.h1}>IMPERIAL HOTEL</h1>
        <h3 className={styles.h3}>Регистрация</h3>

        <div className={styles.input_container}>
          <form onSubmit={handleSubmit} className={styles.login_box}>
            <div className={styles.input_box}>
              <span>Полное имя</span>
              <input
                type="text"
                name="fullName"
                value={form.fullName}
                onChange={handleChange}
                required
              />
            </div>
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
            <div className={styles.input_box}>
              <span>Подтверждение пароля</span>
              <input
                type="password"
                name="confirmPassword"
                value={form.confirmPassword}
                onChange={handleChange}
                required
              />
            </div>

            {error && (
              <p style={{ color: "#e53935", margin: "8px 0" }}>{error}</p>
            )}
            {success && (
              <p style={{ color: "#2e7d32", margin: "8px 0" }}>{success}</p>
            )}

            <Button
              type="submit"
              height="50px"
              text="Зарегистрироваться"
              onClick={handleRegisterClick}
              to="/"
            />
          </form>

          <span className={styles.alt_text}>
            Уже есть аккаунт? <Link to="/login">Войти</Link>
          </span>
        </div>
      </div>
      <Footer />
    </>
  );
};
