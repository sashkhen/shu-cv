import clsx from "clsx";
import React from "react";

import styles from "./Pill.module.css";

type BaseProps = Omit<
  React.DetailedHTMLProps<React.LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>,
  "data-testid" | "ref"
>;

export type PillProps = BaseProps & {};

const Pill: React.FC<PillProps> = ({ children, className, ...props }) => {
  return (
    <li className={clsx(styles.root, className)} {...props}>
      {children}
    </li>
  );
};

export default Pill;
