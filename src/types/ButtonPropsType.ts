import type {  CSSProperties, ReactNode, ButtonHTMLAttributes } from "react";



export type CustomButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  text: string;
  width?: CSSProperties["width"];
  height?: CSSProperties["height"];
  style?: CSSProperties;
  children?: ReactNode;
};
