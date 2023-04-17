import styles from "./index.module.scss";

import QuestionOne from "../../components/QuestionOne";

export default function Calculator() {
  return (
    <div className={styles.calculator}>
      <QuestionOne />
    </div>
  );
}
