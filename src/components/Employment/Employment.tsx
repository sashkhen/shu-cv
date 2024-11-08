import clsx from "clsx";
import React from "react";

import data from "../../constants/data.json";
import { List } from "../List";
import { Pill } from "../Pill";
import { Summary } from "../Summary";
import styles from "./Employment.module.css";

type BaseProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "data-testid" | "ref"
>;

export type EmploymentProps = BaseProps & {
  position?: string;
  company: string;
  location: string;
  startDate: string;
  endDate?: string;
  responsibilities?: string[];
  techStack?: string[];
};

const Employment: React.FC<EmploymentProps> = ({
  position = data.position,
  company,
  location,
  startDate,
  endDate,
  responsibilities,
  techStack = [],
  className,
  ...props
}) => {
  return (
    <div className={clsx(styles.root, className)} {...props}>
      <Summary
        position={position}
        company={company}
        location={location}
        startDate={startDate}
        endDate={endDate}
      />
      <List
        className={styles.responsibilities}
        items={responsibilities?.map((item) => ({ content: item }))}
      />
      {techStack ? (
        <ul className={styles.pills}>
          {techStack.map((item) => (
            <Pill key={item}>{item.trim()}</Pill>
          ))}
        </ul>
      ) : null}
    </div>
  );
};

export default Employment;
