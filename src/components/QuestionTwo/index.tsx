import styles from "./index.module.scss";

import Raffle from "../Raffle";
import Probability from "../Probability";

export default function QuestionTwo() {
  return (
    <div className={styles.questionTwo}>
      <h2 className={styles.questionTwo__title}>Lottery</h2>
      <p className={styles.questionTwo__description}>
        抽抽樂總共有五種獎項，1, 2 獎各只有一個，3 獎有三個，4 獎有五個，5
        獎有九個，請寫出一個程式可以<strong>「隨機」</strong>的取得
        <strong>「不重複」</strong>的禮物。
      </p>

      <Raffle />

      <hr />
      
      <p className={styles.questionTwo__description}>新增中獎機率：</p>
      <ul className={styles.questionTwo__list}>
        <li className={styles["questionTwo__list-item"]}>
          1 獎中獎機率為 0.1%
        </li>
        <li className={styles["questionTwo__list-item"]}>2 獎中獎機率為 3%</li>
        <li className={styles["questionTwo__list-item"]}>
          3 獎中獎機率為 13%{" "}
        </li>
        <li className={styles["questionTwo__list-item"]}>4 獎中獎機率為 18%</li>
        <li className={styles["questionTwo__list-item"]}>5 獎中獎機率為 25%</li>
      </ul>
      <p className={styles.questionTwo__note}>
        （如果有中獎機率代表有可能抽不到）
      </p>
      <Probability />
    </div>
  );
}
