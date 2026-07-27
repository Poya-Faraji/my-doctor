import type { ComponentProps, ReactNode } from "react";

import clsx from "clsx";

import styles from "@/components/filter-button/filter-button.module.css";

type Props = ComponentProps<"button"> & {
  active?: boolean;
};

export default function FilterBtnComponent({
  active = false,
  className,
  children,
  ...otherProps
}: Props): ReactNode {
  return (
    <button
      className={clsx(
        styles["filter-button"],
        active && styles.active,
        className,
      )}
      {...otherProps}
    >
      {children}
    </button>
  );
}
