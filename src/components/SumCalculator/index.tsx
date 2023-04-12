import { useState, ChangeEvent, FormEvent } from "react";
import styles from "./index.module.scss";

export default function SumCalculator() {
  const [n, setN] = useState<string>("");
  const [sum, setSum] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    const regex = /^[1-9]\d*$/;
    if (inputValue === "" || regex.test(inputValue)) {
      setN(inputValue);
    }
  };

  //     if (elapsedTime > MAX_RUNNING_TIME) {
  //       throw new Error("程式運行時間超過 3 秒");

  //   const MAX_RUNNING_TIME = 3000;

  const calculateSum = () => {
    let currentSum = 0;
    let sign = 1;

    for (let i = 1; i <= Number(n); i++) {
      currentSum += sign * i;
      sign *= -1;
    }

    return currentSum;
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (n === "") {
      return;
    }

    setIsLoading(true);
    setSum(null);

    try {
      setIsLoading(false);
      setSum(calculateSum());
    } catch (error: any) {
      setIsLoading(false);
      alert(error.message);
    }
  };

  // const result = await Promise.race([
  // calculateSum(),
  // new Promise((_, reject) =>
  // setTimeout(() => reject(new Error("Timeout")), 3000)
  // ),
  // ]);

  return (
    <form onSubmit={handleSubmit} className={styles["sum-calculator"]}>
      <h2 className={styles["sum-calculator__title"]}>Sum Calculator</h2>
      <p className={styles["sum-calculator__description"]}>
        寫一個函式計算下列公式之總和：
      </p>
      <p className={styles["sum-calculator__formula"]}>
        1+2-3+4-5+6-.....+ 或 - N
      </p>
      <p className={styles["sum-calculator__note"]}>（N 會是正整數）</p>

      <div className={styles["sum-calculator__input-group"]}>
        <label className={styles["sum-calculator__label"]} htmlFor="N-input">
          N：
        </label>
        <div className={styles["sum-calculator__input-group-inner"]}>
          <input
            className={styles["sum-calculator__input"]}
            type="text"
            id="N-input"
            value={n}
            placeholder="請輸入正整數"
            onChange={handleInputChange}
          />
          <button
            className={styles["sum-calculator__button"]}
            // onClick={handleCalculate}
            disabled={isLoading}
          >
            {isLoading ? "Loading..." : "Calculate"}
          </button>
        </div>
      </div>
      {sum && <p className={styles["sum-calculator__result"]}>總和: {sum}</p>}
    </form>
  );
}
