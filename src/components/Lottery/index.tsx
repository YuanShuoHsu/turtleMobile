import { useState } from "react";
import styles from "./index.module.scss";

interface Prize {
  name: string;
  count: number;
}

const prizes: Prize[] = [
  { name: "1 獎", count: 1 },
  { name: "2 獎", count: 1 },
  { name: "3 獎", count: 3 },
  { name: "4 獎", count: 5 },
  { name: "5 獎", count: 9 },
];

export default function Lottery() {
  const [selectedPrizes, setSelectedPrizes] = useState<Prize[]>([]);

  const selectPrize = () => {
  };

  return (
    <div className={styles["lottery"]}>
      <h2 className={styles["lottery__title"]}>Lottery</h2>
      <p className={styles["lottery__description"]}>
        抽抽樂總共有五種獎項，1, 2 獎各只有一個，3 獎有 3 個，4 獎有 5 個，5
        獎有 9 個，請寫出一個程式可以<strong>「隨機」</strong>的取得
        <strong>「不重複」</strong>的禮物，
      </p>
      <p className={styles["lottery__description"]}>且：</p>
      <ul className={styles["lottery__list"]}>
        <li className={styles["lottery__list-item"]}>1 獎中獎機率為 0.1%</li>
        <li className={styles["lottery__list-item"]}>2 獎中獎機率為 3%</li>
        <li className={styles["lottery__list-item"]}>3 獎中獎機率為 13% </li>
        <li className={styles["lottery__list-item"]}>4 獎中獎機率為 18%</li>
        <li className={styles["lottery__list-item"]}>5 獎中獎機率為 25%</li>
      </ul>
      <button className={styles["lottery__button"]} onClick={selectPrize}>
        抽獎
      </button>
      <ul className={styles["lottery__list"]}>
        {selectedPrizes.map((prize, index) => (
          <li className={styles["lottery__list-item"]} key={index}>
            {prize.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
