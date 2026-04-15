import type {  CSSProperties, ReactNode } from "react";
import type { LinkProps } from "react-router-dom";

export type CustomButtonProps =  Omit<LinkProps, 'style'> & {
  text: string;
  to: string;
  width?: CSSProperties["width"];
  height?: CSSProperties["height"];
  style?: CSSProperties;
  children?: ReactNode;
};
