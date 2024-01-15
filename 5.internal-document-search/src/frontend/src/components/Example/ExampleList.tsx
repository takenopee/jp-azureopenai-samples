import { Example } from "./Example";

import styles from "./Example.module.css";

export type ExampleModel = {
    text: string;
    value: string;
};

const EXAMPLES: ExampleModel[] = [
    {
        text: "就業規則とは何ですか？",
        value: "就業規則とは何ですか？"
    },
    { text: "育児・介護休業規程の項目を出して", value: "育児・介護休業規程の項目を出して" },
    { text: "アースアイズ株式会社の定款について教えて", value: "アースアイズ株式会社の定款について教えて" }
];

interface Props {
    onExampleClicked: (value: string) => void;
}

export const ExampleList = ({ onExampleClicked }: Props) => {
    return (
        <ul className={styles.examplesNavList}>
            {EXAMPLES.map((x, i) => (
                <li key={i}>
                    <Example text={x.text} value={x.value} onClick={onExampleClicked} />
                </li>
            ))}
        </ul>
    );
};
