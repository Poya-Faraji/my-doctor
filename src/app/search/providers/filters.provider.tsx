"use client";

import { createContext, PropsWithChildren, ReactNode, useState } from "react";

import { FiltersType } from "../types/filters.types";

type ContextValue = {
  filters: FiltersType;
  changeFilter: <TKey extends keyof FiltersType>(
    key: TKey,
    value: FiltersType[TKey],
  ) => void;

  removeFilter: <TKey extends keyof FiltersType>(key: TKey) => void;
  clearFilters: () => void;
};

const defaultFilters: FiltersType = {
  odd: true,
  even: true,
  all: true,
  divByThree: true,
  divByFive: true,
  divBySeven: true,
};

export const FiltersContext = createContext<ContextValue>({
  filters: { ...defaultFilters },
  changeFilter: () => {},
  removeFilter: () => {},
  clearFilters: () => {},
});

type Props = PropsWithChildren;

export default function FilterProvider({ children }: Props): ReactNode {
  const [filters, setFilters] = useState<FiltersType>({ ...defaultFilters });

  const changeFilter = <TKey extends keyof FiltersType>(
    key: TKey,
    value: FiltersType[TKey],
  ): void => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const removeFilter = <TKey extends keyof FiltersType>(key: TKey): void => {
    setFilters((prev) => {
      const clone = { ...prev };
      delete clone[key];
      return clone;
    });
  };

  const clearFilters = (): void => {
    setFilters({ ...defaultFilters });
  };

  return (
    <FiltersContext
      value={{ filters, changeFilter, removeFilter, clearFilters }}
    >
      {children}
    </FiltersContext>
  );
}
