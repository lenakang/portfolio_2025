import { ReactNode } from "react";

interface IContainer {
    children: ReactNode;
    className?: string;
}

export default function index({ children, className }: IContainer) {
    return <main className={`container ${className}`}>{children}</main>;
}
