import { ReactElement } from "react";
import Image from "next/image";

import notFoundImage from "@/assets/illustrations/not-found.svg";

import GlobalSearchBoxComponent from "@/components/global-search-box/global-search-box.component";

import styles from "@/app/not-found.module.css";

export default function NotFound(): ReactElement {
  return (
    <div className={styles["not-found"]}>
      <div className={styles.writings}>
        <div className={styles["status-code"]}>Error 404</div>
        <h1>Page you are looking is not found</h1>
        <p>
          Please search for your desired doctor or treatment center using the
          search box.
        </p>
      </div>
      <div className={styles.visuals}>
        <Image src={notFoundImage} alt="" />
      </div>
      <div className={styles.search}>
        <GlobalSearchBoxComponent />
      </div>
    </div>
  );
}
