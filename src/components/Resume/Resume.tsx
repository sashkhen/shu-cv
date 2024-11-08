import clsx from "clsx";
import React from "react";

import data from "../../constants/resume";
import { Education } from "../Education";
import { Employment } from "../Employment";
import { List, ListItem } from "../List";
import { Pill } from "../Pill";
import { Section } from "../Section";
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
        <h1>{data.name}</h1>
        <h2>{data.position}</h2>
      </div>
      <div className={styles.left}>
        <Section title="Contact">
          <List>
            <ListItem icon="✉️">
              {/* email:{" "} */}
              <a href={`mailto:${data.contact.email}`} target="_blank">
                {data.contact.email}
              </a>
            </ListItem>
            <ListItem icon="👩‍💻">
              github:{" "}
              <a
                href={`https://github.com/${data.contact.github}/`}
                target="_blank"
              >
                {data.contact.github}
              </a>
            </ListItem>
            <ListItem icon="💼">
              {" "}
              linkedin:{" "}
              <a href={data.contact.linkedin} target="_blank">
                {data.name}
              </a>
            </ListItem>
            <ListItem icon="📍">{`based in: ${data.contact.address}`}</ListItem>
          </List>
        </Section>
        <Section title="Skills">
          <ul className={styles.skills}>
            {data.skills.map((skill) => (
              <Pill key={skill}>{skill.trim()}</Pill>
            ))}
          </ul>
        </Section>
        <Section title="Languages">
          <List
            items={data.languages.map((item) => ({
              ...item,
              content: item.name,
            }))}
          />
        </Section>
        <Section title="Education">
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
        {/* <Section>
          <p dangerouslySetInnerHTML={{ __html: data.footnote }} />
        </Section> */}
      </div>
      <div className={styles.right}>
        {/* <Section title="Profile">
          <p>{data.description}</p>
        </Section> */}
        <Section title="Profile">
          <p dangerouslySetInnerHTML={{ __html: data.footnote }} />
        </Section>
        <Section title="Employment history">
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
        {/* <Section title="Education">
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
        </Section> */}
        {/* <Section>
          <p dangerouslySetInnerHTML={{ __html: data.footnote }} />
        </Section> */}
      </div>
    </div>
  );
};

export default Resume;
