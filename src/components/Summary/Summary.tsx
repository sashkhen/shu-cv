import clsx from "clsx";
import moment from "moment";
import React from "react";

import styles from "./Summary.module.css";

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
  displayDuration?: boolean;
};

const beautify = (date: string) => moment(date).format("MMM YYYY");
const getDiff = (a: string, b?: string) => moment(b).from(moment(a), true);

const Summary: React.FC<EducationProps> = ({
  position,
  company,
  location,
  startDate,
  endDate,
  displayDuration = true,
  className,
  ...props
}) => {
  return (
    <div className={clsx(styles.root, className)} {...props}>
      <div className={styles.title}>
        <span className={styles.position}>{position.trim()}</span>
        {", "}
        <span className={styles.company}>{company.trim()}</span>
      </div>
      <div className={styles.duration}>
        <span className={styles.date}>{beautify(startDate)}</span>
        {" — "}
        <span className={styles.date}>
          {endDate ? beautify(endDate) : "ongoing"}
        </span>
        {displayDuration ? ` (${getDiff(startDate, endDate)})` : null}
      </div>
      <div className={styles.location}>{location.trim()}</div>
    </div>
  );
};

export default Summary;
