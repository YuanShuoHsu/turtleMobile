import { MouseEvent } from "react";
import { NavLink } from "react-router-dom";
import styles from "./index.module.scss";

import { useDispatch, useSelector } from "react-redux";
import { hideSidebar } from "../../store/slice/sidebar";
import { RootState } from "../../store";

interface MenuItem {
  title: string;
  path: string;
}

interface SidebarProps {
  menuItems: MenuItem[];
}

export default function Sidebar({ menuItems }: SidebarProps) {
  const dispatch = useDispatch();
  const sidebarValue = useSelector((state: RootState) => state.sidebar.value);

  const handleSidebarHide = (event: MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      dispatch(hideSidebar());
    }
  };

  const handleLinkClick = () => {
    dispatch(hideSidebar());
  };

  return (
    <div
      onClick={handleSidebarHide}
      className={`${styles.sidebar} ${sidebarValue ? styles.active : ""}`}
    >
      <ul
        className={`${styles.sidebar__list} ${
          sidebarValue ? styles.active : ""
        }`}
      >
        {menuItems.map((item) => (
          <li className={styles.sidebar__item} key={item.path}>
            <NavLink
              onClick={handleLinkClick}
              className={styles.sidebar__link}
              to={item.path}
            >
              {item.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}
