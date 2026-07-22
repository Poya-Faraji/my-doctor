import type { ReactNode } from "react";
import Link from "next/link";

import MingcuteLinkedinFill from "@/icons/MingcuteLinkedinFill";
import MingcuteTelegramFill from "@/icons/MingcuteTelegramFill";
import MingcuteGithub2Fill from "@/icons/MingcuteGithub2Fill";

import styles from "./footer.module.css";

export default function FooterComponent(): ReactNode {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.text}>
            <p className={styles.logo}>My Doctor</p>
            <p className={styles.desc}>
              helps you find trusted doctors, read patient reviews, and book
              appointments with ease.
            </p>
          </div>

          <ul className={styles.icons}>
            <li>
              <Link href="https://www.linkedin.com/in/poya-faraji/">
                <MingcuteLinkedinFill width={"1.2rem"} height={"1.2rem"} />
              </Link>
            </li>

            <li>
              <Link href="https://github.com/Poya-Faraji">
                <MingcuteGithub2Fill width={"1.2rem"} height={"1.2rem"} />
              </Link>
            </li>

            <li>
              <Link href="https://t.me/poya_faraji">
                <MingcuteTelegramFill width={"1.2rem"} height={"1.2rem"} />
              </Link>
            </li> 
          </ul>
        </div>

        <p className={styles["copy-right"]}>
          © {year} My Doctor. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
