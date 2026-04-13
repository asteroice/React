import type { ButtonHTMLAttributes, CSSProperties, ReactNode } from "react";

export type CustomButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  text: string;
  to: string;
  width?: CSSProperties["width"];
  height?: CSSProperties["height"];
  children?: ReactNode;
};
