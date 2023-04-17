import styles from "./index.module.scss";

import animation from "../../images/animation.gif";
import title from "../../images/title.png";

export default function Turtle() {
  return (
    <div className={styles.turtle}>
      <div className={styles.turtle__animation}>
        <img src={animation} alt="烏龜移動" />
      </div>
      <div className={styles.turtle__title}>
        <img src={title} alt="烏龜移動" />
      </div>
    </div>
  );
}
