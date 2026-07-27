import type { ReactNode } from "react";

import clsx from "clsx";

import CardComponent from "@/components/card/card.component";
import FilterBtnComponent from "@/components/filter-button/filter-button.component";

import styles from "@/app/search/page.module.css";

const numbers = Array(100)
  .fill(null)
  .map((_, i) => i + 1);

export default function SearchPage(): ReactNode {
  return (
    <div className={styles.page}>
      <div className={styles.filter}>
        <CardComponent>
          <div className={styles.title}>Odd or Even</div>

          <div className={styles.buttons}>
            <FilterBtnComponent>Odd</FilterBtnComponent>
            <FilterBtnComponent>Even</FilterBtnComponent>
          </div>
        </CardComponent>
      </div>

      <div className={styles.result}>
        <ul>
          {numbers.map((number) => {
            return (
              <li
                className={clsx(number % 2 === 0 && styles.active)}
                key={number}
              >
                {number}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
