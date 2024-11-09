import clsx from "clsx";
import React from "react";
import QRCode from "react-qr-code";

import data from "../../constants/data.json";
import { Contacts } from "../Contacts";
import { Education } from "../Education";
import { Employment } from "../Employment";
import { List } from "../List";
import { Pill } from "../Pill";
import { Section } from "../Section";
import { Square } from "../Square";
import styles from "./Resume.module.css";

type BaseProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "data-testid" | "ref"
>;

export type ResumeProps = BaseProps & {};

const Resume: React.FC<ResumeProps> = ({ className, ...props }) => {
  return (
    <div className={clsx(styles.root, className)} {...props}>
      <div className={styles.head}>
        <div>
          <h1>{data.name}</h1>
          <h2>{data.position}</h2>
        </div>
        <Square basedOnParent="height" className={clsx(styles.qrArea)}>
          <QRCode value={window.location.href} />
        </Square>
      </div>
      <div className={styles.left}>
        <Section title="Contact" className={styles.contact}>
          <Contacts name={data.name} {...data.contact} />
        </Section>
        <Section title="Core tech stack" className={styles.skills}>
          <ul className={styles.skillsList}>
            {data.skills.map((skill) => (
              <Pill key={skill}>{skill.trim()}</Pill>
            ))}
          </ul>
        </Section>
        <Section title="Languages" className={styles.languages}>
          <List
            items={data.languages.map((item) => ({
              ...item,
              content: item.name,
            }))}
          />
        </Section>
        <Section title="Education" className={styles.education}>
          <ul className={styles.listUnstyled}>
            {data.education.map((item, i) => (
              <li key={i}>
                <Education
                  specialization={item.specialization}
                  degree={item.degree}
                  school={item.school}
                  startDate={item.startDate}
                  endDate={item.endDate}
                  location={item.location}
                />
              </li>
            ))}
          </ul>
        </Section>
      </div>
      <div className={styles.right}>
        <Section title="Profile" className={styles.profile}>
          <p dangerouslySetInnerHTML={{ __html: data.footnote }} />
        </Section>
        <Section title="Employment history" className={styles.employment}>
          <ul className={styles.listUnstyled}>
            {data.employment.map((item, i) => (
              <li key={i}>
                <Employment
                  position={item.position}
                  company={item.company}
                  location={item.location}
                  startDate={item.startDate}
                  endDate={item.endDate}
                  responsibilities={item.responsibilities}
                  techStack={item.techStack}
                />
              </li>
            ))}
          </ul>
        </Section>
      </div>
    </div>
  );
};

export default Resume;
