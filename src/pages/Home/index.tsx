import styles from "./index.module.scss";
import SumCalculator from "../../components/SumCalculator";

export default function Home() {
  return (
    <div className={styles["home"]}>
      <SumCalculator />
    </div>
  );
}
