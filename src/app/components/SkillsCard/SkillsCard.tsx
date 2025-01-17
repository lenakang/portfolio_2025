import styles from "./skillsCard.module.scss";

interface SkillsCardProps {
    category: string;
    icon: string;
    title: string;
    skills: string[];
}

export default function SkillsCard({
    icon: Icon,
    title,
    skills,
}: SkillsCardProps) {
    return (
        <div className={styles.card}>
            <div className={styles.card__header}>
                <i className={styles.icon}>{Icon}</i>
                <h3 className={styles.title}>{title}</h3>
            </div>
            <div className={styles.card__skills}>
                {skills.map((skill, i) => (
                    <span key={i} className={styles.skill}>
                        {skill}
                    </span>
                ))}
            </div>
        </div>
    );
}
