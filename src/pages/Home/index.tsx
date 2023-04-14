import styles from "./index.module.scss";
import SumCalculator from "../../components/Calculator";
import Lottery from "../../components/Lottery";
import ExampleComponent from "../../components/ExampleComponent";

export default function Home() {
  return (
    <div className={styles.home}>
      <p>Wellcome</p>
      <p>烏龜移動</p>
      <p>turtle Mobile</p>
      <SumCalculator />
      <Lottery />
      <ExampleComponent/>
    </div>
  );
}
