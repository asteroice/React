import { Nav } from "../Components/Nav/Nav";
import { Footer } from "../Components/Footer/Footer";
import { Button } from "../Components/Button/Button";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import type { RegisterForm } from "../types/RegisterForm";

import styles from "./css-modules/RegisterPage.module.css";

export const RegisterPage = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (password !== confirmPassword) {
      setError("Пароли не совпадают");
      return;
    }

    setLoading(true);
    try {
      // 👇 Если в vite стоит `rewrite`, пишите `/api/register`.
      //    Если нет — просто `/register`
      const res = await fetch("/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fullName, email, password }),
      });
      const data = await res.json();

      if (!res.ok) throw new Error(data.error?.message || "Ошибка регистрации");

      if (data.token) {
        localStorage.setItem("token", data.token);
        // 🔥 Редирект на защищённую страницу (раскомментируйте если нужно)
        // navigate('/dashboard')
      }

      setSuccess("✅ Регистрация успешна!");
      setFullName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
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
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
              />
            </div>
            <div className={styles.input_box}>
              <span>Email адрес</span>
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className={styles.input_box}>
              <span>Пароль</span>
              <input
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className={styles.input_box}>
              <span>Подтверждение пароля</span>
              <input
                type="password"
                name="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
            {error && <p style={{ color: "red" }}>❌ {error}</p>}
            {success && <p style={{ color: "green" }}>{success}</p>}
            <Button type="submit" height="50px" text="Зарегистрироваться" />
          </form>

          <span className={styles.alt_text}>
            Уже есть аккаунт? <Link to="/Loginpage">Войти</Link>
          </span>
        </div>
      </div>
      <Footer />
    </>
  );
};
