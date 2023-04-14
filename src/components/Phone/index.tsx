import { useState, useEffect, FormEvent, ChangeEvent } from "react";
import styles from "./index.module.scss";
import Dialogue from "../Dialogue";

export default function Phone() {
  const [time, setTime] = useState<string>("");
  const [text, setText] = useState<string>("");

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, "0");
      const minutes = now.getMinutes().toString().padStart(2, "0");
      const formattedTime = `${hours}:${minutes}`;
      setTime(formattedTime);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setText("");
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.phone}>
      <div className={styles.phone__power} />
      <div className={styles.phone__volume} />
      <div className={styles.phone__inner}>
        <div className={styles.phone__header}>
          <div className={styles["phone__header-receiver"]}></div>
          <div className={styles["phone__header-speaker"]}>
            <div className={styles["phone__header-speaker-dot"]}></div>
            <div className={styles["phone__header-speaker-dot"]}></div>
            <div className={styles["phone__header-speaker-dot"]}></div>
            <div className={styles["phone__header-speaker-dot"]}></div>
            <div className={styles["phone__header-speaker-dot"]}></div>

            <div className={styles["phone__header-speaker-dot"]}></div>
            <div className={styles["phone__header-speaker-dot"]}></div>
            <div className={styles["phone__header-speaker-dot"]}></div>
            <div className={styles["phone__header-speaker-dot"]}></div>
            <div className={styles["phone__header-speaker-dot"]}></div>

            <div className={styles["phone__header-speaker-dot"]}></div>
            <div className={styles["phone__header-speaker-dot"]}></div>
            <div className={styles["phone__header-speaker-dot"]}></div>
            <div className={styles["phone__header-speaker-dot"]}></div>
            <div className={styles["phone__header-speaker-dot"]}></div>

            <div className={styles["phone__header-speaker-dot"]}></div>
            <div className={styles["phone__header-speaker-dot"]}></div>
          </div>
          <div className={styles["phone__header-camera"]}></div>
        </div>
        <div className={styles.phone__main}>
          <div className={styles["phone__main-box"]}>
            <div className={styles["phone__main-status"]}>
              <div className={styles["phone__main-signal"]}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                  <path d="M576 0c17.7 0 32 14.3 32 32V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V32c0-17.7 14.3-32 32-32zM448 96c17.7 0 32 14.3 32 32V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V128c0-17.7 14.3-32 32-32zM352 224V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V224c0-17.7 14.3-32 32-32s32 14.3 32 32zM192 288c17.7 0 32 14.3 32 32V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V320c0-17.7 14.3-32 32-32zM96 416v64c0 17.7-14.3 32-32 32s-32-14.3-32-32V416c0-17.7 14.3-32 32-32s32 14.3 32 32z" />
                </svg>
                <span className={styles["phone__main-signal-text"]}>4G</span>
              </div>
              <div className={styles["phone__main-endurance"]}>
                <span className={styles["phone__main-endurance-text"]}>
                  {time}
                </span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                  <path d="M464 160c8.8 0 16 7.2 16 16V336c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V176c0-8.8 7.2-16 16-16H464zM80 96C35.8 96 0 131.8 0 176V336c0 44.2 35.8 80 80 80H464c44.2 0 80-35.8 80-80V320c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32V176c0-44.2-35.8-80-80-80H80zm368 96H96V320H448V192z" />
                </svg>
              </div>
            </div>
            <div className={styles["phone__main-menu"]}>
              <div className={styles["phone__main-bars"]}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
                </svg>
              </div>
              <div className={styles["phone__main-camera"]}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path d="M149.1 64.8L138.7 96H64C28.7 96 0 124.7 0 160V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H373.3L362.9 64.8C356.4 45.2 338.1 32 317.4 32H194.6c-20.7 0-39 13.2-45.5 32.8zM256 192a96 96 0 1 1 0 192 96 96 0 1 1 0-192z" />
                </svg>
              </div>
            </div>
            <div className={styles["phone__main-contacts"]}>
              <Dialogue status={false} />
              <Dialogue status={true} />
              <Dialogue status={false} />
              <Dialogue status={true} />
              <Dialogue status={false} />
            </div>
            <div className={styles["phone__main-footer"]}>
              <input
                className={styles["phone__main-footer-input"]}
                type="text"
                value={text}
                onChange={handleInputChange}
              />
              <button className={styles["phone__main-footer-button"]}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
