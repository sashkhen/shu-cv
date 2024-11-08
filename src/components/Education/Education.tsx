import clsx from "clsx";
import React from "react";

import { Summary } from "../Summary";
import styles from "./Education.module.css";

type BaseProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "data-testid" | "ref"
>;

export type EducationProps = BaseProps & {
  specialization: string;
  degree: string;
  school: string;
  location: string;
  startDate: string;
  endDate?: string;
  description?: string;
};

const Education: React.FC<EducationProps> = ({
  specialization,
  degree,
  school,
  location,
  startDate,
  endDate = "ongoing",
  description,
  className,
  ...props
}) => {
  return (
    <div className={clsx(styles.root, className)} {...props}>
      <Summary
        position={`${degree.trim()} of ${specialization.trim()}`}
        company={school}
        location={location}
        startDate={startDate}
        endDate={endDate}
        displayDuration={false}
      />
      {description ? (
        <div className={styles.content}>
          <p className={styles.description}>{description.trim()}</p>
        </div>
      ) : null}
    </div>
  );
};

export default Education;
