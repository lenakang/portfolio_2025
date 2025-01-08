import Nav from "./components/Layout/Nav/page";
import styles from "./page.module.css";

export default function Home() {
    return (
        <div className={styles.page}>
            <Nav />
            <main className={styles.main}></main>
        </div>
    );
}
