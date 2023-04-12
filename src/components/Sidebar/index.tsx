import { NavLink } from "react-router-dom";
import styles from "./index.module.scss";

interface MenuItem {
  title: string;
  path: string;
}

interface SidebarProps {
  menuItems: MenuItem[];
}

export default function Sidebar({ menuItems }: SidebarProps) {
  return (
    <div className={styles["sidebar"]}>
      <ul className={styles["sidebar__list"]}>
        {menuItems.map((item) => (
          <li className={styles["sidebar__item"]} key={item.path}>
            <NavLink className={styles["sidebar__link"]} to={item.path}>{item.title}</NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}
