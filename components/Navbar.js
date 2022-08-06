import React, { useState } from "react";
import Styles from "../styles/Navbar.module.css";
import MenuIcon from "@mui/icons-material/Menu";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import WebAssetOutlinedIcon from "@mui/icons-material/WebAssetOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Menu, Dropdown, Space, Input } from "antd";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PersonIcon from "@mui/icons-material/Person";
import HomeIcon from "@mui/icons-material/Home";
import SettingsIcon from "@mui/icons-material/Settings";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import "antd/dist/antd.css";
import CloseIcon from "@mui/icons-material/Close";

const menu = (
  <Menu
    items={[
      {
        label: (
          <div className={`${Styles.navbar_menu_subitems}`}>
            <HomeIcon className={`${Styles.navbar_menu_subitems_icon}`} /> Home
          </div>
        ),
        key: "user0",
      },
      {
        label: (
          <div className={`${Styles.navbar_menu_subitems}`}>
            <PersonIcon className={`${Styles.navbar_menu_subitems_icon}`} />{" "}
            Profile
          </div>
        ),
        key: "user1",
      },
      {
        label: (
          <div className={`${Styles.navbar_menu_subitems}`}>
            <SettingsIcon className={`${Styles.navbar_menu_subitems_icon}`} />{" "}
            Settings
          </div>
        ),
        key: "user2",
      },
      {
        label: (
          <div className={`${Styles.navbar_menu_subitems}`}>
            <PowerSettingsNewIcon
              className={`${Styles.navbar_menu_subitems_icon}`}
            />{" "}
            Logout
          </div>
        ),
        key: "user3",
      },
    ]}
  />
);

const Navbar = (props) => {
  const [collapsed, uncollapsed] = useState(true);
  const [search, setSearch] = useState(false);
  const toggleSearch = () => {
    setSearch(!search);
  };

  const toggle = () => {
    uncollapsed((value) => !value);
  };
  return (
    <>
      <div className={`${search == true ? "none_display" : "main_nav"}`}>
        <div className={`${Styles.left_mainnav}`}>
          <div
            className={`${Styles.left_mainnav}`}
            onClick={() => props.changeWord(collapsed)}
          >
            <MenuIcon
              className={`${Styles.margin_right_navbar} ${Styles.pointer_effect}`}
            />
          </div>
          <div className={`${Styles.left_mainnav} ${Styles.forDisplay}`}>
            <EmailOutlinedIcon className={`${Styles.margin_right_navbar}`} />
            <WebAssetOutlinedIcon className={`${Styles.margin_right_navbar}`} />
            <StarBorderOutlinedIcon />
          </div>
        </div>
        <div className={`${Styles.right_mainnav}`}>
          <SearchOutlinedIcon
            onClick={toggleSearch}
            className={`${Styles.margin_right_navbar} ${Styles.pointer_effect}`}
          />
          <NotificationsIcon className={`${Styles.margin_right_navbar}`} />
          <ShoppingCartIcon className={`${Styles.margin_right_navbar}`} />
          <Dropdown overlay={menu} trigger={["click"]}>
            <a
              onClick={(e) => e.preventDefault()}
              className={`${Styles.user_navbar}`}
            >
              <Space className={`${Styles.margin_right_navbar}`}>
                <p className={`${Styles.username_navbar}`}>
                  Hi
                  <span className={`${Styles.username_navbar_span}`}>
                    @Username
                  </span>
                </p>
              </Space>
              <Space>
                <AccountCircleIcon />
              </Space>
            </a>
          </Dropdown>
        </div>
      </div>
      <div className={`${search == false ? "none_display" : "search_nav"}`}>
        <Input placeholder="Search here.." />
        <CloseIcon
          className={`${Styles.margin_right_navbar} ${Styles.pointer_effect}`}
          onClick={toggleSearch}
        />
      </div>
    </>
  );
};

export default Navbar;
