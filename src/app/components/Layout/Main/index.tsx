import styles from "./main.module.scss";
import About from "./About/About";
import Skills from "./Skills/Skills";
import Career from "./Career/Career";
import Projects from "./Projects/Projects";

export default function index() {
  return (
    <main className={styles.main}>
      <About />
      <Skills />
      <Projects />
      <Career />
    </main>
  );
}
