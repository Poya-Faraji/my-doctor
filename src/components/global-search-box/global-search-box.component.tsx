import type { ReactNode } from "react";

import MingcuteLocationLine from "@/icons/MingcuteLocationLine";
import MingcuteSearchLine from "@/icons/MingcuteSearchLine";

import styles from "./global-search-box.module.css";

export default function GlobalSearchBoxComponent(): ReactNode {
  return (
    <div className={styles["global-search-box"]}>
      <div className={styles.prefix}>
        <MingcuteSearchLine />
      </div>
      <input
        type="text"
        placeholder="Search by condition, specialty, doctor, hospital, and more..."
      />
      <div className={styles.divider}></div>
      <div className={styles.suffix}>
        <button>
          <MingcuteLocationLine />
          All cities
        </button>
      </div>
    </div>
  );
}
