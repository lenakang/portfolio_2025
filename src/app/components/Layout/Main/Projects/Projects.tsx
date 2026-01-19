import Link from "next/link";
import Image from "next/image";
import { Container } from "../..";
import styles from "./projects.module.scss";
import { projects } from "@/app/lib/projects";

export default function Projects() {
  return (
    <section id="projects" className={styles.projects}>
      <Container>
        <div className={styles.projects__intro}>
          <h2>Projects</h2>
        </div>
      </Container>

      <div className={styles.projects__list}>
        {projects.map((project) => (
          <Link
            key={project.id}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.projects__list_item}
          >
            <Image
              src={project.thumbnail}
              width={400}
              height={400}
              alt={project.title}
            />

            <div className={styles.projects__info}>
              <strong className={styles.projects__title}>
                {project.title}
              </strong>
              <p className={styles.projects__description}>
                {project.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
