import type { ReactNode } from "react";

import clsx from "clsx";

import styles from "@/app/search/page.module.css";
import FilterComponent from "./components/filter/filter.component";

const numbers = Array(100)
  .fill(null)
  .map((_, i) => i + 1);

const OddOrEvenOptions = [
  { value: "odd", label: "odd" },
  { value: "even", label: "even" },
];

const DividieOptions = [
  { value: "three", label: "Divide by 3" },
  { value: "five", label: "Divide by 5" },
  { value: "seven", label: "Divide by 7" },
];

export default function SearchPage(): ReactNode {
  return (
    <div className={styles.page}>
      <div className={styles.filter}>
        <FilterComponent title="Odd or Even" options={OddOrEvenOptions} />
        <FilterComponent title="Dividable" options={DividieOptions} />
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
