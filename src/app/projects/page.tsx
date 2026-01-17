import { Container } from "../components/Layout";
import ProjectList from "../components/ProjectList/ProjectList";
import db from "../lib/db";

interface Project {
  id: number;
  name: string;
  photo: string | null;
}

export default async function Page() {
  const projects: Project[] = await db.project.findMany({
    select: {
      id: true,
      name: true,
      photo: true,
    },
  });

  return (
    <Container>
      <h1>Projects</h1>
      {projects.map((project: Project) => (
        <ProjectList key={project.id} {...project} />
      ))}
    </Container>
  );
}
