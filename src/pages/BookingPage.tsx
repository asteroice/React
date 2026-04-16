import { Nav } from "../Components/Nav/Nav";
import { Footer } from "../Components/Footer/Footer";
import { Dropdown } from "primereact/dropdown";
import { useState } from "react";
import { Calendar } from "primereact/calendar";
import { InputNumber } from "primereact/inputnumber";

import styles from "./css-modules/BookingPage.module.css";

export const BookingPage = () => {
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [dates, setDates] = useState(null);
  const [guests, setGuests] = useState(1);

  const rooms = [
    { name: "Deluxe Room", code: "DR" },
    { name: "Executive Suite", code: "ES" },
    { name: "Garden View Room", code: "GVR" },
    { name: "Imperial Suite", code: "IST" },
    { name: "Penthouse Suite", code: "PS" },
    { name: "Classic Room", code: "CR" },
  ];

  return (
    <>
      <Nav />
      <div className={styles.container}>
        <h1>Бронирование номера</h1>
        <div className={styles.progression}>
          <div className={styles.step + " " + styles.active}>
            <span>1</span>
          </div>
          <div className={styles.stepLine}></div>
          <div className={styles.step}>
            <span>2</span>
          </div>
          <div className={styles.stepLine}></div>
          <div className={styles.step}>
            <span>3</span>
          </div>
          <div className={styles.stepLine}></div>
          <div className={styles.step}>
            <span>4</span>
          </div>
        </div>
        <div className={styles.booking_container}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span>Номер</span>
            <Dropdown
              value={selectedRoom}
              onChange={(e) => setSelectedRoom(e.value)}
              options={rooms}
              optionLabel="name"
              editable
              className={styles.dropdown}
              placeholder="Выберите номер"
            />
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span>Дата заезда - Дата выезда</span>
            <Calendar
              value={dates}
              onChange={(e) => setDates(e.value)}
              selectionMode="range"
              readOnlyInput
              hideOnRangeSelection
              dateFormat="dd/mm/yy"
              showButtonBar
              className={styles.calendar}
              showTime
              hourFormat="24"
            />
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span>Количество гостей</span>
            <InputNumber
              value={guests}
              onValueChange={(e) => setGuests(e.value)}
              min={1}
              max={10}
              showButtons
              className={styles.input_number}
            />
          </div>
          <div></div>
        </div>
      </div>
      <Footer />
    </>
  );
};
