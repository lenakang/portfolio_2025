import clsx from "clsx";
import styles from "./skillsCard.module.scss";

interface SkillsCardProps {
    category: string;
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    title: string;
    skills: string[];
}

export default function SkillsCard({
    category,
    icon: Icon,
    title,
    skills,
}: SkillsCardProps) {
    return (
        <div className={clsx(styles.card, styles[`card--${category}`])}>
            <div className={styles.card__header}>
                <Icon className={styles.icon} />
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
