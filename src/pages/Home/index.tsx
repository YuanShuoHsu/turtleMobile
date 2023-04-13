import styles from "./index.module.scss";
import SumCalculator from "../../components/Calculator";
import Lottery from "../../components/Lottery";

export default function Home() {
  return (
    <div className={styles.home}>
      <SumCalculator />
      <Lottery />
    </div>
  );
}
