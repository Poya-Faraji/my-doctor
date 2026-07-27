"use client";

import { useContext, type ReactNode } from "react";

import clsx from "clsx";

import { FiltersType } from "../../types/filters.types";

import { FiltersContext } from "../../providers/filters.provider";

import CardComponent from "@/components/card/card.component";
import FilterBtnComponent from "@/components/filter-button/filter-button.component";

import styles from "@/app/search/components/filter/filter.module.css";

type Option = {
  label: string;
  key: keyof FiltersType;
};

type Props = {
  title: string;
  options: Option[];
};

export default function FilterComponent({ title, options }: Props): ReactNode {
  const { filters, changeFilter } = useContext(FiltersContext);

  return (
    <div className={styles.filter}>
      <CardComponent>
        <div className={styles.title}>{title}</div>

        <div className={styles.buttons}>
          {options.map((option) => {
            return (
              <FilterBtnComponent
                key={option.key}
                className={clsx(filters[option.key] && styles.active)}
                onClick={() => changeFilter(option.key, !filters[option.key])}
              >
                {option.label}
              </FilterBtnComponent>
            );
          })}
        </div>
      </CardComponent>
    </div>
  );
}
