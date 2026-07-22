import GlobalSearchBoxComponent from "@/components/global-search-box/global-search-box.component";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <GlobalSearchBoxComponent />
    </div>
  );
}
