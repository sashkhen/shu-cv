import { clsx } from "clsx";
import React from "react";

import styles from "./Square.module.css";

type BaseProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "data-testid" | "ref"
>;

export type SquareProps = BaseProps & {
  basedOnParent: "height" | "width";
};

const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);

const Square: React.FC<SquareProps> = ({
  basedOnParent,
  children,
  className,
  ...props
}) => {
  return (
    <div
      className={clsx(
        styles.root,
        styles[`basedOnParent${capitalize(basedOnParent)}`],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default Square;
