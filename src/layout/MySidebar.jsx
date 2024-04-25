import { NavLink, useLocation } from "react-router-dom";
import { Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import {
  HomeFilled,
  AppstoreOutlined,
  ProductOutlined,
  HddOutlined,
  UserOutlined,
  BookOutlined,
  TeamOutlined,
  ApiOutlined,
  TableOutlined,
} from "@ant-design/icons";

const menu = [
  {
    path: "/home",
    label: "Home",
    icon: <HomeFilled />,
  },
  {
    path: "/meningJadvalim",
    label: "Mening Jadvalim",
    icon: <AppstoreOutlined />,
  },
  {
    path: "/jadvalUzgartirish",
    label: "Jadval o'zgartirish",
    icon: <TableOutlined />,
  },
];

const MySidebar = ({ collapse, setCollapse }) => {
  const loaction = useLocation();
  console.log(location.pathname);
  function menuClick(path) {
    if (path == "/jadval") {
      setCollapse(true);
    }
  }
  return (
    <Sider width={250} collapsed={collapse} style={{ background: "#00152A" }}>
      <div className="logo__border">
        {collapse ? (
          <div className="logo__box">
            <h2 className="logo">U</h2>
          </div>
        ) : (
          <div className="logo__box">
            <h2 className="logo">UniTime Planner</h2>
          </div>
        )}
      </div>
      <br />
      <Menu
        mode="inline"
        theme="dark"
        selectedKeys={[loaction.pathname]}
        items={menu.map((m, i) => ({
          ...m,
          key: m.path,
          label: (
            <NavLink onClick={() => menuClick(m.path)} to={m.path}>
              {m.label}
            </NavLink>
          ),
        }))}
      />
    </Sider>
  );
};

export default MySidebar;
