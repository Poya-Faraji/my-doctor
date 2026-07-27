import { useContext, useMemo, type ReactNode } from "react";

import { FiltersContext } from "../../providers/filters.provider";

import styles from "./item.module.css";
import clsx from "clsx";

type Props = {
  item: number;
};

export default function ItemComponent({ item }: Props): ReactNode {
  const { filters } = useContext(FiltersContext);

  const isActive = useMemo(() => {
    if (filters.odd && item % 2 === 1) {
      return true;
    }

    if (filters.even && item % 2 === 0) {
      return true;
    }

    if (filters.divByThree && item % 3 === 0) {
      return true;
    }

    if (filters.divByFive && item % 5 === 0) {
      return true;
    }

    return !!(filters.divBySeven && item % 7 === 0);
  }, [filters, item]);

  return (
    <li className={clsx(styles.item, isActive && styles.active)}>{item}</li>
  );
}
