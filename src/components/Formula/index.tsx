import { useState, ChangeEvent, FormEvent } from "react";

import styles from "./index.module.scss";

export default function Formula() {
  const [n, setN] = useState<string>("");
  const [sum, setSum] = useState<number | null>(null);

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
    <form onClick={handleSubmit} className={styles.formula}>
      <div className={styles["formula__input-group"]}>
        <label className={styles.formula__label} htmlFor="N-input">
          N：
        </label>
        <div className={styles["formula__input-group-inner"]}>
          <input
            className={styles.formula__input}
            type="text"
            id="N-input"
            value={n}
            placeholder="請輸入正整數"
            onChange={handleInputChange}
          />
          <button className={styles.formula__button} type="submit">
            {"計算"}
          </button>
        </div>
      </div>
      {sum !== null && <p className={styles.formula__result}>總和：{sum}</p>}
    </form>
  );
}
