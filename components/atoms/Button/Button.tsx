import React from "react";
import styles from './Button.module.css'

type Props = {
  name?: string;
  type?: "reset" | "button" | "submit";
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  style?: any;
};



const Button: React.FC<Props> = ({
  name,
  onClick,
  children,
  style,
  type,
  className,
}) => {
  return (
    <button type={type} style={style} onClick={onClick} className={`${className}`}>
      {children}
    </button>
  );
};

export default Button;
