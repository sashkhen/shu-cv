import { clsx } from "clsx";
import React from "react";

import styles from "./Section.module.css";

type BaseProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "data-testid" | "ref"
>;

export type SectionProps = BaseProps & {
  title?: string;
};

const Section: React.FC<SectionProps> = ({
  title,
  children,
  className,
  ...props
}) => {
  return (
    <div className={clsx(styles.root, className)} {...props}>
      {title && <h3 className={styles.title}>{title.trim()}</h3>}
      <div className={styles.content}>{children}</div>
    </div>
  );
};

export default Section;
