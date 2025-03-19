export const fetchProjects = async () => {
  const res = await fetch("/api/projects");
  if (!res.ok) throw new Error(`HTTP Error : ${res.status}`);

  return res.json();
};
