"use client";

import { useQuery } from "@tanstack/react-query";
import { Container } from "../components/Layout";
import { fetchProjects } from "../lib/fetchProjects";

export default function page() {
  const { data, isError, isLoading } = useQuery({
    queryKey: ["projects"],
    queryFn: fetchProjects,
  });

  if (isError) return "Error!";
  if (isLoading) return "Loading...";

  return (
    <Container>
      <h1>Projects</h1>
      <ul>
        {data?.map((project: any) => (
          <li key={project.id}>{project.name}</li>
        ))}
      </ul>
    </Container>
  );
}
