import { Container } from "./components/Layout";

export default function Home() {
    return (
        <Container>
            <section id="About">
                <h2>
                    Front-end Developer,
                    <br />
                    Lena
                </h2>
                <p>
                    안녕하세요.
                    <br />
                    효율적인 웹 경험을 만드는 프론트엔드 개발자
                    <br /> Lena 입니다.
                </p>
            </section>
            <section id="Skills">
                <h2>SKILLS</h2>
            </section>
            <section id="Career">
                <h2>career</h2>
            </section>
            <section id="Projects">
                <h2>projects</h2>
            </section>
        </Container>
    );
}
