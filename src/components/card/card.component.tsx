import type { PropsWithChildren, ReactNode } from "react";

type Props = PropsWithChildren;

import styles from "@/components/card/card.module.css";

export default function CardComponent({ children }: Props): ReactNode {
  return <div className={styles.card}>{children}</div>;
}
