import scrollToSection from "@/app/lib/scrollToSection";
import styles from "./header.module.scss";

const links = ["home", "skills", "projects", "career"];

export default function NavMenu() {
  return (
    <ul className={styles.nav_menu}>
      {links.map((link) => (
        <li key={link}>
          <button
            className={styles.nav_menu_item}
            onClick={() => scrollToSection(link)}
          >
            {link}
          </button>
        </li>
      ))}
    </ul>
  );
}
