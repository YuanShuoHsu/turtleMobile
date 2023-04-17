import { useState, ChangeEvent, FormEvent } from "react";
import styles from "./index.module.scss";

export default function QuestionOne() {
  const [n, setN] = useState<string>("");
  const [sum, setSum] = useState<number | null>(null);

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

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    const regex = /^[1-9]\d*$/;
    if (inputValue === "" || regex.test(inputValue)) {
      setN(inputValue);
    }
  };

  const calculateSum = () => {
    const ceilingOfHalfN = Math.ceil(Number(n) / 2);
    const Sn = Math.pow(-1, Number(n)) * ceilingOfHalfN;
    const calculatedSum = Sn + 2;

    return calculatedSum;
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (n === "") {
      return;
    }

    setSum(calculateSum());
  };

  return (
    <form onSubmit={handleSubmit} className={styles.questionOne}>
      <h2 className={styles.questionOne__title}>Calculator</h2>
      <p className={styles.questionOne__description}>
        寫一個函式計算下列公式之總和：
      </p>
      <p className={styles.questionOne__formula}>
        1+2-3+4-5+6-......+或-N
      </p>
      <p className={styles.questionOne__note}>（N 會是正整數）</p>
      <pre className={styles.questionOne__code}>
        <code className={styles["questionOne__code-text"]}>{answer}</code>
      </pre>
      <div className={styles["questionOne__input-group"]}>
        <label className={styles.questionOne__label} htmlFor="N-input">
          N：
        </label>
        <div className={styles["questionOne__input-group-inner"]}>
          <input
            className={styles.questionOne__input}
            type="text"
            id="N-input"
            value={n}
            placeholder="請輸入正整數"
            onChange={handleInputChange}
          />
          <button className={styles.questionOne__button} type="submit">
            {"計算"}
          </button>
        </div>
      </div>
      {sum !== null && (
        <p className={styles.questionOne__result}>總和：{sum}</p>
      )}
    </form>
  );
}
