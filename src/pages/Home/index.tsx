import styles from "./index.module.scss";

import Turtle from "../../components/Turtle";

export default function Home() {
  return (
    <div className={styles.home}>
      <Turtle />
    </div>
  );
}
