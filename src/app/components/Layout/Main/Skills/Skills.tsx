import { Container } from "../..";
import { skillsData } from "@/app/lib/skillsData";
import SkillsCard from "@/app/components/SkillsCard/SkillsCard";
import styles from "./skills.module.scss";

export default function Skills() {
    return (
        <section id="skills" className={styles.skills}>
            <Container>
                <div className={styles.skills__inner}>
                    <h2>skills</h2>
                    <div className={styles.skills__card}>
                        {skillsData.map((skill) => (
                            <SkillsCard
                                key={skill.category}
                                icon={skill.icon}
                                title={skill.title}
                                skills={skill.stacks}
                                category={skill.category}
                            />
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
}
