import styles from "./index.module.scss";

import Formula from "../Formula";

export default function QuestionOne() {
  const answer = `1+2-3+4-5+6-......+或-N
= (-1+2-3+4-5+6-......+或-N) + 2
An = ((-1)^n) * n
Sn = (-1)^n * ⌈n/2⌉ + 2

const calculateSum = () => {
  const ceilingOfHalfN = Math.ceil(Number(n) / 2);
  const Sn = Math.pow(-1, Number(n)) * ceilingOfHalfN;
  const calculatedSum = Sn + 2;

  return calculatedSum
};`;

  return (
    <div className={styles.questionOne}>
      <h2 className={styles.questionOne__title}>Calculator</h2>
      <p className={styles.questionOne__description}>
        寫一個函式計算下列公式之總和：
      </p>
      <p className={styles.questionOne__formula}>
        <strong>1+2-3+4-5+6-......+或-N</strong>
      </p>
      <p className={styles.questionOne__note}>（N 會是大於 2^20 正整數）</p>
      <pre className={styles.questionOne__code}>
        <code className={styles["questionOne__code-text"]}>{answer}</code>
      </pre>
      <Formula />
    </div>
  );
}
