import { Footer } from "../Components/Footer/Footer";
import { Nav } from "../Components/Nav/Nav";
import { Button } from "../Components/Button/Button";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

import styles from "./css-modules/LoginPage.module.css";

export const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [result, setResult] = useState<any>(null);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setResult(null);

    try {
      const res = await fetch("/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();

      if (!res.ok) throw new Error(data.error?.message || "Ошибка");

      setResult(data);

      // 🔥 ИСПРАВЛЕНО: проверяем правильный ключ
      if (data.token) {
        // ← Было: data.accessToken
        localStorage.setItem("token", data.token); // ← Было: data.accessToken
        console.log("✅ Токен сохранён:", data.token.substring(0, 30) + "...");
      } else {
        console.warn(
          "⚠️ Токен не найден в ответе. Доступные ключи:",
          Object.keys(data),
        );
      }

      navigate("/");
    } catch (err: any) {
      setError(err.message);
    }
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

            {error && (
              <p style={{ color: "red" }}>❌ Неправильный email или пароль</p>
            )}
            <Button height="50px" text="Войти" />
          </form>

          <span className={styles.alt_text}>
            Нет аккаунта? <Link to="/Registerpage">Зарегистрироваться</Link>
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
