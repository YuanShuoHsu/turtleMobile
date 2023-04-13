import styles from "./index.module.scss";

export default function Phone() {
  return (
    <div className={styles.phone}>
      <div className={styles.phone__header}>
        <div className={styles["phone__header-receiver"]}></div>
        <div className={styles["phone__header-speaker"]}>
          <div className={styles["phone__header-speaker-dot"]}></div>
          <div className={styles["phone__header-speaker-dot"]}></div>
          <div className={styles["phone__header-speaker-dot"]}></div>
        </div>
        <div className={styles["phone__header-microphone"]}></div>
        <div className={styles["phone__header-microphone"]}></div>
        <div className={styles["phone__header-camera"]}></div>
        <div></div>
      </div>
      <div className={styles.phone__main}>
        <div className={styles["phone__main-status"]}></div>
        <div className={styles["phone__main-menu"]}></div>
        <div className={styles["phone__main-contacts"]}></div>
        <div className={styles["phone__main-footer"]}>
          <input type="text" />
          <button>
            svg
          </button>
        </div>
      </div>
    </div>
  );
}
