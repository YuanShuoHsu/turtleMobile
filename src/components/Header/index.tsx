import styles from "./index.module.scss";
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { showSidebar, hideSidebar } from "../../store/slice/sidebar";
import { RootState } from "../../store";

export default function Header() {
  const dispatch = useDispatch();
  const sidebarValue = useSelector((state: RootState) => state.sidebar.value);

  const handleBarsToggle = () => {
    if (sidebarValue) {
      dispatch(hideSidebar());
    } else {
      dispatch(showSidebar());
    }
    document.body.style.overflow = sidebarValue ? "auto" : "hidden";
  };

  return (
    <div className={styles.header}>
      <div className={styles.header__logo}>
        <Link to="https://www.turtlemobile.com.tw/">
          <img src={logo} alt="烏龜移動" />
        </Link>
      </div>
      <div onClick={handleBarsToggle} className={styles.header__bars}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
        </svg>
      </div>
    </div>
  );
}
