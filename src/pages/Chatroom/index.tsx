import styles from "./index.module.scss";
import Phone from "../../components/Phone";

export default function Chatroom() {
  return (
    <div className={styles.chatroom}>
      <Phone />
    </div>
  );
}
