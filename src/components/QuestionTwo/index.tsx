import styles from "./index.module.scss";

import Raffle from "../Raffle";
// import Probability from "../Probability";

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
    </div>
  );
}
