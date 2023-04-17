import styles from "./index.module.scss";

import chatroom from "../../images/chatroom.png";

import Phone from "../Phone";

export default function QuestionFour() {
  return (
    <div className={styles.questionFour}>
      <h2 className={styles.questionFour__title}>Chatroom</h2>
      <p className={styles.questionFour__description}>
        請根據下方示意圖，規劃聊天室的 component 上下層關係。
      </p>
      <div className={styles.questionFour__image}>
        <img src={chatroom} alt="聊天室" />
      </div>
      <div className={styles.questionFour__container}>
        <Phone />
      </div>
    </div>
  );
}
