import { careerData } from "@/app/lib/careerData";
import { Container } from "../..";
import styles from "./career.module.scss";

export default function Career() {
  return (
    <section id="career" className={styles.career}>
      <Container>
        <div className={styles.career__inner}>
          <h2>Career</h2>

          <p className={styles.career__intro}>
            3년간 에이전시에서 퍼블리싱 업무를 통해 CSS 스타일링 전문성을
            키웠으며, 이후 프론트엔드 개발자로 전향하여 웹 개발 역량을
            확장해왔습니다.
          </p>

          <div className={styles.career__timeline}>
            {careerData.map((career, index) => (
              <div key={index} className={styles.career__card}>
                <div className={styles.career__header}>
                  <div className={styles.career__company}>
                    <div className={styles.career__company_name}>
                      🏢
                      <h3>{career.company}</h3>
                    </div>

                    <div className={styles.career__company_position}>
                      💼
                      <span>{career.position}</span>
                    </div>

                    <div className={styles.career__company_period}>
                      📅
                      <span>{career.period}</span>
                    </div>
                  </div>

                  <div className={styles.career__skills}>
                    {career.skills.map((skill) => (
                      <span key={skill} className={styles.career__skills_tag}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <p className={styles.career__description}>
                  {career.description}
                </p>

                <div className={styles.career__achievements}>
                  <h4 className={styles.career__achievements_title}>
                    주요 성과:
                  </h4>
                  <ul className={styles.career__achievements_list}>
                    {career.achievements.map((achievement, i) => (
                      <li
                        key={i}
                        dangerouslySetInnerHTML={{ __html: achievement }}
                      />
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
