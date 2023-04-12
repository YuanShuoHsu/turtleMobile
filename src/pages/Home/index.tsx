import styles from "./index.module.scss";
import Header from "../../Header";
import Sidebar from "../../components/Sidebar";
import SumCalculator from "../../components/SumCalculator";
import Lottery from "../../components/Lottery";

const menuItems = [
  { title: "Home", path: "/" },
  { title: "About", path: "/about" },
  { title: "Contact", path: "/contact" },
];

export default function Home() {
  return (
    <div className={styles["home"]}>
      <Header />
      <Sidebar menuItems={menuItems} />
      <SumCalculator />
      <Lottery />
    </div>
  );
}
