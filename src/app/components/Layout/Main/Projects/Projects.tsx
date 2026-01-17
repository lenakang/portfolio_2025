import Link from "next/link";
import { Container } from "../..";
import styles from "./projects.module.scss";
import Image from "next/image";
import { getProjects } from "@/app/lib/projects";

export default async function Projects() {
  const projects = await getProjects(6);

  return (
    <section id="projects" className={styles.projects}>
      <Container>
        <div className={styles.projects__intro}>
          <h2>projects</h2>
          <Link href="/projects">View More →</Link>
        </div>
      </Container>
      <div className={styles.projects__list}>
        {projects && projects.length > 0 ? (
          projects.map((project) => (
            <Link
              href={`/projects/${project.id}`}
              key={project.id}
              className={styles.projects__list_item}
            >
              <Image
                // DB에 이미지가 있으면 사용하고, 없으면 기존 샘플 이미지를 보여줍니다.
                src={project.photo || "/thumbnails/ooff.jpg"}
                width={400}
                height={400}
                alt={project.name || "project thumbnail"}
                // 기존 샘플 이미지와 똑같은 비율 유지를 위해 스타일 유지
              />
            </Link>
          ))
        ) : (
          <p style={{ fontSize: "1.6rem", padding: "2rem" }}>
            No projects found.
          </p>
        )}
      </div>
    </section>
  );
}
