import clsx from "clsx";
import React from "react";

import { List } from "../List";
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
};

const Employment: React.FC<EmploymentProps> = ({
  position = "Front-end Web Developer",
  company,
  location,
  startDate,
  endDate,
  responsibilities,
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
        className="text--smaller"
        items={responsibilities?.map((item) => ({ content: item }))}
      />
    </div>
  );
};

export default Employment;
