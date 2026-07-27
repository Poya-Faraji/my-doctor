"use client";
import { ReactNode } from "react";

import styles from "@/app/search/components/results/list.module.css";
import ItemComponent from "../item/item.component";

const numbers = Array(100)
  .fill(null)
  .map((_, i) => i + 1);

export default function ListComponent(): ReactNode {
  return (
    <div className={styles.results}>
      <ul>
        {numbers.map((number) => {
          return <ItemComponent item={number} key={number} />;
        })}
      </ul>
    </div>
  );
}
