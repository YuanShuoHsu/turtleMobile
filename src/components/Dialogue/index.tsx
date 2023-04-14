import styles from "./index.module.scss";

type DialogueProps = {
  status: boolean;
};

export default function Dialogue({ status }: DialogueProps) {
  return (
    <div className={`${styles.dialogue} ${status ? styles.active : ""}`}>
      <div
        className={`${styles.dialogue__headshot} ${
          status ? styles.active : ""
        }`}
      ></div>
      <div
        className={`${styles.dialogue__message} ${status ? styles.active : ""}`}
      ></div>
    </div>
  );
}
