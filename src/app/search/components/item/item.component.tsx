import { useContext, type ReactNode } from "react";

import { FiltersContext } from "../../providers/filters.provider";

import styles from "./item.module.css";

type Props = {
  item: number;
};

export default function ItemComponent({ item }: Props): ReactNode {
  const { filters } = useContext(FiltersContext);

  return <li className={styles.item}>{item}</li>;
}
