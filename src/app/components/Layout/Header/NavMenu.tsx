import scrollToSection from "@/app/lib/scrollToSection";
import styles from "./header.module.scss";
import { usePathname, useRouter } from "next/navigation";

const links = ["skills", "projects", "career"];

export default function NavMenu() {
  const pathname = usePathname();
  const router = useRouter();

  const handleClick = (link: string) => {
    if (pathname === "/") {
      scrollToSection(link);
    } else {
      sessionStorage.setItem("nextScrollTarget", link);
      router.push("/");
    }
  };

  return (
    <ul className={styles.nav_menu}>
      {links.map((link) => (
        <li key={link}>
          <button
            className={styles.nav_menu_item}
            onClick={() => handleClick(link)}
          >
            {link}
          </button>
        </li>
      ))}
    </ul>
  );
}
