"use client";

import Link from "next/link";
import { MagnifyingGlassIcon } from "@heroicons/react/16/solid";
import { Button } from "../../Form";
import { Container } from "..";
import styles from "./header.module.scss";

export default function index() {
    const scrollToSection = (id: string) => {
        const section = document.getElementById(id);
        section?.scrollIntoView({ behavior: "smooth" });
    };

    const links = ["about", "skills", "projects", "career"];

    return (
        <header className={styles.header}>
            <Container className={styles.header_container}>
                <h1 className={styles.logo}>
                    <Link href="/">
                        LENA&apos;s <br />
                        Portfolio
                    </Link>
                </h1>
                <nav className={styles.nav}>
                    <div className={styles.nav_top}>
                        <div className={styles.nav_top_center}>
                            <ul className={styles.nav_menu}>
                                {links.map((link) => (
                                    <li key={link}>
                                        <button
                                            className={styles.nav_menu_item}
                                            onClick={() =>
                                                scrollToSection(link)
                                            }
                                        >
                                            {link}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                            <form className={styles.nav_search}>
                                <div className={styles.nav_search_inner}>
                                    <input
                                        type="text"
                                        placeholder="Search Project Name"
                                    />
                                </div>

                                <button>
                                    <MagnifyingGlassIcon className="w-6 h-6 text-blue-500" />
                                </button>
                            </form>
                        </div>
                        <div className={styles.nav_top_right}>
                            <Button text="Submission" />
                        </div>
                    </div>
                    <div className={styles.nav_bottom}>
                        <Link
                            className={styles.nav_bottom_link}
                            href="https://github.com"
                            aria-label="GitHub"
                        >
                            <svg viewBox="0 0 496 512">
                                <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                            </svg>
                        </Link>
                        <Link
                            className={styles.nav_bottom_link}
                            href="https://github.com"
                            aria-label="GitHub"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 320 512"
                                style={{ width: "1.1rem" }}
                            >
                                <path d="M64 32C28.7 32 0 60.7 0 96L0 256 0 416c0 35.3 28.7 64 64 64l128 0c70.7 0 128-57.3 128-128c0-46.5-24.8-87.3-62-109.7c18.7-22.3 30-51 30-82.3c0-70.7-57.3-128-128-128L64 32zm96 192l-96 0L64 96l96 0c35.3 0 64 28.7 64 64s-28.7 64-64 64zM64 288l96 0 32 0c35.3 0 64 28.7 64 64s-28.7 64-64 64L64 416l0-128z" />
                            </svg>
                        </Link>
                        <Link
                            className={styles.nav_bottom_link}
                            href="https://github.com"
                            aria-label="GitHub"
                        >
                            <svg viewBox="0 0 512 512">
                                <path d="M64 112c-8.8 0-16 7.2-16 16l0 22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1l0-22.1c0-8.8-7.2-16-16-16L64 112zM48 212.2L48 384c0 8.8 7.2 16 16 16l384 0c8.8 0 16-7.2 16-16l0-171.8L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64l384 0c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64L64 448c-35.3 0-64-28.7-64-64L0 128z" />
                            </svg>
                        </Link>
                    </div>
                </nav>
            </Container>
        </header>
    );
}
