import { Container } from "../..";
import styles from "./about.module.scss";

export default function About() {
    return (
        <section id="about" className={styles.about}>
            <Container>
                <div className={styles.about__inner}>
                    <h2>
                        Front-end Developer,
                        <br />
                        Narae Kang
                    </h2>
                    <p>
                        안녕하세요.
                        <br />
                        효율적인 웹 경험을 만드는 프론트엔드 개발자
                        <br /> 강나래입니다.
                    </p>
                </div>
            </Container>
        </section>
    );
}
