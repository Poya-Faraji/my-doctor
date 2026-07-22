import { ReactNode } from "react";

import GlobalSearchBoxComponent from "@/components/global-search-box/global-search-box.component";

import MyDoctorLogo from "@/logo/my-doctor";

import styles from "./page.module.css";

export default function Home(): ReactNode {
  return (
    <div className={styles.home}>
      <h1>
        My doctor
        <MyDoctorLogo />
      </h1>
      <GlobalSearchBoxComponent />
      <div className={styles.history}>
        <div className={styles.title}>Your recent searches</div>
        <ul>
          <li>Orthopedic</li>
          <li>Cardiovascular</li>
        </ul>
      </div>
    </div>
  );
}
