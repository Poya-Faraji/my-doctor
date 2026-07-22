"use client";

import type { ReactNode } from "react";

import styles from "./header.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

export default function HeaderComponent(): ReactNode {
  const pathname = usePathname();

  const navItems = [
    {
      url: "/",
      name: "Home",
    },
    {
      url: "/search",
      name: "Search",
    },
  ];

  return (
    <header className={styles.header}>
      <nav>
        <ul>
          {navItems.map((item, index) => {
            return (
              <li key={index}>
                <Link
                  href={item.url}
                  className={clsx(pathname === item.url && styles.active)}
                >
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <button className={styles["call-to-action"]}>login | register</button>
    </header>
  );
}
