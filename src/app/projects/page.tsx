import { Container } from "../components/Layout";
import ProjectList from "../components/ProjectList/ProjectList";
import db from "../lib/db";

async function getProjects() {
  const projects = await db.project.findMany({
    select: {
      id: true,
      name: true,
      photo: true,
    },
  });

  return {
    props: { projects },
    revalidate: 60,
  };
}

export default async function page({
  projects,
}: {
  projects: { id: number; name: string; photo: string }[];
}) {
  return (
    <Container>
      <h1>Projects</h1>
      {projects.map((project) => (
        <ProjectList key={project.id} {...project} />
      ))}
    </Container>
  );
}
