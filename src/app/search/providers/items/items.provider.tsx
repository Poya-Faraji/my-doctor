"use client";

import {
  createContext,
  PropsWithChildren,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

import { ItemType } from "@/types/item.types";
import { FiltersContext } from "../filters.provider";

type ContextValue = {
  filteredItems: ItemType[];
};

export const ItemsContext = createContext<ContextValue>({
  filteredItems: [],
});

type Props = PropsWithChildren & {
  items: ItemType[];
};

export default function ItemsProvider({ children, items }: Props): ReactNode {
  const { filters } = useContext(FiltersContext);

  const [filteredItems, setFilteredItems] = useState<ItemType[]>([]);
  const isActive = useCallback(
    (item: ItemType): boolean => {
      if (filters.odd && item.value % 2 === 1) {
        return true;
      }

      if (filters.even && item.value % 2 === 0) {
        return true;
      }

      if (filters.divByThree && item.value % 3 === 0) {
        return true;
      }

      if (filters.divByFive && item.value % 5 === 0) {
        return true;
      }

      return !!(filters.divBySeven && item.value % 7 === 0);
    },
    [filters],
  );

  useEffect(() => {
    setFilteredItems(items.filter(isActive));
  }, [isActive, items]);

  return <ItemsContext value={{ filteredItems }}>{children}</ItemsContext>;
}
