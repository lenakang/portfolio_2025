import Link from "next/link";
import { Container } from "../..";
import styles from "./projects.module.scss";

export default function Projects() {
    return (
        <section id="projects" className={styles.projects}>
            <Container>
                <div className={styles.projects__inner}>
                    <h2>projects</h2>
                </div>
                <Link href="projects">More</Link>
            </Container>
        </section>
    );
}
