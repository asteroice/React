import type { CardProps } from "../../assets/types/CardPropsType";
import {
  CButton,
  CCard,
  CCardBody,
  CCardImage,
  CCardText,
  CCardTitle,
} from "@coreui/react";
import { Link } from "react-router-dom";

import styles from "./Card.module.css";

export const CardExample = ({ CardImg, heading, text, price }: CardProps) => {
  return (
    <CCard
      style={{
        width: "100%",
        height: "100%",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.08)",
        borderRadius: "12px",
        border: "none",
      }}
      className="card"
    >
      <CCardImage orientation="top" src={CardImg} />
      <CCardBody
        style={{ display: "flex", flexDirection: "column", minHeight: "200px" }}
      >
        <CCardTitle className={styles["card-title"]}>{heading}</CCardTitle>
        <CCardText style={{ marginBottom: "16px" }}>{text}</CCardText>
        <div style={{ marginTop: "auto" }}>
          <Link to={"/Rooms"}>
            <CButton color="primary" href="#">
              {price}
            </CButton>
          </Link>
        </div>
      </CCardBody>
    </CCard>
  );
};
