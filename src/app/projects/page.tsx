import { Container } from "../components/Layout";
import ProjectList from "../components/ProjectList/ProjectList";
import db from "../lib/db";

export default async function page() {
  const projects = await db.project.findMany({
    select: {
      id: true,
      name: true,
      photo: true,
    },
  });

  return (
    <Container>
      <h1>Projects</h1>
      {projects.map((project) => (
        <ProjectList key={project.id} {...project} />
      ))}
    </Container>
  );
}
