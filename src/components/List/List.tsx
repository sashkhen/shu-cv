import clsx from "clsx";
import React from "react";

import styles from "./List.module.css";

type BaseItemProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLLIElement>, HTMLLIElement>,
  "data-testid" | "ref"
>;

export type ItemProps = BaseItemProps & {
  icon?: string;
};

export const Item: React.FC<ItemProps> = ({ icon, children, ...props }) => {
  return (
    <li
      className={styles.item}
      style={
        icon
          ? {
              listStyleType: `"${icon}"`,
            }
          : undefined
      }
      {...props}
    >
      {children}
    </li>
  );
};

type BaseListProps = Omit<
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLUListElement>,
    HTMLUListElement
  >,
  "data-testid" | "ref"
>;

export type ListProps = BaseListProps & {
  items?: ItemProps[];
};

export const List: React.FC<ListProps> = ({
  items = [],
  children,
  className,
  ...props
}) => {
  return (
    <ul className={clsx(styles.root, className)} {...props}>
      {items.length
        ? items.map((item, i) => (
            <Item key={i} icon={item.icon}>
              {item.content}
            </Item>
          ))
        : children}
    </ul>
  );
};

export default List;
