import { ReactNode } from "react";
import styles from "./container.module.scss";
import clsx from "clsx";

interface IContainer {
    children: ReactNode;
    className?: string;
}

export default function index({ children, className }: IContainer) {
    return <div className={clsx(className, styles.container)}>{children}</div>;
}
