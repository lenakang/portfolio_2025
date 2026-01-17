import db from "./db";

export interface Project {
  id: number;
  name: string;
  photo: string | null;
}

export async function getProjects(limit?: number): Promise<Project[]> {
  try {
    const projects = await db.project.findMany({
      select: {
        id: true,
        name: true,
        photo: true,
      },
      orderBy: {
        id: "desc",
      },
      take: limit,
    });

    return projects || [];
  } catch (error) {
    console.error("데이터를 불러오는데 실패했습니다:", error);

    return [];
  }
}
