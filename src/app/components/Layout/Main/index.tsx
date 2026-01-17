import styles from "./main.module.scss";
import About from "./About/About";
import Skills from "./Skills/Skills";
import Career from "./Career/Career";
import Projects from "./Projects/Projects";
import ScrollHandler from "./ScrollHandler";

export default function index() {
  return (
    <main className={styles.main}>
      <ScrollHandler />
      <About />
      <Skills />
      <Projects />
      <Career />
    </main>
  );
}
