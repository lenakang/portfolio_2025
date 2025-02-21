import Link from "next/link";
import { Container } from "../..";
import styles from "./projects.module.scss";
import Image from "next/image";

export default function Projects() {
    return (
        <section id="projects" className={styles.projects}>
            <Container>
                <div className={styles.projects__intro}>
                    <h2>projects</h2>
                    <Link href="projects">View More →</Link>
                </div>
            </Container>
            <div className={styles.projects__list}>
                {Array.from({ length: 20 }, (_, i) => (
                    <Link
                        href="/"
                        key={i}
                        className={styles.projects__list_item}
                    >
                        <Image
                            src="/thumbnails/ooff.jpg"
                            width="400"
                            height="400"
                            alt="thumbnail"
                        />
                    </Link>
                ))}
            </div>
        </section>
    );
}
