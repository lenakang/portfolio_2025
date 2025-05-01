import Link from "next/link";
import styles from "./header.module.scss";

export default function Logo() {
  return (
    <h1 className={styles.logo}>
      <Link href="/">
        LENA&apos;s <br />
        Portfolio
      </Link>
    </h1>
  );
}
