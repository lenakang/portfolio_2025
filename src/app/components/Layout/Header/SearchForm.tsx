import { MagnifyingGlassIcon } from "@heroicons/react/16/solid";
import styles from "./header.module.scss";

export default function SearchForm() {
  return (
    <form className={styles.nav_search}>
      <div className={styles.nav_search_inner}>
        <input type="text" placeholder="Search Project Name" />
      </div>

      <button>
        <MagnifyingGlassIcon className="w-6 h-6 text-blue-500" />
      </button>
    </form>
  );
}
