import Logo from "../../assets/logo.png";
import { MENUS } from "../../config";
import "./header.style.scss";
import useGetScroll from "../../utils/useWindowScroll";
import { NavLink } from "react-router-dom";

const Header = () => {
  const path = window.location.pathname;

  const { scrollMode } = useGetScroll();

  const renderMenu = () => {
    return (
      <ul>
        {MENUS.map((menu) => {
          return (
            <li key={menu.path}>
              <a
                className={path === menu.path ? "active" : ""}
                href={menu.path}
              >
                <span>{menu.name}</span>
              </a>
            </li>
          );
        })}
      </ul>
    );
  };

  return (
    <header
      className={`${scrollMode === "up" ? "transparent" : ""} ${
        scrollMode === "down" ? "hide" : ""
      }`}
    >
      <section>
        <NavLink to="/">
          <img src={Logo} alt="logo" height={50} />
        </NavLink>
        {renderMenu()}
      </section>
    </header>
  );
};

export default Header;
