import clsx from "clsx";
import styles from "./form.module.scss";

interface IButton {
    text: string;
    primary?: boolean;
}

export default function Button({ text, primary }: IButton) {
    return (
        <button
            className={clsx(styles.button, {
                [styles.primary]: primary,
            })}
        >
            {text}
        </button>
    );
}
