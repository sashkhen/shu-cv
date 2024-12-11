import { clsx } from "clsx";
import React from "react";

import { List, ListItem } from "../List";
import styles from "./Contacts.module.css";

type BaseProps = Omit<
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLUListElement>,
    HTMLUListElement
  >,
  "data-testid" | "ref"
>;

export type ContactsProps = BaseProps & {
  name: string;
  website?: string;
  email?: string;
  address?: string;
  github?: string;
  linkedin?: string;
};

const Contacts: React.FC<ContactsProps> = ({
  name,
  website,
  email,
  address,
  github,
  linkedin,
  className,
  ...props
}) => {
  return (
    <List className={clsx(styles.root, className)} {...props}>
      {website ? (
        <ListItem icon="💻">
          <a href={website} target="_blank">
            {new URL(website).hostname}
          </a>
        </ListItem>
      ) : null}
      {github ? (
        <ListItem icon="👩‍💻">
          github:{" "}
          <a href={`https://github.com/${github}/`} target="_blank">
            {github}
          </a>
        </ListItem>
      ) : null}
      {linkedin ? (
        <ListItem icon="💼">
          linkedin:{" "}
          <a href={linkedin} target="_blank">
            {name}
          </a>
        </ListItem>
      ) : null}
      {email ? (
        <ListItem icon="✉️">
          <a href={`mailto:${email}`} target="_blank">
            {email}
          </a>
        </ListItem>
      ) : null}
      {address ? <ListItem icon="📍">{`based in: ${address}`}</ListItem> : null}
    </List>
  );
};

export default Contacts;
