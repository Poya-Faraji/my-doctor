import type { ReactNode } from "react";

import FilterProvider from "./providers/filters.provider";

import FilterComponent from "./components/filter/filter.component";

import styles from "@/app/search/page.module.css";
import { FiltersType } from "./types/filters.types";
import ListComponent from "./components/results/list.component";
import ItemsProvider from "./providers/items/items.provider";

const OddOrEvenOptions = [
  { key: "odd" as keyof FiltersType, label: "odd" },
  { key: "even" as keyof FiltersType, label: "even" },
];

const DividieOptions = [
  { key: "divByThree" as keyof FiltersType, label: "Divide by 3" },
  { key: "divByFive" as keyof FiltersType, label: "Divide by 5" },
  { key: "divBySeven" as keyof FiltersType, label: "Divide by 7" },
];

const numbers = Array(100)
  .fill(null)
  .map((_, i) => ({ value: i + 1 }));

export default function SearchPage(): ReactNode {
  return (
    <FilterProvider>
      <ItemsProvider items={numbers}>
        <div className={styles.page}>
          <div className={styles.filter}>
            <FilterComponent title="Odd or Even" options={OddOrEvenOptions} />
            <FilterComponent title="Dividable" options={DividieOptions} />
          </div>
          <div className={styles.result}>
            <ListComponent />
          </div>
        </div>
      </ItemsProvider>
    </FilterProvider>
  );
}
