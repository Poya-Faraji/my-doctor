"use client";

import type { ReactNode } from "react";

import styles from "./header.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

export default function HeaderComponent(): ReactNode {
  const pathname = usePathname();

  return (
    <header className={styles.header}>
      <nav>
        <ul>
          <li>
            <Link href="/" className={clsx(pathname === "/" && styles.active)}>
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/search"
              className={clsx(pathname === "/search" && styles.active)}
            >
              Search
            </Link>
          </li>
        </ul>
      </nav>
      <button className={styles["call-to-action"]}>login | register</button>
    </header>
  );
}
