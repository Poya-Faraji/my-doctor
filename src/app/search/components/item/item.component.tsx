import { type ReactNode } from "react";

import styles from "./item.module.css";
import clsx from "clsx";
import { ItemType } from "@/types/item.types";

type Props = {
  item: ItemType;
};

export default function ItemComponent({ item }: Props): ReactNode {
  return <li className={clsx(styles.item)}>{item.value}</li>;
}
