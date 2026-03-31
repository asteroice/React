import style from "./Footer.module.css";

export const Footer = () => {
  return (
    <>
      <div className={style["footer-section"]}>
        <h1>IMPERIAL HOTEL</h1>
        <p>Набережная ул., 4б, Адлер</p>
        <p>Телефон: +7 777 777 77 77 | Email: info@imperialhotel.com</p>
      </div>
    </>
  );
};