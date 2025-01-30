import React from "react";
import { TButton } from "../../utils/types";
import "./Button.scss";

const Button = ({ children, onClick, className }: TButton) => {
  return (
    <button className={`button ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
