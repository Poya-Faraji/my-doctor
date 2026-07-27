import type { ReactNode } from "react";

import CardComponent from "@/components/card/card.component";
import FilterBtnComponent from "@/components/filter-button/filter-button.component";

import styles from "@/app/search/components/filter/filter.module.css";

type Option = {
  label: string;
  value: string;
};

type Props = {
  title: string;
  options: Option[];
};

export default function FilterComponent({ title, options }: Props): ReactNode {
  return (
    <div className={styles.filter}>
      <CardComponent>
        <div className={styles.title}>{title}</div>

        <div className={styles.buttons}>
          {options.map((option) => {
            return (
              <FilterBtnComponent key={option.value}>
                {option.label}
              </FilterBtnComponent>
            );
          })}
        </div>
      </CardComponent>
    </div>
  );
}
