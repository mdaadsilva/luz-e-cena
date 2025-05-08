import React from "react";
import classnames from "classnames";
import styles from "./Button.module.css";

type ButtonProps = {
  variant: "default" | "icon";
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ children, variant = "default", ...rest }: ButtonProps) => {
const classMap: Record<ButtonProps["variant"], string> = {
    default: styles.default,
    icon: styles.icon,
};

  return (
    <button className={classnames(styles.botao, classMap[variant])} {...rest}>
      {children}
    </button>
  );
};

export default Button;