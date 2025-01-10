import {
    WindowIcon,
    ServerStackIcon,
    FolderOpenIcon,
    PaintBrushIcon,
} from "@heroicons/react/24/solid";

export const skills = [
    {
        category: "frontend",
        title: "Frontend",
        icon: WindowIcon,
        stacks: [
            "React.js",
            "Next.js",
            "JavaScript",
            "TypeScript",
            "React Query",
            "Recoil",
            "React Hook Form",
            "Framer Motion",
            "Styled Components",
            "Sass",
            "Tailwind CSS",
            "Ant Design",
            "Bootstrap",
            "HTML5",
            "CSS3",
            "SCSS",
            "jQuery",
        ],
    },
    {
        category: "backend",
        title: "Backend",
        icon: ServerStackIcon,
        stacks: ["Firebase", "Prisma", "Planetscale"],
    },
    {
        category: "version",
        title: "Version Control",
        icon: FolderOpenIcon,
        stacks: ["Git", "GitHub", "Bitbucket", "Jira"],
    },
    {
        category: "tools",
        title: "Design Tools",
        icon: PaintBrushIcon,
        stacks: ["Figma", "Zeplin", "Adobe Photoshop", "Adobe Illustrator"],
    },
];
