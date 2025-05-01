"use client";

import { Container } from "..";
import { Button } from "../../Form";
import Logo from "./Logo";
import NavMenu from "./NavMenu";
import SearchForm from "./SearchForm";
import SocialLinks from "./SocialLinks";
import styles from "./header.module.scss";

export default function index() {
  return (
    <header className={styles.header}>
      <Container className={styles.header_container}>
        <Logo />
        <nav className={styles.nav}>
          <div className={styles.nav_top}>
            <div className={styles.nav_top_center}>
              <NavMenu />
              <SearchForm />
            </div>
            <div className={styles.nav_top_right}>
              <Button text="Submission" />
            </div>
          </div>
          <div className={styles.nav_bottom}>
            <SocialLinks />
          </div>
        </nav>
      </Container>
    </header>
  );
}
