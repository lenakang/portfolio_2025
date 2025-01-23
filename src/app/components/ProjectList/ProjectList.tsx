import Image from "next/image";

interface ProjectList {
    id: number;
    name: string;
    photo: string | null;
}

export default function ProjectList({ id, name, photo }: ProjectList) {
    return (
        <div>
            {id}
            {photo ? (
                <Image src={photo} width={400} height={400} alt="thumbnail" />
            ) : null}
            {name}
        </div>
    );
}
