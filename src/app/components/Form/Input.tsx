import styles from "./form.module.scss";

interface IInput {
    type?: string;
    placeholder?: string;
}

export default function Input({ type = "text", placeholder }: IInput) {
    return (
        <input className={styles.input} type={type} placeholder={placeholder} />
    );
}
