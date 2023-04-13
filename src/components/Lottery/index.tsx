import { useState } from "react";
import styles from "./index.module.scss";

type Prize = 1 | 2 | 3 | 4 | 5; // 宣告 Prize 型別為 1~5 中的一個數字
type Lottery = Prize[]; // 宣告 Lottery 型別為 Prize 型別的數組

const prizes: Lottery = [1, 2, 3, 3, 3, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5]; // 宣告獎項數組

export default function Lottery() {
  const [result, setResult] = useState<Prize[]>([]); // 宣告結果數組的狀態
  const [isDone, setIsDone] = useState<boolean>(false); // 宣告是否完成抽獎的狀態

  const handleLottery = (): void => {
    if (prizes.length > 0) {
      const randomIndex = Math.floor(Math.random() * prizes.length); // 隨機取得一個數字，範圍為 0 ~ 獎項數組長度減 1
      const prize = prizes[randomIndex]; // 根據隨機取得的索引值從獎項數組中取得獎項
      setResult((prevResult) => [...prevResult, prize]); // 將取得的獎項加入結果數組中
      prizes.splice(randomIndex, 1); // 從獎項數組中刪除已經被抽中的獎項
    }

    if (prizes.length === 0) {
      setIsDone(true); // 當獎項數組被抽完時，設置抽獎完成的狀態為 true
    }
  };

  const handleReset = (): void => {
    setResult([]); // 重置結果數組
    setIsDone(false); // 重置抽獎完成的狀態
    prizes.push(...result); // 將已經抽出的獎項重新加入獎項數組中，以便下一次抽獎
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
      <p>如果有中獎機率代表有可能抽不到</p>
      {/* <button className={styles["lottery__button"]} onClick={selectPrize}>
        抽獎
      </button> */}
      {!isDone && (
        <>
          <button onClick={handleLottery}>抽獎</button>
          <p>已抽出的獎項：{result.join(', ')}</p>
        </>
      )}
      {isDone && (
        <>
          <p>恭喜您已經抽完所有獎項！</p>
          <button onClick={handleReset}>重新抽獎</button>
        </>
      )}
      {/* <ul className={styles["lottery__list"]}>
        {selectedPrizes.map((prize, index) => (
          <li className={styles["lottery__list-item"]} key={index}>
            {prize.name}
          </li>
        ))}
      </ul> */}
    </div>
  );
}
