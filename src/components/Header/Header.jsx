import css from "./Header.module.css";
import BlackHeader from "./BlackHeader";
import clsx from "clsx";
import { Dropdown, Menu, Space } from "antd";
import { DownOutlined } from "@ant-design/icons";
import "./CustomDropdown.css";

import container from "../../container.module.css";
import { Link } from "react-router-dom";

const Header = () => {
  const items = [
    {
      label: <a href="ht">Prada</a>,
      key: "0",
    },
    {
      label: <a href="">Gucci</a>,
      key: "1",
    },
    {
      label: <a href="">Versace</a>,
      key: "2",
    },
    {
      label: <a href="">Zara</a>,
      key: "3",
    },
  ];

  return (
    <header>
      <BlackHeader arrow={true} />
      <div className={clsx(css.navContainer, container.container)}>
        <Link to="/" className={css.title}>
          INWH.SHOP
        </Link>
        <nav className={css.nav}>
          <ul className={css.navList}>
            <li>
              <a className={css.linkText} href="">
                Brands
              </a>
            </li>
            <li>
              <a className={css.linkText} href="">
                On sale
              </a>
            </li>
            <li>
              <a className={css.linkText} href="">
                New Arrivals
              </a>
            </li>
            <li>
              <Dropdown
                overlayClassName="custom-dropdown"
                menu={{ items }}
                trigger={["click"]}
              >
                <a onClick={(e) => e.preventDefault()}>
                  <Space size={4} className={css.shopBtn}>
                    Shop <DownOutlined style={{ fontSize: "10px" }} />
                  </Space>
                </a>
              </Dropdown>
            </li>
          </ul>
        </nav>
        <form>
          <input
            className={css.input}
            placeholder="Search for products..."
            type="text"
          />
        </form>

        <div className={css.iconsContainer}>
          <Link to="/">
            <svg className={css.icon} width="24" height="24" aria-hidden="true">
              <use href="../../../public/icons/symbol-defs.svg#icon-Frame-1" />
            </svg>
          </Link>
          <Link to="/cart">
            <svg className={css.icon} width="24" height="24" aria-hidden="true">
              <use href="../../../public/icons/symbol-defs.svg#icon-Frame" />
            </svg>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
