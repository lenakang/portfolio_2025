import { Container } from "..";
import styles from "./main.module.scss";
import SkillsCard from "../../SkillsCard/SkillsCard";
import { skills } from "@/app/constants";

export default function index() {
    return (
        <main className={styles.main}>
            {/* About */}
            <section id="about" className={styles.about}>
                <Container className={styles.container}>
                    <h2>
                        Front-end Developer,
                        <br />
                        Narae Kang
                    </h2>
                    <p>
                        안녕하세요.
                        <br />
                        효율적인 웹 경험을 만드는 프론트엔드 개발자
                        <br /> Lena 입니다.
                    </p>
                </Container>
            </section>

            {/* Skills */}
            <section id="skills" className={styles.skills}>
                <Container className={styles.container}>
                    <h2>skills</h2>
                    <div className={styles.SkillsCard}>
                        {skills.map((skill) => (
                            <SkillsCard
                                key={skill.category}
                                icon={skill.icon}
                                title={skill.title}
                                skills={skill.stacks}
                                category={skill.category}
                            />
                        ))}
                    </div>
                </Container>
            </section>

            {/* Career */}
            <section id="career" className={styles.career}>
                <Container className={styles.container}>
                    <h2>career</h2>
                </Container>
            </section>

            {/* Projects */}
            <section id="projects" className={styles.projects}>
                <Container className={styles.container}>
                    <h2>projects</h2>
                </Container>
            </section>
        </main>
    );
}
