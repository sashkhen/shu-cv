import clsx from "clsx";
import React from "react";

import styles from "./Summary.module.css";
import { datePretty, getDuration } from "./utils";

type BaseProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "data-testid" | "ref"
>;

export type EducationProps = BaseProps & {
  position: string;
  company: string;
  location: string;
  startDate: string;
  endDate?: string;
};

const Summary: React.FC<EducationProps> = ({
  position,
  company,
  location,
  startDate,
  endDate,
  className,
  ...props
}) => {
  const duration = getDuration(startDate, endDate);
  return (
    <div className={clsx(styles.root, className)} {...props}>
      <div className={styles.title}>
        <span className={styles.position}>{position.trim()}</span>
        {", "}
        <span className={styles.company}>{company.trim()}</span>
      </div>
      <div className={styles.duration}>
        <span className={styles.date}>{datePretty(startDate)}</span>
        {" — "}
        <span className={styles.date}>
          {endDate ? datePretty(endDate) : "ongoing"}
        </span>
        {duration >= 1
          ? ` (${duration} year${duration === 1 ? "" : "s"})`
          : "< year"}
      </div>
      <div className={styles.location}>{location.trim()}</div>
    </div>
  );
};

export default Summary;
