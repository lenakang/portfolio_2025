import { Container } from "../components/Layout";
import ProjectList from "../components/ProjectList/ProjectList";
import db from "../lib/db";

async function getProjects() {
    return await db.project.findMany({
        select: {
            id: true,
            name: true,
            photo: true,
        },
    });
}

export default async function page() {
    const projects = await getProjects();
    return (
        <Container>
            <h1>Projects</h1>
            {projects.map((project) => (
                <ProjectList key={project.id} {...project} />
            ))}
        </Container>
    );
}
