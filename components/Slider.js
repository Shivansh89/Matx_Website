import React, { useState } from "react";
import { Layout, Menu } from "antd";
import Link from "next/link";
import {
  AppstoreOutlined,
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
  DashboardOutlined,
  FundOutlined,
  UserOutlined,
  FileTextOutlined,
  PoundOutlined,
  ReadOutlined,
  RocketOutlined,
  StopOutlined,
  BellOutlined,
  DingdingOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import Switch from "@mui/material/Switch";
import Styles from "../styles/Slider.module.css";

const label = { inputProps: { "aria-label": "Switch demo" } };

const { Sider } = Layout;
const items = [
  getItem(<Link href="/">Dashboard</Link>, "sub1", <DashboardOutlined />),
  getItem("Analytics", "sub2", <PieChartOutlined />),
  getItem("Alternative", "sub3", <ContainerOutlined />),
  getItem(
    <Link href="/inventory_management">Inventory Management</Link>,
    "sub32",
    <UserOutlined />
  ),
  getItem("Pages", "sub31"),

  getItem("Customers", "sub4", <FileTextOutlined />, [
    getItem("Customer List", "2"),
    getItem(<Link href='/customers/view-customer'>View Customer</Link>, "3"),
    getItem(<Link href='/customers/new-customer'>New Customer</Link>, "4"),
  ]),
  getItem("Products", "sub5", <FundOutlined />, [
    getItem("Product List", "5"),
    getItem(<Link href='/products/view-product'>View Product</Link>, "6"),
    getItem(<Link href='/products/new-product'>New Product</Link>, "7"),
  ]),

  getItem("Orders", "sub6", <FundOutlined />, [
    getItem("Order List", "8"),
    getItem("View Order", "9"),
  ]),
  getItem("Help Center", "sub7", <PoundOutlined />, [
    getItem("FAQ 1", "10"),
    getItem("FAQ 2", "11"),
  ]),
  getItem("Pricing", "sub8", <ReadOutlined />, [
    getItem("Pricing 1", "12"),
    getItem("Pricing 2", "13"),
    getItem("Pricing 3", "14"),
    getItem("Pricing 4", "15"),
  ]),
  getItem("User List", "sub9", <ReadOutlined />, [
    getItem("User List 1", "16"),
    getItem("User List 2", "17"),
    getItem("User List 3", "18"),
    getItem("User List 4", "19"),
  ]),
  getItem("Forms", "sub10", <ReadOutlined />, [
    getItem("Order Form", "20"),
    getItem("Invoice Form", "21"),
    getItem("Property Listing Form", "22"),
    getItem("Basic", "23"),
    getItem("Editor", "24"),
    getItem("Upload", "25"),
    getItem("Wizard", "26"),
  ]),
  getItem("MatxList", "sub11", <DesktopOutlined />, [getItem("List", "27")]),
  getItem("Session/Auth", "sub12", <ReadOutlined />, [
    getItem("Sign In", "28"),
    getItem("Sign Up", "29"),
    getItem("Forgot Password", "30"),
    getItem("Error", "31"),
  ]),
  getItem("User Profile", "sub13", <AppstoreOutlined />),
  getItem("Apps", "sub14"),
  getItem("Ecommerce", "sub15", <ReadOutlined />, [
    getItem("Shop", "32"),
    getItem("Cart", "33"),
    getItem("Checkout", "34"),
  ]),
  getItem("Scrum Board", "sub16", <ReadOutlined />),
  getItem("Invoice Builder", "sub17", <ReadOutlined />),
  getItem("Calendar", "sub18", <ReadOutlined />),
  getItem(<Link href="/chat/chat-app">Chat</Link>, "sub19", <RocketOutlined />),
  getItem("Inbox", "sub20", <ReadOutlined />),
  getItem("Todo", "sub21", <SettingOutlined />),
  getItem("Tables", "sub22"),
  getItem("CRUD Table", "sub23", <StopOutlined />),
  getItem("Data Table", "sub24", <ReadOutlined />, [
    getItem("Simple Mui Table", "35"),
    getItem("Expandable Mui Table", "36"),
  ]),
  getItem("Components", "sub25"),
  getItem("Components", "sub26", <DingdingOutlined />, [
    getItem("Buttons", "37"),
    getItem("Checkbox", "38"),
  ]),
  getItem("Map", "sub27", <ReadOutlined />),
  getItem("Charts", "sub28"),
  getItem("Charts", "sub29", <BellOutlined />, [
    getItem("Echarts", "39"),
    getItem("Recharts", "40"),
    getItem("Apex Charts", "41"),
  ]),
  getItem("Documentation", "sub30", <ReadOutlined />),
];
function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

export default function Slider(props) {
  const [collapsed, uncollapsed] = useState(false);
  const toggle = () => uncollapsed((value) => !value);
  return (
    <>
      <div
        className={`${
          props.val === true ? "none_display" : "slider_main"
        } slider_main`}
      >
        <Sider
          width={230}
          style={{
            overflow: "auto",
            height: "100vh",
            left: 0,
            top: 0,
            bottom: 0,
          }}
          collapsed={props.val}
          onCollapse={toggle}
        >
          <div className={`${Styles.sider_top}`}>
            <div className={`${Styles.sider_right}`}>
              <BookmarkIcon className={`${Styles.sider_logo}`} />
              <h2 className={`${Styles.sider_h2}`}>Matx</h2>
            </div>
            <Switch
              {...label}
              defaultChecked={false}
              color="warning"
              className={`${Styles.sider_switch}`}
            />
          </div>
          <Menu
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            mode="inline"
            theme="dark"
            inlineCollapsed={collapsed}
            items={items}
          />
        </Sider>
      </div>
    </>
  );
}
